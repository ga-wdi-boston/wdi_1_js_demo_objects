![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objects and Object Literals.

### Objectives
* Create a simple object with the **new** keyword and a constructor.
* Create a simple object using object literal syntax.
* Create object properties in a number of different ways.
* Create object methods.
* Create objects properties that have an object as a value.

### Two Ways to create a new Object

Create a file __js/sam.js__ 

```
// Create a new JS object to represent Tom.
// Using the Object class's constructor
var tom = new Object();
  
// Using Object Literal Syntax to create sam. Preferred
var sam = {};
```

Object is a built-in class. It's provided by Javascript. 

Confusion abounds as we puzzle about javascript providing classes but there are no classes in javascript. Huh?

Remember, javascript doesn't provide the class keyword. But, as we'll see we can emulate what the class keyword does in other languages. 

## Lab

Create a simple html file, _index.html_, that uses the above _js/sam.js_ file.

Open it in Chrome.

Open up the Chrome Inspector.

Go to the "source" tab.

Add a breakpoint at the console.log statement.

View the tom and sam variables. What are these variable's value?

In the source code change sam so it's created with the new keyword and the Object constructor.

Then change tom so that it's created with an object literal syntax. 

Reload the file into Chrome and inspect. 

What do you see?

## Demo: Multiple ways that properties can be added.

Add the below to _js/sam.js_.

```javascript
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

// 4.(RARE) Using the Object.defineProperty method
Object.defineProperty(sam, "age", {
  value: 27,
  enumerable: true,
  writeable: true,
  configurable: true
})


console.log("Sam says " + sam.message);
```

## Lab

Look at the sam object in the Chrome Inspector. 

Write down it's properties somewhere and show them to an instructor.

Look up the Object.defineProperty, maybe using MDN?, and write down what it does in your own words. Show you're description to an instructor.

Write code to delete sam's age property.

### Lab (Optional)

Create a file __js/sponge_bob.js__ 

I've only watched SpongeBob a couple of times. And it's been fun. But, I don't know many characters, or much about them.

Can each of you pick a couple of characters and create objects for them? Create simple properties for them, *no methods*. And use all four of the ways to create properties shown above.

Each character should have a name, age, description and isLikable properties.

Let's make Patrick's age property immutable.
SpongeBob's likable property can NOT be enumerated.
Nobody's name property can be deleted.

At the end of the file display each character's properties.


## Object literal methods.

And Object literal is the simplest way to create an object in javacript. It may look like a Hash. It is not a Hash.

__Create a file js/simple.js with the below code and reference it from index.html.__

```
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
console.log(joe.name + " is " + joe.age);

// Just another way to create an object, result is the same
var jill = {};
jill.name = "Jill Smill";
jill.age = 32;
jill.describe = function(){
  return this.name + " is " + this.age + " yrs old";
};

console.log(jill.name + " is " + jill.age);
");

```

An Object Literal:

* Has properties.
* Each property has a name and a value, name/value pairs.
* A property is typically a string, but can be it can be a number _(rare)_.
* A value can be a __Primitive__ or an __Object__, aka reference type.
* A value can be a __function__. We call these properties methods.
* A value can be based on the built-in Object, see above, or a user defined object.  
* By default is based on the build in Javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).  


__Inspect joe and jill in Chrome.__

## Lab

Let's give the Sponge Bob's characters some behavior. Add methods to these characters and display their behavior.  

### Object Literals with properties that are objects.

Object literals can have properties that are objects.

__Create a file js/simple_address.js with the below code and reference it from index.html.__

```
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
```
__Inspect joe and jill in Chrome.__

## Lab

Let's give the Sponge Bob's characters a location property that is a object with an address, city and state. _Ya, I know, they don't really have addresses_. 

