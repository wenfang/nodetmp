var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
	return ['.bin'].indexOf(x) === - 1;
}).forEach(function(mod) {
	nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, 'src/app.js')],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'server.js'
	},
	target: "node",
	externals: nodeModules,
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel-loader',
		}]
	}
}

