var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
	console.log('request received.');
});

server.on('request', function(request, response) {
	console.log(request.url);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('hello ' + request.url);
});

server.on('request', function(request, response) {
	console.log('request sent.');
});

server.listen(8080, 'localhost');
