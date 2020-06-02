---
id: js-map-filter-reduce
title: Map, Filter & Reduce in JS
---

https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

Since working as a FrontEnd Developer, I have been using Map, Filter & Reduce a lot more than when I was building portfolio and solve LC problems. 

This piece is a summary of my knowledge on JS array non-mutating methods -  `.map()`,`.filter`,`.reduce()`

## .map()

- Used to "map" through array and outputs new array (same length)
- Replaces `forEach()`, `for(...of)` or `for()`
- Does the same job of going through array, element by element but it outputs **new** array with **new** elements that has gone through a function defined.
- Resulting array always outputs same length as the original array

Example
```js
// Using forEach
var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

// Using map
const officersIds = officers.map(officer => officer.id); //ES6 arrow fxn
```

## .filter()

- Used to "filter" array and outputs new array (<= original array length) passing the test

Example
```js
//Data
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  }
];

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");
```

## .reduce()

- Works like map but reduce passes the result of the callback from one array element to the other

```js
//Data
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var totalYears = pilots.reduce(function(accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);
// 0 is initial value

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
```

Reduce can also be used to compare

```js
var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
```
- accumulator now named `oldest`
- callback compares the accumulator to each pilot
- If a pilot has more years of experience than `oldest`, then that pilot becomes the new `oldest` so that’s the one returned.