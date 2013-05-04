var express = require('express'),
    connect = require('connect'),
    util = require('util'),
    path = require('path'),
    http = require('http');

var app = connect()
  .use(connect.favicon('public/img/favicon.ico'))
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res, next) {
    res.writeHead(302, {
      'Location': 'http://geekgirlmeetupberlin.wordpress.com/' + req.url
    });
    res.end();
  })

var port = process.env.PORT || 8888;
console.log("Starting on port " + port);
http.createServer(app).listen(port);