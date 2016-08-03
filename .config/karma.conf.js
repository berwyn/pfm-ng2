var webpackConfig = require('./webpack.test');

module.exports = function (config) {
	var _config = {
		basePath: '',

		frameworks: ['jasmine'],

		files: [
			{ pattern: './karma.shim.js', watched: false }
		],

		preprocessors: {
			'./karma.shim.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		reporters: ['nyan'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
	};

	config.set(_config);
};
