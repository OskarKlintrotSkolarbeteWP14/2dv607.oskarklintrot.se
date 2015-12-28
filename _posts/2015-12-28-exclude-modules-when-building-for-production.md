---
layout: post
title: Exclude Modules When Building For Production
tags: [Javascript, Redux, Redux DevTools, Webpack]
comments: True
description: Sometimes you want to use different modules when developing an app and when you build it for production. In this post I will show you a practical example on how you can do it using Webpack.
---
In this example we will take a look on how to exclude Redux DevTools when building an app for production. First we will have to decide weither to use NODE_ENV or pass an argument as a flag. Using NODE_ENV will give us a cleaner code in the Webpack config file but you set the NODE_ENV in different on different os. Using a flag will give you a tad more ugly looking code but is on the other hand cross-platform compatible. I always prefer cross-platform compatibility before good looking code since it's just plain stupid to do stuff in different ways on different os's.

## package.json

My npm scripts look like this:

{% highlight Javascript %}
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --progress --colors --production"
}
{% endhighlight %}

If you want to use NODE_ENV it will look like this:

{% highlight Javascript %}
// Windows
"scripts": {
  "start": "set NODE_ENV=development&&webpack-dev-server",
  "build": "set NODE_ENV=production&&webpack --progress --colors"
}
// Unix-like OS
"scripts": {
  "start": "NODE_ENV=development webpack-dev-server",
  "build": "NODE_ENV=production webpack --progress --colors"
}
{% endhighlight %}

Also note that when using NODE_ENV you will have to "reset" it, as I do in the start-script.

## webpack.config.js

The first thing we will do in the webpack config file is to set a const to true if we are having the `--production` flag.

{% highlight Javascript %}
const production = process.argv.find((element) => element === '--production') ? true : false
{% endhighlight %}

As I said, if we use NODE_ENV we will get a much cleaner code:

{% highlight Javascript %}
const production = process.env.NODE_ENV === 'production'
{% endhighlight %}

Now, inside our `config`-object we can use a plugin called DefinePlugin in order to set a global variable that we can use inside our source code. I know, a global variable isn't so pretty, that's one reason I still wonder if this is a hack or a bodge...

{% highlight Javascript %}
plugins: [
  new webpack.DefinePlugin({
      PRODUCTION: production,
  }),
]
{% endhighlight %}

Outside the object we also need to add the uglify plugin, since that is what actually removes the modules that isn't used from the production code.

{% highlight Javascript %}
if (production) {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ].concat(config.plugins)
}
{% endhighlight %}

## Module vs Namespace

To explain why we need to understand what's special about modules, compared to for example namespace's in C++ and C#. If you know the diffrence then you can just skip this bit.

### Namespace

A namespace could be described as a door to a room. When writing `using System.IO.Ports;` in C# we only say to the compiler that this door is ok to use if needed. If we don't use any `SerialPort`'s then the compiler dosen't include that code. In C++ we can specify exactly what we need inside the room that the namespace is the door to. If we write `std::cout` (after included the standard library iostream with `#include <iostream>`) then we tell the compiler to include only the code in the standard library needed for the standard output stream and no more. We also tell the compiler to include everything in that namespace from the included files with `using namespace std;` and that not far from how modules works in Javascript.

### Module

In Javascript most of the functionality we want to use is already included in the language. We don't have to import a library in order to use strings (which in C++ literally just is a wrapper for an array of characters). The extra things we need we can include as modules. When we import a module in Javascript then that's similar to include a namespace in C++ (not C#) since we get all the code and not just the door. This will include a lot of code we don't want to include in the production build:

{% highlight Javascript %}
// Redux DevTools store enhancers
import { persistState } from 'redux-devtools/lib'
import DevTools from '../../components/devTools'
{% endhighlight %}

## Application Source Code

The `PRODUCTION` could be used as is in the source code but I already have an object with constants so I put it there instead:

{% highlight Javascript %}
// In constants.js
Constants.PRODUCTION = PRODUCTION
{% endhighlight %}

My app.jsx (also commonly named index.jsx) looks like this:

{% highlight Javascript %}
import Constants from './redux/constants'
import React from 'react'
import ReactDOM from 'react-dom'
./components/root
import configureStore from './redux/store'
import InitialState from './redux/initialState'
const Store = configureStore(InitialState())

ReactDOM.render(
  <Root store={ Store } />
, document.getElementById('app'))
{% endhighlight %}

The Redux DevTools lives in both the Root component in order to render the GUI and also in the Store as a store enhancer.

### Root

`'./components/root'` in `./components/root` is actually a folder. In the folder I have a file called `index.js`, which webpack automatically finds. The code inside `index.js` is quite minimal:

{% highlight Javascript %}
import Constants from '../../redux/constants'

if (Constants.PRODUCTION) {
  module.exports = require('./root.prod')
} else {
  module.exports = require('./root.dev')
}
{% endhighlight %}

This code is a walkaround the limitation that you can't put `import` inside an if-statment. Instead we use the older CommonJS syntax require to import the correct module and export it.

`root.dev.jsx` is just a normal React-component with DevTools added to it:

{% highlight Javascript %}
import React from 'react'
import { Router } from 'react-router'
import routes from '../../routes'
import { Provider } from 'react-redux'
import DevTools from '../../components/devTools'

const Root = (props) => {
  const { store } = props

  return (
    <Provider store={ store }>
      <div>
        <Router routes={ routes } />
        <DevTools />
      </div>
    </Provider>
  )
}

export default Root
{% endhighlight %}

`root.prod.jsx` is the same component but without DevTools.

### Store

The store is very similar to the Root-component so I will just dump the code here:

#### store/index.js

{% highlight Javascript %}
import Constants from '../constants'

if (Constants.PRODUCTION) {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
{% endhighlight %}

#### store/configureStore.dev.js

{% highlight Javascript %}
import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from '../reducers/combinedReducers'
import Thunk from 'redux-thunk'

// Redux DevTools store enhancers
import { persistState } from 'redux-devtools/lib'
import DevTools from '../../components/devTools'

const finaleCreateStore = compose (
  applyMiddleware(Thunk),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)((createStore))

function getDebugSessionKey() {
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

export default function configureStore(initialState) {
  const store = finaleCreateStore(CombinedReducers, initialState)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept(CombinedReducers, () =>
      store.replaceReducer(CombinedReducers)
    )
  }

  return store
}
{% endhighlight %}

#### store/configureStore.prod.js

{% highlight Javascript %}
import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from '../reducers/combinedReducers'
import Thunk from 'redux-thunk'

export default function configureStore(initialState) {
  return createStore(CombinedReducers, initialState)
}
{% endhighlight %}

## UglifyJsPlugin

In the begining we added the UglifyJsPlugin to the webpack config file when building for production. When Uglify uglifies the code it will remove all dead code as this will become in production:

{% highlight Javascript %}
if (true) {
  module.exports = require('./configureStore.prod')
} else {                                            // This
  module.exports = require('./configureStore.dev')  // will be
}                                                   // removed
{% endhighlight %}

Since nothing in our `configureStore.dev` ever will be used Uglify will remove that code and the user won't have to either load the code onto the client neither have the DevTools in the app slowing things down and looking weird. As you can see we have ended up with a loot of duplicated code and extra files so their is a bit more to maintain but on the other hand we can add DevTools, logging middleware etc into the development store and still just run `npm run build` in order to create a production build without our developer tools and no extra size of the boundle.js.

{% include plugs/signature.html %}  

__________

Tune of the day:  
