var react = require('react-tools');

exports.translate = function(load) {
	load.source = react.transform(load.source);
};

exports.instantiate = function(load) {
	return load.source;
};
