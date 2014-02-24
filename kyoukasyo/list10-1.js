var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World');
});

var io = require('socket.io').listen(server);

server.listen(8080);

