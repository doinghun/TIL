---
id: js-let-vs-var
title: let vs var in JavaScript
---

ES6 introduced `let` as a new way to declare "local" variable. But what about `var`? When should one use `let` or `var`?

## Scoping Rules

Main difference is scoping rules. Variables declared by `var` are scoped to the immediate function body (function scope) while `let` variables are scoped to the immediate enclosing block denoted by `{ }` (block scope).

```javascript
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar);

  {
    let baz = "Bazz";
    console.log(baz);
  }
  console.log(baz); //ReferenceError
}

run();
```

The reason why `let` keyword was introduced to the language was function scope is confusing and was one of the main sources of bugs in JavaScript.

## Hoisting

While variables declared with `var` keyword are "hoisted" to the top of the block which means they are accesible in their enclosing scope ven before they are declared:

```javascript
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();
```

`let` variables are not initialized until their definition is evaluated. Accessing them before the initialisation results in a `ReferenceError`. Variable said to be in "temporal dead zone" from the start of the block until the initialisation is processed.

```javascript
function checkHoisting {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // foo
}

checkHoisting();
```

## Creating global object property

At the top level, `let`, unlike `var` does not create a property on the global object:

```javascript
var foo = "Foo"; // globally scoped
let bar = "Bar"; // globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined
```

## Redeclaration

In strict mode, `var` will let you re-declare the same variable in the same scope while `let` raises a SyntaxError.

```javascript
"use strict";

var foo = "foo1";
var foo = "foo2"; // 'foo' is replaced.

let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
```

---

_Reference:_

- https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
