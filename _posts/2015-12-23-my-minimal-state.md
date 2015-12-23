---
layout: post
title: My Minimal State
tags: [React, Javascript, Redux]
comments: True
description: On a quest to find the minimal state my app need to have
---
The React part of my app is almost done. There is just one small issue before going on and implementing Redux in it. What I need to know before moving on from my static React app is what state do I actually need?

## Functionality

<img style="height: auto;
  width: auto;
  max-height: 550px;" src="https://raw.githubusercontent.com/OskarKlintrotSkolarbeteWP14/2dv607.oskarklintrot.se/gh-pages/public/pics/screenshots_2015-12-08/gamePractice.png" alt="Game Practice">

The app just goes through an array and displays two values ("C" and "Chokladtårta" in the example above). The second value could be hidden, depending on what the settings are. That's the main thing. For that we need the data and to know if the second value should be hidden or not:

{% highlight Javascript %}
state = {
  data: [],
  hidden: false
}
{% endhighlight %}

Since we can start, pause and stop the game I think we need a property for that as well, we can call it status:

{% highlight Javascript %}
state = {
  data: [],
  hidden: false,
  status: "start"
}
{% endhighlight %}

The timer that changes value needs to know what the interval should be and I think that should live in the state as well:

{% highlight Javascript %}
state = {
  data: [],
  hidden: false,
  status: "start",
  interval: 6
}
{% endhighlight %}

If the user want's to learn the mnemomic images then they should be looped and if not the should only be displayed once and then the result for how long time the user looked at them is going to be displayed. So for this to work we need to know if the user is practicing or not and the results. I don't think we need to put the lapsed time in the state since the action already have to know it and I guess we can get it from there. It just feels stupid to update the state every lapsed millisecond.

{% highlight Javascript %}
state = {
  data: [],
  hidden: false,
  status: "start",
  interval: 6,
  practice = true,
  result: []
}
{% endhighlight %}

I think that the rest of the functionality can be implemented either directly in the React components or by using a combination of the propertys in the state. For example, the next button could just trigger the same function as the action that has the interval does. The show button could just change `hidden` and maybe also change `status` to `"pause"`. If the user has pressed the show button then the value in the result should be null. That could be accomplished by looking at both `hidden` and `practice`. If they both are false, then the show button has been pressed and the time should not be stored but `null` instead.

## Settings

In order to get the correct data the app need to know what the settings are but I want to separate the state for the actual game and the settings:

{% highlight Javascript %}
state.game = {
  data: [],
  hidden: false,
  status: "start",
  result: []
}

state.settings = {
  start: 0,
  stop: 9,
  interval: 6,
  practice: true
}
{% endhighlight %}

As you can se I moved `interval` and `practice` to the `settings` since that is where I think that the belong. I need `practice` in order to know whether or not the data should be shuffled.  

Happy christmas!

{% include plugs/signature.html %}  

__________

Tune of the day (I saw this band live in Alvesta in February 2008, it was a magic evening and they played this very song):  
<iframe width="420" height="315" src="https://www.youtube.com/embed/VcUnbf-9oZ4" frameborder="0" allowfullscreen></iframe>

Bonus song just because it's christmas tomorrow, it's the same song but a couple of years earlier (it was uploaded a month after I saw them in Alvesta):
<iframe width="420" height="315" src="https://www.youtube.com/embed/32ZZF-DTDcA" frameborder="0" allowfullscreen></iframe>
