var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
var settings = require('./setting.js');
console.log(settings);
var server = http.createServer();
// var msg;
// var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
// var n = 0;
var posts = [];
function renderForm(posts, res) {
  var data = ejs.render(template, {
    posts: posts
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}

server.on('request', function(req, res) {
  if (req.method === 'POST') {
    req.data = "";
    req.on("readable", function() {
      req.data += req.read();
    });
    req.on("end", function() {
      var query = qs.parse(req.data);
      posts.push(query.name);
      renderForm(posts, res);
    });
  } else {
    renderForm(posts, res);
  } 
  
//  n++;
//  var data = ejs.render(template, {
//    title: "hello",
//    content: "<strong>World!</strong>",
//    n: n
//  });
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write(data);
//  res.end();

//  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
//    if (err) {
//      res.writeHead(404, {'Content-Type': 'text/plain'});
//      res.write("not found!");
//      return res.end();
//    }
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write(data);
//    res.end();
//  });

//  switch (req.url) {
//    case '/about':
//      msg = 'about this page';
//      break;
//    case '/profile':
//      msg = 'about me';
//      break;
//    default:
//      msg = 'wrong page';
//      break; 
//  }
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.write(msg);
//  res.end();
});
// ifconfig macのIPに合わせなきゃいけない
// server.listen(1337, '192.168.33.72');
// server.listen(1337, '192.168.1.52');
// server.listen(1337);
// port post間違えやすい
server.listen(settings.port, settings.host);
console.log('http://' + settings.host + ':' + settings.port);
