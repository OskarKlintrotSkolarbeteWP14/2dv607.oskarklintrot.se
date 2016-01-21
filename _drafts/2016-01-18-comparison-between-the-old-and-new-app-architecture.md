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

The following sequence diagram is for rendering a single game. `Tile` is a child component to `StartPage` and each `Tile` is mapped to a game from Data. 

![Render game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/NewRenderGameUMLSequenceDiagram.png)

### Start Game Sequence Diagram

![Start game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/new/NewStartGameUMLSequenceDiagram.png)

## [Old app](https://github.com/OskarKlintrot/Mnemonic-Images-Training/)

### Design Diagram

![Design diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/oldAppDesignDiagram.png)

### Render Game Sequence Diagram

![Render game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/OldRenderGameUMLSequenceDiagram.png)

### Start Game Sequence Diagram

![Start game sequence diagram](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/uml/old/OldStartGameUMLSequenceDiagram.png)

{% include plugs/signature.html %}  

__________

Tune of the day:  
<iframe width="420" height="315" src="https://www.youtube.com/embed/qVaEPx_VyXs" frameborder="0" allowfullscreen></iframe>
