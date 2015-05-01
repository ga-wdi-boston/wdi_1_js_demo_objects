//////////////////////////////////////////////
// Two ways to create an Object.
// Create an object using the Object constructor.
var tom = new Object();

// Create an object using object literal syntax
// Preferred syntax
// var sam = {};

//////////////////////////////////////////////
// Couple of ways to create properties on a object.
//////////////////////////////////////////////
// 1. Create a property when the object is created.
var sam = {
  name: 'sammy'
}

// 2. Create a property using dot syntax
sam.message = "Hi from Sammy";

// 3.(RARE) Create a property using bracket syntax
// MUST use this syntax for properties that have 
// special characters in them, like space here.
sam['first car'] = "1999 Ford Focus";

// Less used ways of assigning properties.

// 4.(RARE) 
Object.defineProperty(sam, "age", {
  value: 27,
  enumerable: true,
  writeable: true,
  configurable: true
});

console.log("Sam says " + sam.message);