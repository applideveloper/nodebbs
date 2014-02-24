// httpモジュールを読み込む
var http = require('http');

// http.Serverクラスのインスタンスを作成する
var server = http.createServer();

server.on('request', function(request, response) {
// requrestイベントハンドラーを定義する
	// コンソールにリクエストされたURLを出力
	console.log(request.url);
	// 200(OK)レスポンスと「'Content-Type': 'text/plain'」ヘッダーを送信
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 「hellonode 」という文字列ともにリクエストURLを送信する
	response.end('hellonode ' + request.url);

});

// 8080番ポートで待ち受けを開始する
server.listen(8080, 'localhost');
