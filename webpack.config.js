var path = require('path');
var webpack = require('webpack');

var enties = {
	'State': "./js/State.js",
	'FileInput' : "./js/FileInput",
	'Select': "./js/Select",
	'Forms': "./js/Forms"
};

module.exports = [
	{
	    entry: enties,
	    module: {
	    	rules: [
		    	{
		    		test: /\.js$/,
		    		exclude: /node_modules/,
		    		enforce: 'pre',
		    		use: [{loader: 'eslint-loader', options: {rules: {semi: 0}, quiet:false, failOnError: true, fix: false}}]
		    	}
	    	]
	    },
	    output: {
	        path: path.join(__dirname, '/dist'),
	        filename: "[name].min.js"
	    },
	    plugins: [
	    	new webpack.optimize.UglifyJsPlugin()
	    ]
	},
	{
	    entry: enties,
	    module: {
	    	rules: [
		    	{
		    		test: /\.js$/,
		    		exclude: /node_modules/,
		    		enforce: 'pre',
		    		use: [{loader: 'eslint-loader', options: {rules: {semi: 0}, quiet:false, failOnError: true, fix: false}}]
		    	}
	    	]
	    },
	    output: {
	        path: path.join(__dirname, '/dist'),
	        filename: "[name].no.vendors.min.js"
	    },
	    plugins: [
	    	new webpack.optimize.UglifyJsPlugin()
	    ],
	    externals: [
	    	'jquery', 'jQuery'
	    ]
	}
];