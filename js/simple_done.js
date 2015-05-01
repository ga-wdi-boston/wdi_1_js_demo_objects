// Create joe using object literal syntax
var joe = {
  name: "Joe Smoe",
  age: 23,
  // property value is a function, aka method
  describe: function(){
    // When referring to a property inside a method one
    // MUST use 'this'! 
    return this.name + " is " + this.age + " yrs old";
  }
};
console.log(joe.describe());

// Just another way to create an object, result is the same
var jill = {};
jill.name = "Jill Smill";
jill.age = 32;
jill.describe = function(){
  return this.name + " is " + this.age + " yrs old";
};

console.log(jill.describe());
