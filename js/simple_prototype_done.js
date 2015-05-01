var person = {
    type: 'person',
    sayHi: function(msg){
      return this.name + " says " + msg;
    }
};

debugger;
// Check the __proto__ property of person
// It should point to the Object.prototype

// In the console enter person.toString()
// The method will be found by following the object pointed to by the __proto__ property.

// Create an Object literal representing one person.
var joe = {
  name: "Joe Smoe",
  age: 23,
  // Property value is a function
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");

debugger
joe.__proto__ = person;

// The sayHi property for joe will be found by following joe's 
// __proto___ property. 
console.log(joe.sayHi("hey there"));