var http = require('http');

function onListenEvent(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>hello world</h1>');
}

var app = http.createServer(onListenEvent);

app.listen(3000, 'localhost');

console.log('server app running at localhost:3000');

/*
core node (http)
no need to npm anything!
listener function (onListenEvent);

http.createServer() with listener

listen on 3000 at localhost

execute code in the listener with the req,res object

core part of node callback as well

*/
