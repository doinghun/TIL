---
id: react-hook-adv
title: Advanced React Hook (ft. useMemo & useCallback)
---

## useMemo

```js
useMemo(function, dependencies arrays)

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`useMemo` will ONLY recompute the memoized value when one of the dependencies has changed.

This optimization helps to avoid expensive calcualtions on every render

https://kentcdodds.com/blog/usememo-and-usecallback

## useReducer 

- An alternative to `useState`. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
- `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
- `useReducer` also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```js

const [state, dispatch] = useReducer(reducer, initialArg, init);

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

### Specifying the initial state

There are two different ways to initialize useReducer state. You may choose either one depending on the use case. 

1. The simplest way is to pass the initial state as a second argument:
    ```js
    const [state, dispatch] = useReducer(
        reducer,
        {count: initialCount}
    );
    ```
2. Lazy initialization


TODO: Read https://www.robinwieruch.de/redux-vs-usereducer