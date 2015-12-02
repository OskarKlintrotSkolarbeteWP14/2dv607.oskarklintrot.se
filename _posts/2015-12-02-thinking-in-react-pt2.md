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
<ol>
  <li>`Menu` <strong>(red)</strong></li>
</ol>

The component hierarchy will be very simple:
<ul>
  <li>`Menu`</li>
</ul>

## Start page
![React Components Of The App: Start Page](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_start.gif)  
This is the first thing the user will see when entering the app. Here all game options will be put so that the user easely choose what mnemomic images the user want to practice on. Here the app needs more components:
<ol>
  <li>`Container` <strong>(red)</strong></li>
  <li>`Header` <strong>(green)</strong></li>
  <li>`Tiles` <strong>(blue)</strong></li>
  <li>`Tile` <strong>(orange)</strong></li>
</ol>

The hierarchy will be pretty straight forward:
<ul>
  <li>`Container`</li>
  <ul>
    <li>`Header`</li>
    <li>`Tiles`</li>
    <ul>
      <li>`Tile`</li>
    </ul>
  </ul>
</ul>

## Game
![React Components Of The App: The Game](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_game.gif)  
Here it's a lot more stuff going on with the description, inputs and then at the bottom the playground.
<ol>
  <li>`Container` <strong>(red)</strong></li>
  <li>`Header` <strong>(green)</strong></li>
  <li>`GameContainer` <strong>(red)</strong></li>
  <li>`BackArrow` <strong>(dark green)</strong></li>
  <li>`Description` <strong>(blue)</strong></li>
  <li>`GameOptions` <strong>(purple)</strong></li>
  <li>`Playground` <strong>(brown)</strong></li>
</ol>

Still, the hierarchy is not so different from the [start page](#start-page):
<ul>
  <li>`Container`</li>
  <ul>
    <li>`Header`</li>
    <li>`GameContainer`</li>
    <ul>
      <li>`BackArrow`</li>
      <li>`Description`</li>
      <li>`GameOptions`</li>
      <li>`Playground`</li>
    </ul>
  </ul>
</ul>

## Result
![React Components Of The App: The Results](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_result.gif)  
This is the last page (except maybe some "about"-page etc but that's later on, it's just not prioritized) the user will use. After a game round this is where the user will be directed to and the results of the round will be displayed here.
<ol>
  <li>`Container` <strong>(red/purple/no idea)</strong></li>
  <li>`Header` <strong>(light green)</strong></li>
  <li>`ResultContainer` <strong>(brown)</strong></li>
  <li>`BackArrow` <strong>(dark green)</strong></li>
  <li>`ResultTable` <strong>(light blue)</strong></li>
  <li>`ResultRow` <strong>(dark blue)</strong></li>
</ol>

This hierarchy is actually the deepest:
<ul>
  <li>`Container`</li>
  <ul>
    <li>`Header`</li>
    <li>`ResultContainer`</li>
    <ul>
      <li>`BackArrow`</li>
      <li>`ResultTable`</li>
      <ul>
        <li>`ResultRow`</li>
      </ul>
    </ul>
  </ul>
</ul>

## What's Next?
I am now at [Step 2: Build a static version in React](https://facebook.github.io/react/docs/thinking-in-react.html#step-2-build-a-static-version-in-react) in the [Thinking In React-tutorial](https://facebook.github.io/react/docs/thinking-in-react.html). My aim is to having something to show by the end of the week, [knock on wood](https://en.wikipedia.org/wiki/Knocking_on_wood)...

{% include plugs/signature.html %}  

__________

Tune of the day:  
<iframe width="420" height="315" src="https://www.youtube.com/embed/N_c60Sp7Gtc" frameborder="0" allowfullscreen></iframe>
