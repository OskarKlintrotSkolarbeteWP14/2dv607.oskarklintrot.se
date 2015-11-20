---
layout: post
title: Understanding Redux with Redux DevTools
tags: [React, Redux, Redux DevTools]
comments: True
description: I finally starts to understand how Redux work. A cool tool I have found is Redux DevTools which let's you see what's actually is going on in your application
---
I have spend the week trying to get my head around Redux. Today I finaly starts to feel that I at least got a clue about how Redux works. Also today I found a great blog post with an easy to understand overall [explanation of Redux](http://staltz.com/unidirectional-user-interface-architectures.html). I liked the flowchart so much that I made my own:
![Flowchart over Redux](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/redux_workflow.png)

Another great resource for fiddling with Redux is the [Redux DevTools](https://www.npmjs.com/package/redux-devtools). I added it to David Waller's demo app. First I hade to add it as a dependancy to the project:
{% highlight powershell %}
> npm install --save-dev redux-devtools
{% endhighlight %}

Then in `index.js` I added the following React components for Redux DevTools:
{% highlight javascript %}
var DevTools = require('redux-devtools/lib/react').DevTools,
  DebugPanel = require('redux-devtools/lib/react').DebugPanel,
  LogMonitor = require('redux-devtools/lib/react').LogMonitor;
{% endhighlight %}

I had to add it after the provider to make it visible in the browser, the `ReactDOM.render()` ended up like this:
{% highlight javascript %}
ReactDOM.render(
	<div>
		<Provider store={store}>
			<Router routes={routes}/>
		</Provider>
		<DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
	</div>,
	document.getElementById("root")
);
{% endhighlight %}

Next up, Redux DevTools also needs to be added to the store so in `src/store.js` I added:
{% highlight javascript %}
// Redux DevTools store enhancers
var devTools = require('redux-devtools').devTools,
	persistState = require('redux-devtools').persistState;
{% endhighlight %}

Redux DevTools is a store enhancer ([basically a middleware](http://rackt.org/redux/docs/Glossary.html#store-enhancer)) that needs to be added after the rest of the middleware's in order to get the asynchronous stuff that could happen in the other middlewares. I had to do some refactoring and ended up with this:
{% highlight javascript %}
var finaleCreateStore = Redux.compose(
	Redux.applyMiddleware(thunk),
	  // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)((Redux.createStore));

module.exports = finaleCreateStore(rootReducer,initialState());
{% endhighlight %}

<s>The source code is of course on [github](https://github.com/oskarklintrot/riastart2015) and you can also check out a working example here: [http://oskarklintrot.github.io/riastart2015/](http://oskarklintrot.github.io/riastart2015/).</s>

UPDATE: The source code is now [here](https://github.com/OskarKlintrot/riastart2015/tree/original+devtools) in a different bransch and the [gh-pages example](http://oskarklintrot.github.io/riastart2015/)now have bombs added as of 2015-11-20.

{% include plugs/signature.html %}  

__________

Tune of the day:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyYwjqkA-lw" frameborder="0" allowfullscreen></iframe>
