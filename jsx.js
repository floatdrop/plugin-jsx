var react = require('react-tools');

exports.translate = function(load) {
	var output = react.transformWithDetails(load.source, { harmony: true });
	load.source = output.code;
  	load.metadata.sourceMap = output.sourceMap;
};
