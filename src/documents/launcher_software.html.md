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

Prerequisites
-------------
- Install [nodejs](http://nodejs.org/)
- Install [npm](https://www.npmjs.org/)

Get Started
---------------
1. Create a directory for your project and cd to it.
2. Create the package.json by running

        npm init

    and enter reasonable defaults.  I named my entry script "server.js."
3. Add the following dependencies:
        npm install johnny-five --save
        npm install express --save
        npm install socket.io --save
        npm install underscore --save

The Launcher
------------
For the launcher, we're going to create a launcher class - I put mine in a file named "launcher.js".  Here's the code that goes in it:

        // We load our dependencies - node's events, johnny-five, and underscore utilities.

        var events = require('events');
        var j5 = require('johnny-five');
        var _ = require('underscore');


        function Launcher(opts) {

            /*
            This code provides some defaults for our class's configuration parameters.
            Configuration parameters will allow us to specify the pins for the
            pressure sensor, fill valve, and launch valve, specify the frequency
            at which we will publish pressure data, and define the slope and
            y-intercept of the linear equation to calculate the pressure from
            the pressure sensor's resistance.
            */

            this.config = _.extend({
                pressureSensorPin: "A0",
                fillValvePin: 2,
                launchValvePin: 3,
                dataInterval: 200,
                pressure: {
                    slope: 0.5479,
                    yint: 2.2272
                }
            }, opts);

            // Create a variable to keep track of the pressure.

            this.currentPsi = 0;

            // Allow passing in a johnny-five board to use.
            // If there isn't one, create a new board.

            this.board = this.config.board == null ? new j5.Board() : this.config.board;

            // Set up this class as an event emitter.

            events.EventEmitter.call(this);

            // Create a variable that we can use in closures to reference this.

            var thiz = this;

            this.board.on('ready', function() {

                // When the board is ready, create a sensor for the pressure sensor
                // and pins for the valves

                thiz.pressureSensor = new j5.Sensor(thiz.config.pressureSensorPin);
                thiz.fillValve = new j5.Pin(thiz.config.fillValvePin);
                thiz.launchValve = new j5.Pin(thiz.config.launchValvePin);

                // Make sure the valves are closed

                thiz.closeFill();
                thiz.closeLaunch();

                // Handle data from the pressure sensor

                thiz.pressureSensor.on('data', function() {
                    // the arduino reads voltage in increments of 1/1024 of 5 V

                    var voltage = this.value * (5 / 1024);

                    // Use voltage divider solve for Z2 with Vin = 5V and R1 = 270 ohm

                    var res = 270 / ((5 / voltage) - 1);

                    // Use linear equation with configured slope and y intercept
                    // to figure pressure

                    thiz.currentPsi = (res * thiz.config.pressure.slope) - thiz.config.pressure.yint;
                });

                // signal that the launcher is ready

                thiz.emit('launcher-ready', thiz.currentPsi);

                // report the pressure data at regular intervals

                setInterval(function() {
                    thiz.emit('launcher-data', {
                        pressure: thiz.currentPsi
                    });
                }, thiz.config.dataRate);

            });
        }

        // make Launcher an event emitter

        Launcher.prototype.__proto__ = events.EventEmitter.prototype;

        // basic functions to open and close each valve

        Launcher.prototype.openLaunch = function() {
            this.launchValve.high();
            this.emit('launchValve', {state: 'open'});
        };

        Launcher.prototype.closeLaunch = function() {
            this.launchValve.low();
            this.emit('launchValve', {state: 'closed'});
        };

        Launcher.prototype.openFill = function() {
            this.fillValve.high();
            this.emit('fillValve', {state: 'open'});
        };

        Launcher.prototype.closeFill = function() {
            this.fillValve.low();
            this.emit('fillValve', {state: 'closed'});
        };

        // a reset function to close all valves

        Launcher.prototype.reset = function() {
            this.closeLaunch();
            this.closeFill();
        };

        module.exports = Launcher;

The Server
----------
The server will create a launcher instance, will create a web server that will serve up files from a www directory, will accept incoming websocket connections, and will wire up new websocket connections to the launcher.  Here's the code:

        // use express and listen for new websocket connections
        // turn off the websocket debug messages
        var express = require('express');
        var app = express()
          , server = require('http').createServer(app)
          , io = require('socket.io').listen(server, {log:false});

        // include the launcher
        var Launcher = require('./launcher.js');

        // serve up static files
        app.use(express.static('www'));

        // listen on port 8082
        server.listen(8082);

        // server index.html by default
        app.get('/', function (req, res) {
            res.sendfile(__dirname + '/index.html');
        });

        // create the launcher instance
        var myLauncher = new Launcher();

        // function to link up launcher to websocket
        var linkSocket = function (socket, launcher) {

            // Emit launcher ready
            launcher.on('launcher-ready', function(data) {
                socket.emit('ready', data);
            });

            // Emit launcher data
            launcher.on('launcher-data', function(data) {
                socket.emit('data', data);
            });

            // Emit launch valve data
            launcher.on('launchValve', function(data) {
                socket.emit('launchValve', data);
            });

            // Emit fill valve data
            launcher.on('fillValve', function(data) {
                socket.emit('fillValve', data);
            });

            // open and close valves
            socket.on('openFill', function() {
                launcher.openFill();
            });

            socket.on('closeFill', function() {
                launcher.closeFill();
            });

            socket.on('openLaunch', function() {
                launcher.openLaunch();
            });

            socket.on('closeLaunch', function() {
                launcher.closeLaunch();
            });

            socket.on('reset', function() {
                launcher.reset();
            });
        };

        // Connect up the socket on connection
        io.sockets.on('connection', function(socket) {
            socket.emit('hello');
            linkSocket(socket, myLauncher);
        });