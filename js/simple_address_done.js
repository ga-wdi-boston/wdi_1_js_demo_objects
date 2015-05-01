var jill = {
  name: "Jill Smill",
  age: 32
};

var fred = {
  name: "Fred Smoe",
  age: 27
};

// Objects can have properties that are objects!
var joe = {
  name: "Joe Smoe",
  age: 23,
  occupation: "Software Developer",
  siblings: [jill, fred],
  address: {
    street: '44 Warren St.',
    city: 'Stoneham',
    state: 'MA',
    zip: 01345,
    display: function(){
      return this.street + " " + this.city + " " + this.state;
    },
  },
  describe: function(){
    return this.name + " is " + this.age + " year old";
  }
};

console.log("joe's address is " + joe.address.display());
console.log("joe is " + joe.describe());

debugger;
// Hey let's show the address when we can joe.describe method
joe.describe = function(){
  return this.name + " is " + this.age + 
  " year old\nAddress is " + joe.address.display();  
}

console.log("joe is " + joe.describe());