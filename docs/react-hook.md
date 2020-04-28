---
id: react-hook
title: Introduction to React Hook
---

Hooks are relatively new addition to React. They let you use state and other REact features without writing a class.

## useState

```js
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+ 1 )}>
                Click Me
            </button>
        </div>
    );
}
```

- Only argument to `useState` is initial state.
- `useState` returns a pair: current state value (`count`) & a function that lets you update it (`setCount`).
- State Hook can be used more than once in a single component.

## useEffect

`useEffect` replaces the functionality of class-based component's `componentDidMount` & `componentDidUpdate`.

