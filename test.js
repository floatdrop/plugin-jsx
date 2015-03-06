var assert = require('assert');
global.System = require('systemjs');
var Component = require('./sample.js');

assert.ok(Component);
