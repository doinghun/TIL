---
slug: "react-in-ts"
title: React in TypeScript
---

## Why use React with TypeScript?

Pros

- Much easier to avoid extremely common typos, like incorrect action types
- Gives developers better understanding of the type of data flowing around
- Much easier to refactor just about anything

Cons

- Not the best type definition files (especially around redux)
- Tons of generics flying around
- Tons of imports & more complicated
- Redux is inherently functional in nature -> Tough integration with TS classes

### Getting Started

`npx create-react-app <FILE_NAME> --typescript`

### .ts vs .tsx

TypeScript has Filetype of `.ts` and `.tsx`.
`.tsx` contains JSX elements while `.ts` contains more of logic etc.

### Typical Class Components in React + TS

```ts
import React from "react";

interface AppProps {}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  renter() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}
```
