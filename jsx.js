var react = require('react-tools');

exports.translate = function(load) {
	load.source = react.transform(load.source);
};
