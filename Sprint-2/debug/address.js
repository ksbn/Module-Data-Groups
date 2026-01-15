// Predict and explain first
// My house number will be undefined. address is an object, not an array.
// Objects do not have indices like arrays do.The expression: address[0] attempts to retrieve the value for key ‘0’, but there is no such key in the object, so the result is undefined.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
