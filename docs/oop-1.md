---
id: oop-1
title: OOP in JS [Part 1]
---

### What are Objects

- Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. (Eg. Object - Cars, Property - Wheel)
- These qualities, or properties, define what makes up an object. 

```javascript
let dog = {
    name: "Koong",
    numLegs: 4
};
```
### Dot Notation

Dot notation is used on the object name, `dog`, followed by the name of the property, `name`, to access the value of "Koong".
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

let maltese = new Dog()
```

#### Extend Constructors to Receive Arguments
```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let maltese = new Dog("Koong", "White")
```

#### `instance of`
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. 

```javascript
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
myHouse instanceof House // true
```

#### ownProps
```javascript
let ownProps = [];
// Add your code below this line
for(let property in myHouse) {
  if(myHouse.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps) // [ 'numBedrooms' ]
```

#### Use Prototype Properties to Reduce Duplicate Code

To avoid writing duplicated variable (eg. `this.numLegs = 4`), a better way is to use Dog’s prototype. Properties in the prototype are shared among ALL instances of Dog.
```javascript
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let maltese = new Dog("Koong")
```

#### protype Props

There are 2 kinds of properties
- own properties: Defined directly on the object instance itself
- prototype properties: Defined on the prototype.

How to check?
```javascript
let ownProps = [];
let prototypeProps = [];

for (let property in maltese) {
  if(maltese.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property)
  }
}

console.log(ownProps) // [ 'name' ]
console.log(prototypeProps) // [ 'numLegs' ]
```

#### Constructor Property
The constructor property is a reference to the constructor function that created the instance. 

The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.

```javascript
let maltese = new Dog("Koong")
console.log(maltese.constructor === Dog);  //prints true
```