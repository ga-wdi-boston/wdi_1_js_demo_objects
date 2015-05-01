// Constructor Function object creation
// Constructor function is camel cased by convention. 
var Person = function(name, age){
  // When new Person(...) is invoked
  // this = {};
  // this.__proto_ = Person.prototype
  debugger;

  this.name = name;
  this.age = age;
  
  // return the this pointer
  // return this;
};

debugger;
// Create an object that will serve as all person object's 
// prototype.
Person.prototype = {
  // Add a method that each person instance will have
  describe: function(){
    // 'this' refers to the person instance calling the method
    return this.name + " is " + this.age + " years old";
  }
};

// Create two people. 
// This will create two person instances/objects using the new keyword.
var joe = new Person('joe', 23), 
  jill = new Person('jill', 32);

// Invoke the describe method.
console.log(joe.describe());
console.log(jill.describe());