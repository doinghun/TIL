---
id: oop-1
title: Object Oriented Programming in JavaScript [Part 1]
---

## What are Objects

- Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. (Eg. Object - Cars, Property: Wheel)
- These qualities, or properties, define what makes up an object. 

```javascript
let dog = {
    name: "Koong",
    numLegs: 4
};
```
### Dot Notation

Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of "Aflac".
```javascript
console.log(dog.name) // "Koong"
```

### Object Methods

- Objects can have a special type of property, called a method. 
- Methods are properties that are **functions**. This adds different behavior to an object. 

```javascript
let dog = {
  name: "Koong",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs."}
};

dog.sayLegs(); // This dog has 4 legs.
```

### Constructor Functions

- Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a **blueprint** for the creation of new objects.
- Constructors define properties and behaviors instead of returning a value as other functions might.

```javascript
function Dog() {
    this.name = "Koong";
    this.color = "White";
    this.numLegs = 4;
}
```
#### Use constructor to create objects

`new` operator create a new instance of Dog called maltese

```javascript
function Dog() {
  this.name = "Koong";
  this.color = "white";
  this.numLegs = 4;
}
// Add your code below this line

let maltese = new Dog()
```

