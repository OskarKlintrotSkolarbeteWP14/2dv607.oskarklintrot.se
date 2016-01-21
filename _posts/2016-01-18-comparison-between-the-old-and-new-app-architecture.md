---
layout: post
title: Comparison Between The Old And New App Architecture
tags: [Architecture, UML, Design, Typescript, Javascript, React, Redux]
comments: True
description:
---
This post will be a comparsion between my previous app that where built in Typescript with Bootstrap, Mustache.js and jQuery and this app written in ES2015/2016 with React, Redux, React-MDL and what not. The comparsion will be on how the architecture is designed.

I have tried to squeeze both apps architecture into the MVC pattern so that they will be easier to compare and also more self explanatory since it's a very common pattern.

## [New App](https://github.com/OskarKlintrot/figurkoder.se/)

### Design Diagram

The new app fits very nice into the MVC pattern. I have not included all child components, I have just shown the child components to `Master` as an example. The design looks really good but there are some things worth noting. First up, `App` starts the app but the actual controller, to speak MVC, is not "started" by `App` but is actually initialized by `Root`, which lives in the View. That is not according to the MVC pattern. The View is never communicating directly with the data but always through the Model. `Games` works as a node between the objects containing all the data for the app and both the View and the Model, via `GetMnemonicImages`. Also note that the only assocations we got is between the classes and object handling the Redux action creators. Finally note that all games is living as data and not in the view. This means that if we want to expand the games to 100 games all we need to do is add each game as data and do some minor mapping in the model (there propably exsists a ORM for files but I didn't bother) and voilá! The app has been scaled that easy! We don't have to touch either the View or the rest of the Model or the Controller at all. So this design is great when it comes to scalability.

![Design diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/newAppDesignDiagram.png)

#### Game Component

Why did I exlude the child component? Glad You asked! This is what the Game component looks like:

![Game component](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/gameComponentDesignDiagram.png)

As you can see it would just be horrendous to look at. Using `React-Redux` it is just the top level components that should be aware of the state, then the state should be passed through as props to the child components. So it should not really matter what the child component looks like, the connection between the View and the Model should still just be in the top level components. Now I know that I have made some mistakes with this in my app but let's pretend I have done it this way... Anyway, as you can see there is a ton of child components. Each child component is just responsible for one thing (most of the times) which gives us both high cohesion and but not necessary low coupling. There is indeed a low dependancy between each of the classes and high reuse potential of each class but one change in a class can result in that the whole app gets another UI!

### Render Game Sequence Diagram

The following sequence diagram is for rendering a single game. `Tile` is a child component to `StartPage` and each `Tile` is mapped to a game from Data. When the link is clicked React-Router routes the user to the `Game` component along with the parameters from the link, telling the `Game` component which game to render. Then it gets the data for that game from `Games` in the Model for rendering the title etc and the first pair from `GetMnemonicImages` for rendering placeholders for the user to see before starting the game.

![Render game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/NewRenderGameUMLSequenceDiagram.png)

### Start Game Sequence Diagram

When starting the game we see the wonderful unidirectional data flow that you get when working with Redux or Flux. When the game is started both `startGame()` and `next()` are triggered but there is a delay on `next()` specified by the user. `startGame()` get the pairs from the model, using the settings that lives in the state, which it can access in the Action Creator. After that it dispatches an Action to the Reducer telling Redux that the game is on. Redux updates it's subscribers with the new state and React updates the Virtual DOM accordingly and after that the browsers DOM. The flow is very easy to find in the code, especially since all the logic lives inside the Redux Store.

![Start game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/NewStartGameUMLSequenceDiagram.png)

## [Old app](https://github.com/OskarKlintrot/Mnemonic-Images-Training/)

### Design Diagram

First I must say that this app where abandoned since the code where not maintainable without a big overhaul. For example, all data lives toghether with the model in one single file. This where going to be fixed but the project got abandoned before that happend. But the most interesting difference is not the difference between the apps Model and Data but in the View. I hope you remember what I said about how you can scale the new app with adding more games to the Data? If you want to add more games you must add it both to the Data and to the View, making it much more of a pain to scale and to maintain. Updating 100 different classes in the View just to change the UI is not something you want to do. Another important difference is that we have low cohesion, the code is all over the place. We also have high coupling due to all the associations and the inheritance.

![Design diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/oldAppDesignDiagram.png)

### Render Game Sequence Diagram

In this diagram it becomes more obvious that we have low cohesion and high coupling. The data flow is just bouncing around between the classes! `Days` inherits `GameEngine` but here they are seperated to show the way you would be reading the code. Note however that I'm using mustache.js for rendering templates but I'm not showing the Ajax-calls for the templates since I'm not showing the child components in the new app so I don't think that would be a fair comparsion. A lot of the jumpiness in the code though is due to the callbacks needed for rendering only parts of the page at a time and still get everything in the right order. Since React is using their Virtual DOM and updates it with props this is not an issue in React.

![Render game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/OldRenderGameUMLSequenceDiagram.png)

### Start Game Sequence Diagram

This sequence diagram took the longest to create! The code where just bouncing around and it took a lot of effort and debugging to grasp what was actually going on here. The final thing that happend when rendering the game where to subscribe an event to the start button. This is done inside `RenderPlayground()`, the same function that the diagram above ended with. It runs it again but this time it also runs `PracticeSetup()` (that where sent to `RenderPlayground()` earlier as a callback) where we first get the templates and then it gets the settings from the DOM and the DOM nodes and sends it to `MnemonicImagesSlider()` where the logic for actually starting the game lives.

![Start game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/OldStartGameUMLSequenceDiagram.png)

## Summary

Using React and Redux is a great way of avoiding common pitfalls as callbacks and where the state should live. In my old app I got the settings from the DOM and the templates from Ajax-calls and then after that calls it executed callbacks for what where going to happen next. In the new app all changes in the settings is stored in the store so when starting the game all settings is already there. The dataflow in a Redux app gets unidirectional which makes the code much easier to read. Using React and Redux also gives a much better separation of the View and the Model. React components is also great for getting low coupling and high cohesion since the components can be made very isolated, they can even contain their own CSS.

{% include plugs/signature.html %}  

__________

Tune of the day:  
<iframe width="420" height="315" src="https://www.youtube.com/embed/qVaEPx_VyXs" frameborder="0" allowfullscreen></iframe>
