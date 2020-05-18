---
id: react-cytoscape
title: Creating Cytoscape in React
---

```js
const elements = [
  { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
  { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
  { data: { source: "one", target: "two", label: "Edge from Node1 to Node2" } },
]
const layout = { name: "random" }

<CytoscapeComponent
    elements={elements}
    style={{ width: "400px", height: "400px", background: "white" }}
    layout={layout}
    zoom={2}
/>
```

https://github.com/plotly/react-cytoscapejs