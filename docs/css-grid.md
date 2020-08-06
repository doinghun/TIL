---
id: css-grid
title: CSS Grid 101
---

## Properties for the Parent (grid container)

### display
```css
.container {
  display: grid | inline-grid;
}
```
- **grid** – generates a block-level grid
- **inline-grid** – generates an inline-level grid

### grid-template-columns | grid-template-rows

```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```
<img src="https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg" width="400" />

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}

// Is equivalent to

.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```