---
layout: post
title: My thoughts on React and ES2015 so far
tags: [React, Javascript]
comments: True
description: I got a question from David Waller that I'm going to answer here.
---
My [last post](/thinking-in-react-pt3/) ended with the section [food-for-thoughts](/thinking-in-react-pt3#food-for-thoughts) so why do I write about it again? Well, today I got this question from David "Yoda" Waller:

  > There definitely is a threshold to cross before you really "grok" React. But, I wonder, do you find that the cost to do that for React is higher than for other frameworks?

Now that I have done [another React-app](http://trafik.oskarklintrot.se/) in [another course](https://github.com/OskarKlintrotSkolarbeteWP14/1DV449_oklib08/tree/gh-pages) I think I can answer the question better than just after using React-MDL. I have made some mistake throughout this course that have made my learning much slower than it had to be. My two biggest is propably these two:

<ol>
  <li> Trying to learn React, React router and Redux before starting the project
    <ul>
      <li> We had some time to do some research before starting with our projects and I tried to grasp it all. I was to stubborn and spend way to much time trying to understand everything before I started coding. That way I ended up forgetting about React after I finally understod Redux and now that I soon will implement Redux (just need to get React Router up'n'running first) I have forgot most about Redux instead.
      </li>
    </ul>
  </li>
  <li> Using React-MDL instead of a CSS framwork
    <ul>
      <li> Material Design looks really sleek and then having MD as React components, that must be great right? Well, maybe if your familiar with Material Design and React but if your new... I think I would have got the static React components together way faster if I would have used Bootstrap that I'm familiar with already and then I also could have used pure HTML in my components, making it easy to see what it would render like and easy to change the design framework later on.
      </li>
    </ul>
  </li>
</ol>

## Summarizing React and ES2015 so far

### React

When I where going to start the last assignment in [1dv449](https://coursepress.lnu.se/kurs/webbteknik-ii/) I thought that I would try to use React and make it all client-side since servers just feels soooo -95. Using just pure React felt like a dream compared to all other front-end stuff I have ever used! I say stuff since I have never used any proper JS-framework (like Angularjs) before. But when using React I don't have to put all html in templates just in order to make it readably and possible to find. I don't end up in callback hell. I don't need jQuery. My app dosen't crash because I have a space in the wrong place (YES, I'M LOOKING AT YOU JADE!!!). I can still think in objects/components. I can easely put all styling for one component together with the component and not in a massive CSS file. It solves most (all?) of my issues with front-end development! I just love it!

### ES2015

As we all know, [this is how you would illustrate Javascript with a picture](http://crashworks.org/if_programming_languages_were_vehicles/):
> <img src="http://i.imgur.com/F1bBsrF.jpg" />
> This is Javascript. If you put big wheels and a racing stripe on a golf cart, it's still a fucking golf cart.

I think that as of ES2015 this would be a better way to illustrate Javascript:
> <img src="http://1.bp.blogspot.com/-tPlwR4x3-qg/TWfjU7PQMvI/AAAAAAAAAJQ/rjGgKuM52QM/s1600/jet+fighter.jpg" />

It's still quite bizarre but it has become high-tech and fun and the language is no longer in the way, it's just there flying low under the radar (pun intended). Jokes beside, I think that just as React (and webpack) solves my issues with front-end development ES2015 solves most of my issues with ES5. I mean, I can import stuff now and don't have to do that bizarre thing to load the js-files in correct order and put everything I want to use in other files on the global namespace. I can't belive modules took that long before they where included. I mean, the C-people realized that in the begining of the 80's and created C++ but it took Javascript another two decades to implement it. And I know I'm mixing up modules and classes and namespaces hej kom och hjälp but the aim is the same with all that stuff.

## Summing up

<iframe width="560" height="315" src="https://www.youtube.com/embed/qY5a0O7qpZY" frameborder="0" allowfullscreen></iframe>

I think that just React has a pretty low entry level due to it's small API and good docs. However you still don't have many examples to go by on stackoverflow, for example. But the docs are helpful.

{% include plugs/signature.html %}  

__________

Tune of the day:  
<iframe width="420" height="315" src="https://www.youtube.com/embed/72zi8mbXwAs" frameborder="0" allowfullscreen></iframe>
