var fs = require('fs');
var adjectives = fs.readFileSync(__dirname + '/lib/adjectives.txt', 'utf8').split(' ');
var nouns = fs.readFileSync(__dirname + '/lib/nouns.txt', 'utf8').split(" ");
var adjLen = adjectives.length -1;
var nounLen = nouns.length -1;

module.exports = function( stampme ) {
	var stampme = (stampme ? true : false );
	var unix = Math.round( +new Date() / 1000 ) + Math.floor( Math.random() * ( Math.round(+new Date() / 1000) ) );
	var stamp = ( "" + unix ).slice(-5);
	return adjectives[ randomInt(adjLen) ] + "-" + nouns[ randomInt(nounLen) ] + ( stampme ? "-" + stamp : '' );
};

function randomInt (max) {
	return Math.floor(Math.random() * max);
};