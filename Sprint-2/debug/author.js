// Predict and explain first...
// It will be: TypeError: author is not iterable
// author is an object, not an array or string.
// The for...of loop works with iterable objects (arrays, strings, Map, Set, etc.).
// Objects are not iterable by default. Therefore, we cannot write for (const value of author) and get values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
