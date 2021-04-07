---
id: react-lists-and-keys-in-react.md
title: Lists and Keys in React
---

Keys help React identify which items have changed, are added, or are removed.

Keys should be given to the elements inside the **array** to give the elements a stable identity:

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));
```

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

Recommended

---

- Use IDs from your data as keys:

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

## Not Recommended

- Use item index as a key if no stable IDs

```js
const todoItems = todos.map((todo, index) => (
  // Only do this if items have no stable IDs
  <li key={index}>{todo.text}</li>
));
```

_Not recommended using if the order of items may change. This can negatively impact performance and may cause issues with component state._

## Resource:

- https://reactjs.org/docs/lists-and-keys.html
