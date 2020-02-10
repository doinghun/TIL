---
id: react-lifecycle
title: React Lifecycle
---
## What are the different phases of the component lifecycle in React?

![Lifecycle](/TIL/img/react-lifecycle-diagram-detailed.png)

There are four different phases of component’s lifecycle:

### Initialization
In this phase, the component prepares setting up the initial state and default props.

### Mounting
The react component is ready to mount to the DOM.
- `getDerivedStateFromProps`
- `componentDidMount`

### Updating
In this phase, the component gets updated in two ways, sending the new props and updating the state. 
- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `getSnapshotBeforeUpdate`
- `componentDidUpdate`

### Unmounting
In this last phase, the component is not needed and gets unmounted from the browser DOM.
- `componentWillUnmount`

### Error Handling
In this phase, the component is called whenever there's an error during rendering, in a lifecycle method, or in the constructor for any child component.
- `componentDidCatch`