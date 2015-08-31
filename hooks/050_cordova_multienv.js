#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var rootdir = process.argv[2];
var projectConfig = require(__dirname + '/../../project.json');

var target = 'staging';
if (process.env.TARGET) {
    target = process.env.TARGET;
}

function replace_string_in_file(filename, to_replace, replace_with) {
    var data = fs.readFileSync(filename, 'utf8');

    var result = data.replace(new RegExp(to_replace, 'g'), replace_with);
    fs.writeFileSync(filename, result, 'utf8');
}

function changeAndroidConfigFile() {
  process.stdout.write('Hello Android');
}

function changeIosConfigFile() {
  configFile = path.join(rootdir, 'platforms', 'ios', '1000Cooker', 'config.xml');
  replace_string_in_file(configFile, 'com.mealcooker.app', projectConfig[target].appId);

  plistFile = path.join(rootdir, 'platforms', 'ios', '1000Cooker', '1000Cooker-Info.plist');
  replace_string_in_file(plistFile, 'com.mealcooker.app', projectConfig[target].appId);

  process.stdout.write('iOS config modified');
}

// go through each of the platform directories that have been prepared
var platform = process.env.CORDOVA_PLATFORMS;

if (platform.indexOf(',') !== -1) {
  throw new Error('This script does not handle multiple platforms at the moment');
}

if (platform === 'android') {
  changeAndroidConfigFile();
}

if (platform === 'ios') {
  changeIosConfigFile();
}
