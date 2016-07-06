var http = require('http'),
    fs = require('fs'),
    path = require('path');

var app = http.createServer(function(req, res) {
  var index = path.join(__dirname, 'index.html');

  if (req.url == '/' || req.url == '/index.html') {

    fs.readFile(index, function(err, data) {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('500 server error');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })

  } else {
    // resource not found
    console.log('resource not found: ' + req.url);
    res.writeHead(404, {'Content-Type': 'text/html'} );
    res.end('<html><body>404 not found</body>')
  }

});

app.listen(3000, 'localhost');

console.log('server app running at localhost:3000');

/*
core node again only

listener is now just anonymously passed into createServer

look at all the boilerplate crust!
based on certain patterns and based on server response
what if not found?
what if found, but server error?
what if found and served?

all this work for somewhat basic still
check out the readme!


*/
