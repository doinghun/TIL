---
id: for-of-for-in-loops
title: for...of vs for...in Loops in JavaScript
---

### What is the difference between for-of vs for-in Loops in JavaScript?

#### `for...of`

Use `for…of` to iterate over the values in an iterable, like an array for example:

```javascript
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Henry the 🐔
// Melvin the 🐷
// Henry the 🐑
// Billy Bob the 🐇
```

#### `for...in`

Use `for…in` to iterate over the properties of an object (the object keys):

```javascript
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel
```

Can also use `for…in` to iterate over the index values of an iterable like an array or a string:

```javascript
let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1
```

---
*[Reference - https://alligator.io/js/for-of-for-in-loops/](https://alligator.io/js/for-of-for-in-loops/)*