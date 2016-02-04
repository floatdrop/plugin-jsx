'use strict';

var react = require('react-tools');

exports.translate = function(load) {
	var output = react.transformWithDetails(load.source, { es6module: true, sourceMap: true });
	load.source = output.code;
	load.metadata.sourceMap = output.sourceMap;
};
