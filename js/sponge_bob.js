// Create Patrick
var patrick = {
  name: "Patrick"
};
// make patrik  likeable
patrick.likeable = false;

// patrick's age is 33
// immutable, can't change his age
Object.defineProperty(patrick, "age",{
  value: 33,
  writeable: false,
  enumerable: true
});

debugger;

console.log("Patrick: " + patrick.valueOf());

// Iterate over the object patrick, show all patrick's properties
for(var prop in patrick){
  console.log("Patrick " + prop + " is " +  patrick[prop]);
}

debugger;

delete patrick.age;

debugger;
var spongeBob = {
  age: 88,
};

spongeBob.name = "Bob";

Object.defineProperty(spongeBob, "likeable", {
  value: true,
  configurable: false,
  enumerable: false
})

console.log("SpongeBob: " + spongeBob.valueOf());

debugger;
for(var prop in spongeBob){
  console.log("spongeBob " + prop + " is " +  spongeBob[prop]);
}

delete spongeBob.likeable;

console.log("done");
debugger;
