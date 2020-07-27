---
id: css-flexbox
title: CSS Flexbox 101
---

## Basics & Terminology

![alt text](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

- flex container
- flex items
- main axis
  - main-start | main-end
  - main size
- cross axis
  - cross-start | cross-end
  - cross size

## Properties for the Parent (flex container)

### display
```css
.container {
  display: flex;
}
```

### flex direction
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse
}
```
- `row` (default): left to right in `ltr`;
- `column`: top to bottom;

### flex-wrap
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
- `nowrap` (default): all flex items in one line
- `wrap`: flex items wrap onto multiple lines (top to bottom)
- `wrap-reverse`: flex items wrap onto multiple lines (bottom to top)

### flex-flow
```css
.container {
  flex-flow: column wrap;
}
```
Shortcut for defining `flex-direction` & `flex-wrap` together
- default: `row nowrap`

### justify-content

<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" alt="" style="width:300px;"/>

Defines the alignment along the main axis.

- `flex-start` (default): items are packed toward the start of the flex-direction.
- `flex-end`: items are packed toward the end of the flex-direction.
- `start`: items are packed toward the start of the writing-mode direction.
- `end`: items are packed toward the end of the writing-mode direction.
- `left`: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
- `right`: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
- `center`: items are centered along the line
- `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
- `space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.


Reference
---
https://css-tricks.com/snippets/css/a-guide-to-flexbox/