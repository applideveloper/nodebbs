// httpモジュールを読み込む
var http = require('http');

var app = express();
	
// Expressのappオブジェクトを引数にhttp.Serverクラスのインスタンスを作成
var server = http.createServer(app);

// http.ServerクラスのインスタンスにSocket.IOサーバーをアタッチする
var io = require('socket.io').listen(server);

// 待ち受けを開始する
server.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});

