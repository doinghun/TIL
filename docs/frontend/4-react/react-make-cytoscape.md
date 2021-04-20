---
slug: "react-make-cytoscape"
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

## Layout

```js
import React from "react";
import Cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import COSEBilkent from "cytoscape-cose-bilkent";
Cytoscape.use(COSEBilkent);

const layout = {
  name: "cose-bilkent",
};
```

## Reference

- Motivation: https://seomal.org
- https://github.com/plotly/react-cytoscapejs
- https://velog.io/@takeknowledge/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5-cytoscape-%ED%99%9C%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-56k4in7315#%F0%9F%A7%B2-%ED%95%98%EC%9D%B4%ED%8D%BC-%EB%A7%81%ED%81%AC-%EC%97%B0%EA%B2%B0
