---
layout: post
title: Thinking in React, part 3
tags: [React, Design, Layout]
comments: True
description: Finally we have a static React mock-up!
---
In [part 2](/thinking-in-react-pt2/) I made up a plan for what components I needed to creat. I ended up with some extra components but I think it came out quite well anyway! I started to write down the components but I stoped since it just took a lot of time and didn't give anything. Instead I will try to [summarize my thoughts](#food-for-thoughts) so far on React and React-MDL at the end of the post. But first, a comparsion between my Illustrator and React mock ups!

## Master
I created a simple "Master-page" component to make it supersimple to reuse the shared components:
{% highlight javascript %}
<Layout fixedHeader>
  <CustomHeader />
  <Menu />
  <Content>
    <Container>
      {children}
    </Container>
  </Content>
</Layout>
{% endhighlight %}

## Menu
<div style="display: flex; flex-wrap: wrap">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_menu.gif" alt="React Components Of The App: Menu">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/menu.png" alt="React Components Of The App: Menu">
</div>
Not much to say here...

## Start page
<div style="display: flex; flex-wrap: wrap">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_start.gif" alt="React Components Of The App: Start Page">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/startPage.png" alt="React Components Of The App: Start Page">
</div>
The components ended up quite the same as in my mock up.

## Game
<div style="display: flex; flex-wrap: wrap">
<img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_game.gif" alt="React Components Of The App: The Game">
<img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/gameNum.png" alt="React Components Of The App: Game Number">
<img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/gameDrop.png" alt="React Components Of The App: Game Dropdown">
<img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/gamePractice.png" alt="React Components Of The App: Game Practice">
</div>

Here the result looks a bit different. I ended up swaping place for the place where the user adjusts the settings and the playground. This way I think it will be a bit nicer UX since the playground will be where it is the most natural place to rest your eyes. The textfields, the dropdown menus and the buttons at the bottom is all components, something I didn't plan for.

## Result
<div style="display: flex; flex-wrap: wrap">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/figurkoder_react_result.gif" alt="React Components Of The App: The Result">
  <img src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/result.png" alt="React Components Of The App: The Result">
</div>

Here I ended up with one less component instead, the whole table is just one component.


## Food for thoughts
### React
I think I start to like React. It's easy to end up with a lot of components but that also makes it easy to adjust a specific part of the page. It's also easy to reuse components, as for example the textfields on the [Game-page](#game). However, what I don't like is that the learning curve is quite high. I think I almost already has spent more time just on React than it took me to build the whole app previously when I did it during the summer using Typescript and Bootstrap alone. This slow process is really frustrating! I really hope it will speed up as I learn more, which I think. The last days I think I started to get quite proficient when building components. However I dread for starting to implement the logic in the app! Luckily I have to implement the React Router first.

### React-MDL
I just have one advice: <strong>Don't use it!</strong> Maybe it will be better in the future but right now it feels like it's working against me all the time and it's lacks some basic components like dropdown menus and it is far far behind [Material-UI](http://www.material-ui.com/) and [Materialize](http://materializecss.com/). I personally don't like using a design framework that I still end up writing CSS for. Even their own examples is full of inline CSS. I like Bootstrap where most of the time I only end up with a small CSS-file with my custom adjustments and styling. I also think that it will be quite hard to change framework now that I use their components. I would have prefered just adding class names to my own components so that I easely could change framework later on. React-MDL has taken some of the fun away from learning React but now I think the design is good enough to leave for now. Hopefully I will get time to change it later, maybe after the course or so, but for now I will stick with it.

### Summarization
I definitely see the advantage of React but React-MDL took away a lot of the fun of using React. Next time I will use my own components to give me greater control of my application but I will definitely keep using CSS-frameworks. At first I stuck with the inline CSS from the React-MDL examples and thought I would put them away in extern css-files later on but instead I refactored the code and put the css-code in objects that I could use for my html-tags in my components. I really like this way now since everything concerning a component is in one place. If I want to change something I don't have to edit several different files but just one file. Or maybe two, I put some CSS in a module that I could import.

{% include plugs/signature.html %}  

__________

Tune of the day:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/vmLo3HKl69E" frameborder="0" allowfullscreen></iframe>
