var assert = require('assert');
global.System = require('systemjs');

var code = require('./sample.js').toString();
assert.ok(/React\.createElement/.test(code));
