#!/usr/bin/env node

//After install script - installs the cordova hook into hooks/after_prepare directory

var fs = require('fs')
var path = require('path')
var cwd = process.cwd(); //proj directory

// Create hooks and after_prepare if not existing
var paths = [ path.join(cwd, '../../hooks'), path.join(cwd, '../../hooks/after_prepare') ];

for (var pathIndex in paths) {
    if (!fs.existsSync(paths[pathIndex])) {
        console.log('Creating directory: ', paths[pathIndex]);
        fs.mkdirSync(paths[pathIndex]);
    }   
}

var hookFile = fs.readFileSync(path.join(cwd, 'hooks', '050_cordova_multienv.js'));

fs.writeFileSync(path.join(paths[1], '050_cordova_multienv.js'), hookFile);
