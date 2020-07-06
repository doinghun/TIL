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

Reference
---
https://css-tricks.com/snippets/css/a-guide-to-flexbox/