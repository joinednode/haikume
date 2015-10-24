var fs = require('fs');
var adjectives = fs.readFileSync(__dirname + '/lib/adjectives.txt', 'utf8').split(' ');
var nouns = fs.readFileSync(__dirname + '/lib/nouns.txt', 'utf8').split(" ");
var adjLen = adjectives.length - 1;
var nounLen = nouns.length - 1;

module.exports = function( stampme ) {
	var stampme = (stampme ? true : false );
	return adjectives[ randomInt(adjLen) ] + "-" + nouns[ randomInt(nounLen) ] + ( stampme ? "-" + randomStamp() : '' );
};

function randomInt (max) {
	return Math.floor(Math.random() * max);
};

function randomStamp(){
	var unix = Math.round( +new Date() / 1000 ) + Math.floor( Math.random() * ( Math.round(+new Date() / 1000) ) );
	return ( "" + unix ).slice(-5);	
};