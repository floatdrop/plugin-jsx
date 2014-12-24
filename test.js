'use strict';

var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var open = require('open');

var app = connect();
app.use(serveStatic(process.cwd()));

var server = http.createServer(app);
server.listen(8080, function () {
	open('http://localhost:8080/test.html');
});
