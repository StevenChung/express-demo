// create an express app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// create express middleware
app.use(function(req, res) {
  var data = '<h1>hello world</h1>';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
});

app.listen(port);

console.log('server started on port %s', port);

/*
use() is middleware
listening on all routes on all request/response pipelines
do content negotation etc.

all requests route to helloworld because the middleware listens
to all

premise of middleware to daisychain a bunch together
*/
