module.exports = function(config) {
	config.set({
		files: [
			'spec/*.spec.js'
		],
		frameworks: ['jasmine'],
		browsers: ['Chrome']
	});
};