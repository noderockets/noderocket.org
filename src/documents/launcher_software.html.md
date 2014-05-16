---
title: "Node Rockets Launcher Software"
layout: "default"
isPage: true
---

Launcher Software
=======================

Goals
-----

The goals for the launcher software match those of the launcher control system:

1. Measure the air pressure inside the rocket.
2. Pressurize the rocket automatically.
3. Launch the rocket automatically.

Plans
-----
Since this is noderockets, we're going to use node.js as our software platform.  We're going to use johnny-five to connect to our arduino, read the inputs, and write the outputs.  We're going to create a webpage for a UI, that will get data streaming from the server using websockets.  We want the UI to do the following:
- Tell us the current pressure in the rocket.
- Tell us the current state of the valves.
- Allow us to open the fill valve to raise the pressure in the rocket.
- Allow us to close the fill valve.
- Allow us to open the launch valve to launch the rocket.
- Allow us to close the launch valve.
- Allow us to reset the launcher, which will close all of the valves.

The Software
------------
The software can be found at https://github.com/noderockets/noderocket-launcher.  The master branch contains the basic launcher code.  The project page lists prerequisites and instructions for running the project.  The code contains extensive comments to explain how it all works.  In order to avoid out of date instructions, all further information about the launcher software can be found in the github project.



