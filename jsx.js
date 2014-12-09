var react = require('react-tools');

exports.translate = function(load) {
	return react.transform(load.source, opts);
};

exports.instantiate = function(load) {
	return load.source;
};
