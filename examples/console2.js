/*jshint -W079 */

/**
 * Console2 functions
 */

require('../scribe')(); //loads Scribe (with basic loggers)

var console = process.console;      //create a local (for the module) console

console.log("Hello");
console.log("A string %s and a number %d", "hello", "123"); //you can use printf-like format

//Time
console.time().log("Print the full time");
console.date().log("Just print the date");

//Tags
console.tag("My Tag").log("Add a tag");
console.tag("Tag1", 'Tag2', 123).log("Or multiple tag");
console.tag({msg : 'my-tag', colors : ['red', 'inverse']}).log("Use colors.js colors");

//File and line number
console.file().log("Print the file and the line of the call");

//Object
console.log({just : 'an object'});

//Combos !
console.log(
        "Print many things",
        { key1 : "val 1", key2 : { a: "b", c : []}, key3 : [1234]},
        ['an array'],
        "A String"
);
console.tag("Combo!").time().file().log("A combo");
