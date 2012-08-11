var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('public'))

var port = process.env.PORT || 8888;
http.createServer(app).listen(port);