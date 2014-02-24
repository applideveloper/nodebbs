var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {

	// リクエストされたパスによって分岐する
	if (request.url == '/') {
		// リクエストされたパスが「/」の場合
	
	} else if (request.url == '/foo/') {
	// リクエストされた場合が「/foo/」の場合

	} else {
	// それ以外の場合
	}
}

