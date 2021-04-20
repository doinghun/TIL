---
slug: "react-prop-vs-state"
title: Prop vs State
---

## What are Props?

- Props stand for properties
- Used to pass data between React components
- React’s data flow between components is uni-directional (from parent to child only)

### How to pass data with Props?

Here is an example of how data can be passed by using Props:

```javascript
class ParentComponent extends Component {
  render() {
    return <ChildComponent name="First Child" />;
  }
}

const ChildComponent = (props) => {
  return <p>{props.name}</p>;
};
```

Firstly, we need to define/get some data from the parent component and assign it to a child component’s “prop” attribute.

```js
<ChildComponent name="First Child" />
```

“Name” is a defined prop here and contains text data. Then we can pass data with Props like we’re giving an argument to a function:

```js
const ChildComponent = (props) => {
  // statements
};
```

And finally, we use dot notation to access the prop data and then render it:

```js
return <p>{props.name}</p>;
```

## What is State?

- Special built-in object called State
- Allows components to create & manage their own data.
- Unlike Props, components cannot pass data with State but they can create and manage it internally.

Here is an example usage of State:

```js
class Test extends React.Component {
  constructor() {
    this.state = {
      id: 1,
      name: "test",
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
```

State should not be modified directly but it should be modified with a special method called setState( ).

```js
this.state.id = “2020”; // wrong

this.setState({         // correct
    id: "2020"
});
```

### What happens when State changes?

So when State changes, React gets informed and immediately re-renders the DOM, **not the complete DOM but only the component with the updated State.** This is one of the reasons why React is fast.

And how does React get notified? You guessed it right, with setState( ). The setState( ) method triggers the re-rendering process for the updated parts. React gets informed, knows which part/s to change and makes is quickly without re-rendering the complete DOM.

In sum, there are 2 important points we need to pay attention when using State:

- State shouldn’t be modified directly, setState( ) should be used
- State affects the performance of your app and therefore it shouldn’t be used unnecessarily

### Can I use State in every component?

Another important question being asked about State is where exactly we can use it. In the earlier days, State could only be used in **class components**, not in functional components.

That’s why functional components were also known as stateless components. However, after the introduction of **React Hooks**, State can now be used both in class & functional components.

If your project is not using React Hooks, then you can use State only in class components.

> Note: See here for more about State.

### What are the differences between Props & State?

Recap

- Components receive data from outside with Props, whereas they can create & manage their own data with State
- Props are being used to pass data, whereas State is for managing data
- Props data is read-only, cannot be modified by a component that receiving it from outside
- State data can be modified by its own component, but is private (cannot be accessed from outside)
- Props can be passed from parent component to child only (unidirectional flow)
- Modifying State should be made with the setState ( ) method
