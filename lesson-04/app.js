// create an express app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// route handler for GET /
app.get('/', function(req, res) {
  var data = '<h1>hello world</h1>';
  res.send(data);
});

app.listen(port);

console.log('server started on port %s', port);

/*
You don't normally handle requests via middleware as it was in 3C.
Still have stuff handled via get/post/set etc.
*/
