---
id: js-oop-2
title: OOP in JS [Part 2]
---

### Prototype Inheritance

Just like people inherit genes from their parents, an object inherits its `prototype` directly from the constructor function that created it. For example, here the `Dog` constructor creates the `maletese` object.

```javascript
function Dog(name) {
  this.name = name;
}

let maltese = new Dog("Koong");
```

`maltese` inherits its prototype from the `Dog` constructor function. You can show this relationship with the `isPrototypeOf` method:

```javascript
Dog.prototype.isPrototypeOf(maltese);
// true
```

#### Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object. Because a prototype is an object, a prototype can have its own prototype!

```javascript
Object.prototype.isPrototypeOf(Dog.prototype); // true
```

For example, The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Dog.prototype`, which can then be accessed by `maletese`.

```javascript
maltese.hasOwnProperty("name"); // => true

// Object is a supertype for all objects
// Object [supertype] - Dog [subtype]
// Dog [supertype] - maltese [subtype]
```

#### Inheritance

If a method is repeated in two different objects, Edit the code in the spirit of DRY by moving the method to a supertype.

```javascript
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
let animal = Object.create(Animal.prototype);

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

#### Set the Child's Prototype to an Instance of the Parent

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`.

```javascript
// ChildObject.prototype = Object.create(ParentObject.prototype);

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let maltese = new Dog();
maltese.eat(); // Should print "nom nom nom"
```

Set the prototype of the subtype ( `Dog` ) to be an instance of `Animal`.

`maltese` inherits all of `Animal`'s properties, including the eat method.

#### Reset an Inherited Constructor property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

```javascript
maltese.constructor; // function Animal(){...}

/* Manually set Dog's constructor property to the Dog object */
Dog.prototype.constructor = Dog;
maltese.constuctor; // function Dog(){...}
```

#### Adding Methods After Inheritance

```javascript
Dog.prototype.bark = function () {
  console.log("Woof!");
};
maltese.eat(); // Inherited Method
maltese.bark(); // Method added after Inheritance
```

#### Override Inherited Methods

If you have an instance `let maltese = new Dog();` and you call `maltese.eat()`, this is how JavaScript looks for the method on maltese’s prototype chain:

```
maltese => Is eat() defined here? No.
Dog => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
```

### Use a Mixin to Add Common Behavior Between Unrelated Objects

A mixin allows other objects to use a collection of functions.

```javascript
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Add your code below this line

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Glidee");
  };
};

glideMixin(bird);
glideMixin(boat);
```
