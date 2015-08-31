Work in progress
================

Cordova Multienv Hook
=====================

This hook allows you to change the application name, id and other configuration options depending on enviornement.
It is heavily inspired by Devgirl's [Three hooks your Cordova/PhoneGap project needs](http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/).

Configuration
-------------

Replace your app id by _APPID_ and app name by _APPNAME_ in config.xml

Create a multienv.json file in your project root.
See `examples/multienv.json` for sample.

Execution
---------

Export APP_ENV variable with the desired environement before running Cordova commands.
