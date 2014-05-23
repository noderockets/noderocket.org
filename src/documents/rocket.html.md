---
title: "Node Rocket"
layout: "default"
isPage: true
---

Rocket
======

You can make your rocket as simple or elaborate as you want.  This page has
some tips and ideas you might want to incorporate in your rocket to make it
awesome.

Of course, the simplest water rocket is a plain 2-liter bottle.  Even without
 any elaboration, this can be lots of fun to launch.  And simply adding a good
 nose cone and fins can greatly improve the flight characteristics of the
 rocket.

To make our rocket really awesome, we add a payload with a Raspberry Pi,
and an automated, altitude-aware, parachute.

We'll briefly cover each of the pieces that make a good rocket to give you
some ideas on where to start:

- Engine
- Fins
- Nose Cone
- Payload
- Parachute


### Rocket Physics

Before we start building though, let's have a quick lesson on rocket physics.
There are a couple concepts that we need to understand first:

** Center of Mass **

You can find the center of mass for your rocket by balancing it on your
finger.  When the rocket is balanced, the point above your finger is the
center of mass.

** Center of Pressure **

The center of pressure for your rocket is the point where all the aerodynamic
 forces are focused during flight.  It's hard to determine where this is
 without testing, but it's location is crucial to how your rocket will handle.

In order for your rocket to be stable in flight, the center of pressure needs
 to be closer to the tail of the rocket than the center of mass.  The further
 the distance between the two, the more stable your rocket will be.  If the
 center of pressure is closer to the nose of your rocket, your rocket will
 probably tumble in flight.

Adding fins to your rocket increases drag and moves the center of pressure
toward the tail.  Adding weight to the nose of the rocket moves the center of
 mass toward the nose.  Depending on the size and characteristics of your
 rocket, you'll want to adjust the size of the fins and/or the weight of the
 nose to improve your rockets in-flight handling.

Since weight and drag will keep your rocket from reaching its full altitude
potential, it is important to balance the size of the fins and weight of the
rocket so you get a stable flight while still getting awesome altitude.


Construction
------------

** Parts List **

- (4) 2-liter soda bottle (preferably empty)
- (1) Sheet of corrugated plastic
- (1) Package of sticky back velcro
- (1) Roll of duct tape


### Engine

The engine is the simplest part of the rocket to build.  All you need to build a single engine is one empty
2-liter bottle.  Later we will show how you can use (2) 2-liter bottles to create a double engine rocket.

![two liter soda bottle](images/rocket/empty-2liter.png)

After cleaning off the label and the sticky glue, you're ready to add a
nose cone and fins.


### Nose Cone

The simplest nose cone is the blunt end of a 2-liter bottle.  You can make a
more aerodynamic cone simply by crafting one from craft paper or cardboard.

Even better is a nose cone made from a plastic bottle.  You can cut the
nozzle off the end of a bottle just below the neck and this makes a fairly
good nose cone.  We've also used the end of a nerf football for a nose cone.

Finally, you could use a 3D printer to make a nose cone with just the
characteristics you want.


### Fins

Fins are a crucial part of any rocket and there are many different ways that you can make them.  One of our favorite methods
comes from this [tutorial from US Water Rockets](http://www.uswaterrockets.com/construction_&_tutorials/removable_box_fins/tutorial.htm).
We like this method because it creates durable fins that are both adjustable and removable so that you can use them on
other engines.

![two liter soda bottle](images/rocket/fins-1.png)

You can make fins from lots of different materials like cardboard, foamboard, wood or plastic.  We made our fins out of corrugated
plastic (corriflute), which is easy to work with and incredibly durable.  The fins are attached to the engine using velco which makes
them easy to adjust to get straight and to move them forward or backward on the engine.  Ideally you want your fins to be
as far back on the engine as you can get.

![two liter soda bottle](images/rocket/fins-2.png)


### Payload Compartment

The payload compartment houses the electronics for the rocket.  It is made using the tops of (2) 2-liter soda bottles joined together
to create the nose of the rocket.

(pic of bottle tops)

(pic of compartments joined)

Corrugated plastic also makes a great material to build our board for mounting our electronics.  Cut the plastic the fit
inside the payload compartment.

(pic of board)

Holes can be drilled for mounting the pi and other components to the board.  Zipties and velco are good for mounting
things like the servo and battery.

(pic of payload compartment with components)


To join the payload compartment to the engine the top of another 2-liter bottle and 2 caps are used.  The top of the bottle
is attached to engine using duct tape.

A coupler is made using 2 caps, glue and duct tape.  Once the coupler is made screw the payload compartment onto the engine
using the coupler.  The cavity in between the payload compartment and the engine will be use to house the parachute.

(pic of assembled rocket)


### Parachute

This may just be the most important part of the rocket.  Well, at least if you want to launch it more than once.  Parachutes
can be cheaply made by following this [tutorial](http://www.uswaterrockets.com/construction_&_tutorials/Parachute/tutorial.htm).
For the sake of time and ease you can always just [buy one](http://www.amazon.com/Rip-stop-Nylon-Parachute-Water-Rocket/dp/B004091ZIS/ref=sr_1_1?ie=UTF8&qid=1400812592&sr=8-1&keywords=rocket+parachute).

We tried several different parachute deployment mechanisms, most which failed spectacularly. We finally ended up using
the [radial deploy system](http://www.uswaterrockets.com/construction_&_tutorials/Radial_Deploy/tutorial.htm) from
US Water Rockets.  This ingenious system works really well and is quite simple to build.

(pic of parachute)


