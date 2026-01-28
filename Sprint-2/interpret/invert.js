// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/* function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
*/

// a) What is the current return value when invert is called with { a: 1 }
// Now it's: invertedObj.key = value;
// invert({ a: 1 }) -> {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/* Same here:
 invert({ a: 1, b: 2 }) -> {key: 2}
 first element { a: 1 } wrote key: 1
 then {b: 2 } rewrote key: 2
 result: only {key: 2} stays */

// c) What is the target return value when invert is called with {a : 1, b: 2}
// need to swap places keys and values 
// invert({a : 1, b: 2}) -> {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of pairs [key,value] for an object. 
// Object.entries({ a: 1, b: 2}) -> [['a', 1], ['b', 2]]
// it is convenient for sorting through keys and values at the same time with for...of

// d) Explain why the current return value is different from the target output
// the problem is invertedObj.key = value use string "key" instead of variable values key.
// need to use bracket notation to dynamically set the key.
// invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (invertedObj[value]) {
      if (Array.isArray(invertedObj[value])) {
        invertedObj[value].push(key);
      } else {
        invertedObj[value] = [invertedObj[value], key];
      }
    } else {
      invertedObj[value] = key;
    }
  }

  return invertedObj;
}

module.exports = invert;

