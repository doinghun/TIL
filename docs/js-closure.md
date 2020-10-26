---
id: js-closure.md
title: Closure in JavaScript
---

## Summary

"Closures are nothing but FUNCTIONS WITH PRESERVED DATA"

## Examples 

### Example 1

```js
var passed = 3;

var addTo = function () {
    var inner = 2;
    return passed + inner;
};

console.dir(addTo()); // Closure => var passed = 3;

var passed = 4;

console.dir(addTo()); // Closure => var passed = 4;
```

### Example 2

```js
var addTo = function(passed) {
    
    var add = function(inner){
        return passed + inner;
    };

    return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

console.dir(addThree); // Closure => var passed = 3;
console.dir(addFour); // Closure => var passed = 4;

console.log(addThree(1)); // 4
console.log(addFour(1)); // 5
```

_Reference:_

- https://www.youtube.com/watch?v=71AtaJpJHw0&ab_channel=techsith