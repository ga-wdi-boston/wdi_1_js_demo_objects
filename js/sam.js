// create an object using the new keyword
// var tom = new Object();
var tom = {};

// sam an object created with object literal syntax
// it's an object literal.

// 1. Create a property when the object is 
// created
var sam = {
  name: "sammy"  
};

// 2. Create a property using the dot syntax
sam.message = "Hi from sammy";

// Pretty rare.
// 3.  Create a property using the bracket notation.
sam['first car'] = "1999 Ford Focus";

// 4. Very rare.
// Create a property using the defineProperty method
// of Object.
Object.defineProperty(sam, "age", {
  value: 27,
  enumerable: false,
  writeable: true,
  configurable: true
});

console.log("Sam says " + sam.message);
