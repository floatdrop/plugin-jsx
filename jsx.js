var react = require('react-tools');

exports.translate = function(load) {
	return react.transform(load.source);
};

exports.instantiate = function(load) {
	return load.source;
};
