var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.favicon('public/img/favicon.ico'))
  .use(connect.logger('dev'))
  .use(connect.static('public'))

var port = process.env.PORT || 8888;
http.createServer(app).listen(port);