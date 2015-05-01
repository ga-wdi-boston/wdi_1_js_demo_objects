var jill = {
  name: "Jill Smill",
  age: 32
};

var fred = {
  name: "Fred Smoe",
  age: 27
};

var joe = {
  name: "Joe Smoe",  // string
  age: 23,  // number
  occupation: "Software Developer", // string
  siblings: [jill, fred], // Array with two objects
  address: {   // Object
    street: '44 Warren St.',
    city: 'Stoneham',
    state: 'MA',
    zip: 01345,
    display: function(){
      return this.street + " " + this.city + " " + this.state;
    }
  },
  describe: function(){
    return this.name + " is " + this.age + " yrs old" 
    + this.address.display();
  }
};

console.log("joe's address is " + joe.address.display());

// get joe's first sibling, jill
console.log(joe.siblings[0]);

// get jill name by way of joe
console.log(joe.siblings[0].name);

// describe joe I want to see his address?
// by calling joe.describe()
console.log(joe.describe());

debugger;





debugger;
