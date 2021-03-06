var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var app = new express();

var compiler = webpack(config);

app.use('/css', express.static(__dirname + '/static/css'));
app.use('/img', express.static(__dirname + '/static/images'));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));
app.get("*", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function(error) {
	if (error) {
	console.error(error)
	} else {

	}
})
