---
layout: post
title: Thinking in React, part 2
tags: [React, Design, Layout]
comments: True
description: With the mock up-png's done we move on to name the components and create an hierarchy.
---
In [part 1](/thinking-in-react/) we ended with this picture:  
![React Components Of The App](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react.gif)
In the upper left we have the [menu](#menu) and to the right the [start page](#start-page). The bottom left mock is the actual [game](#game) and to the right the [result](#result) that will be displayed after the game.

## Menu
![React Components Of The App: Menu](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_menu.gif)  
Let's start with the menu. There we can put the boring stuff like links to "About this page" etc. The menu will probably be just one component:
1. `Menu` <strong>(red)</strong>

The component hierarchy will be very simple:
- `Menu`

## Start page
![React Components Of The App: Start Page](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_start.gif)  
This is the first thing the user will see when entering the app. Here all game options will be put so that the user easely choose what mnemomic images the user want to practice on. Here the app needs more components:
1. `Container` <strong>(red)</strong>
2. `Header` <strong>(green)</strong>
3. `Tiles` <strong>(blue)</strong>
4. `Tile` <strong>(orange)</strong>

The hierarchy will be pretty straight forward:
- `Container`
  - `Header`
  - `Tiles`
    - `Tile`

## Game
![React Components Of The App: The Game](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_game.gif)  
Here it's a lot more stuff going on with the description, inputs and then at the bottom the playground.
1. `Container` <strong>(red/purple/no idea)</strong>
2. `Header` <strong>(light green)</strong>
3. `GameContainer` <strong>(red)</strong>
4. `BackArrow` <strong>(dark green)</strong>
5. `Description` <strong>(blue)</strong>
6. `GameOptions` <strong>(purple)</strong>
7. `Playground` <strong>(brown)</strong>

Still, the hierarchy is not so different from the [start page](#start-page):
- `Container`
  - `Header`
  - `GameContainer`
    - `BackArrow`
    - `Description`
    - `GameOptions`
    - `Playground`

## Result
![React Components Of The App: The Results](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_result.gif)  
This is the last page (except maybe some "about"-page etc but that's later on, it's just not prioritized) the user will use. After a game round this is where the user will be directed to and the results of the round will be displayed here.
1. `Container` <strong>(red/purple/no idea)</strong>
2. `Header` <strong>(light green)</strong>
3. `ResultContainer` <strong>(brown)</strong>
4. `BackArrow` <strong>(dark green)</strong>
5. `ResultTable` <strong>(light blue)</strong>
6. `ResultRow` <strong>(dark blue)</strong>

This hierarchy is actually the deepest:
- `Container`
  - `Header`
  - `ResultContainer`
    - `BackArrow`
    - `ResultTable`
      - `ResultRow`

## What's Next?
I am now at [Step 2: Build a static version in React](https://facebook.github.io/react/docs/thinking-in-react.html#step-2-build-a-static-version-in-react) in the [Thinking In React-tutorial](https://facebook.github.io/react/docs/thinking-in-react.html). My aim is to having something to show by the end of the week, [knock on wood](https://en.wikipedia.org/wiki/Knocking_on_wood)...

{% include plugs/signature.html %}  

__________

Tune of the day:
<iframe width="420" height="315" src="https://www.youtube.com/embed/N_c60Sp7Gtc" frameborder="0" allowfullscreen></iframe>
