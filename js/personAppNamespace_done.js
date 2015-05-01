// Create a PersonApp namespace.
// It's just and object literal being used as a namespace.
var PersonApp = PersonApp || {};

// Namespace an object literal
PersonApp.joe = { name: 'joe', age: 23 };

PersonApp.jill = {name: 'jill', age: 33}

PersonApp.addPerson = function(person){
  if(PersonApp.people === undefined){
    PersonApp.people = [];
  }
  PersonApp.people.push(person);
};

PersonApp.showPeople = function(){
  if(PersonApp.people === undefined){
    console.log("No People");
  }else{
    PersonApp.people.forEach(function(person){
      console.log(person.name + " is " + person.age + " yrs old");
    })
  }
};

PersonApp.addPerson(PersonApp.joe);
PersonApp.addPerson(PersonApp.jill);

PersonApp.showPeople();