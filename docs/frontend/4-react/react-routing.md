---
slug: 'react-routing' 
title: Routing in React
---

## Routers

- BrowserRouter [Mostly used]
- HashRouter
- _(MemoryRouter)_

```js
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById(‘root’));
```

## History

Each router creates a history object that it uses to keep track of the current location and re-renders the application whenever this location changes.

The `BrowserRouter` uses the HTML5 history API to keep the user interface in sync with the URL in the browser address bar.

The `history` object created by the Router contains a number of properties and one of the location property whose value is also an object.

## Routes

### `exact` Prop

```js
<Route path=”/items”/>
```

This route is matched when the pathname is

- `/items` or
- all other paths that start with `/items/` _( For example, `/items/2` )_

```js
<Route exact path=”/items” />
```

If the intention is to strictly match only `/items`, Adding `exact` prop ensures that only the pathname that exactly matches the current location is rendered.

### `component` Prop

The component prop defines the React element that will be returned by the Route when the path is matched.

This React element is created from the provided component using `React.createElement`.

```js
<Route
  exact
  path=”/items”
  component={Items}
/>
```

### `render` Prop

The `render` prop provides the ability for **inline rendering** and **passing extra props to the element**.

This prop expects a function that returns a React element when the current `location` matches the route’s path.

```js
// Without prop
<Route
  exact
  path=”/items”
  render={() => (<div>List of Items</div>)}
/>

// With Prop
const cat = {category: “food”}
<Route
  exact path=”/items”
  render={props => <Items {…props} data={cat}/>}
/>
```

### `children` Prop

Similar to the `render` prop since it always expects a function that returns a React element.

The major difference is that the element defined by the child prop is returned for **all paths** irrespective of whether the current location matches the path or not.

```js
<Route children={props => <Items {…props}/>}/>
```

In this case, Items component is always rendered.

++ TBC, Switch & Link
