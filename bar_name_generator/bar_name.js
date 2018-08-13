"use strict";
console.log('yeah');

// var nouns = "['apple', 'banana', 'crab', 'nail', 'fridge', 'bucket' ,'floor'];
// var adjectives = "['rusty' , 'old' ,'weathered' ,'stolen' ,'milky' ,'random']";
//
// var random1 = Math.floor((Math.random() * nouns.length) + 1);
//
// var random2 = Math.floor((Math.random() * adjectives.length) + 1);
//
// console.log(random1[]);
// console.log(random2[3]);

// var randomIndex = Math.floor(Math.random() * nouns.length);
// var randomElement = nouns[randomIndex];

//
// var randomItem = nouns[Math.floor(Math.random()* nouns.length)];
// console.log(randomItem);

var noun = ["apple", "crab", "Banana", "fridge", "bucket", "floor", "nail"];
var pickANoun = function () {
    var theNoun = noun[Math.floor(Math.random() * noun.length)];
return(theNoun);
};

var adjective = ['rusty' , 'old' ,'weathered' ,'stolen' ,'milky' ,'random'];

var pickAAdjective = function () {
    var theAdjective = adjective[Math.floor(Math.random() * adjective.length)];

};

pickANoun();
pickAAdjective();

alert('Your bar will be named ' + theNoun + theAdjective + '!');