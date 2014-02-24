// httpモジュールを読み込む
var http = require('http');

// http.Serverクラスのインスタンスを作成する
var server = http.createServer();

// requestイベントハンドラーを定義する
server.on('request', function(request, response) {
	// コンソールにリクエストされたURLを出力
	console.log(request.url);
	// 200(OK)レスポンスと(Content-type: text/plain)ヘッダーを送信
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 「hello」という文字列とともにリクエストURLを送信する
	response.end('hello' + request.url);
});

// 8080番ポートで待ち受けを開始する
server.listen(8080, 'localhost');

