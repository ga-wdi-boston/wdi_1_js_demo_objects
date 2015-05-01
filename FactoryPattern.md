
### The Factory Pattern.

The Factory Pattern will use a function to create object literals. The arguments to the factory function will be used to initialize and set the object being created. 
  
__Create a file js/object_factory.js with the below code and reference it from index.html.__


```
 // Person Factory
 var createPerson = function(name, age) {

  // This method is private it is NOT exposed outside 
  // the createPerson function.
  var display =  function(){
    return this.name + " is " + this.age + " years old";
  };

 // create an object literal return it.
 return {
   name: name,
   age: age,
   describe: display  // use the private display method
  };
 };

 var joe = createPerson("joe", 23);
 var jill = createPerson("jill", 32);

console.log(joe.describe());
console.log(jill.describe());
```


* Good so you can DRY up the creation of similar objects and save lines of code.	
* Factory Function is __NOT__ a constructor function.  
* It creates a new sayHi function for every instance, __not good!__  
* Don't use Factory function to create just one object, overkill.  


