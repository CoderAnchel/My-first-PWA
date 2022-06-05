module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};