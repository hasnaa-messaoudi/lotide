const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const result1 = tail(["Hello"]);
assertEqual(result1, []); 
assertEqual(result1[0], undefined); 

