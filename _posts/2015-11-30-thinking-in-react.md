---
layout: post
title: Thinking in React
tags: [React, Design, Layout]
comments: True
description: Finally! The project is on! In this post I will show you the design of the project app.
---
My project will be to do a remake of my own application [figurkoder.se](http://figurkoder.se). The current iteration is done in Typescript but since I want to be a better Javascript-developer I will instead go with ES2015 that I will transpile down to ES5 and host the application on GitHub-pages. I will use React for the view, Redux for the "state" and React Router for the router. Captain Obvious says hello! In a long long long long term I want to make it possible for each user to track their progress and using Firebase for storing that data. I also wan't to make it possible to use offline without having to port it to apps.

## The Design
I where going to stick with my previous design since UI/UX definitely is not my strong side and the current design works. Then I run into [this amazing web app] (http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org) that quite literally blow my mind! I honestly didn't thought you could get that performance and feel in a non native app! I really liked the design so I will try to use [material ui](http://www.material-ui.com/) which is "A Set of React Components that Implement Google's Material Design", according to themself.

Using [Google Material Design Layout Templates](https://www.google.com/design/spec/resources/layout-templates.html) I did a mock up:  
![Layout Of The App](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/figurkoder.gif)

The next step where to [think in React](https://facebook.github.io/react/docs/thinking-in-react.html) and try to identify what components I will need to create:  
![React Components Of The App](https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/figurkoder_react.gif)

Now I have something to work on!

That's it for today!

{% include plugs/signature.html %}  

__________

Tune of the day (dedicated to David Waller):
<iframe width="420" height="315" src="https://www.youtube.com/embed/E0f5zlagj4E" frameborder="0" allowfullscreen></iframe>
