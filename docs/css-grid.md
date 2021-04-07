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

### grid-column-gap | grid-row-gap

- Add a gap in between the columns or rows of a grid

### grid-gap

- If only 1 value, set a gap bewteen all rows & columns
- If 2 values, first one set row gap & 2nd one set column gap

```css
.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

### grid-template-areas

- Group cells of your grid together into an area and give the area a custom name
- Can use a period (.) to designate an empty cell in the grid.

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg" width="400" />

## **Properties for the Children (grid item)**

### **grid-column | grid-row**

```css
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}

// example
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row.svg" width="400" />

If no end line value is declared, the item will span 1 track by default.

### grid-area

- If your grid doesn't have an areas template to reference, you can create an area on the fly

```css
.item {
  grid-area: <name> * * | * * <row-start> / <column-start> / <row-end> /
    <column-end>;
}

// example

.item-d {
  grid-area: 1 / col4-start / last-line / 6;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-area.svg" width="400" />

### justify-self

- Aligns a grid item inside a cell along the inline (row) axis horizontally _(↔ align-self)_

```css
.item {
  justify-self: start | end | center | stretch;
}
```

### align-self

- Aligns a grid item inside a cell along the block (column) axis vertically _(↔ justify-self)_

```css
.item {
  align-self: start | end | center | stretch;
}
```

## Special Functions and Keywords

### minmax

- Set a column to be 1fr, but shrink no further than 200px

```css
grid-template-columns: 1fr minmax(200px, 1fr);
```

### repeat

- Make 10 columns of size 1fr

```css
grid-template-columns: repeat(10, 1fr);
```

### autofill

- The `repeat` function comes with an option called `auto-fill`.
- This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container.

### autofit

- Almost work identically to `auto-fill`.
- The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

## Media Queries

When the viewport width is `400px` or more, make the header area occupy the top row completely and the footer area occupy the bottom row completely.

```css
.container {
  font-size: 1.5em;
  min-height: 300px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto 1fr auto;
  grid-gap: 10px;
  grid-template-areas:
    "header"
    "advert"
    "content"
    "footer";
}

@media (min-width: 300px) {
  .container {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
}

@media (min-width: 400px) {
  .container {
    grid-template-areas:
      /* Only change code below this line */
      "header header"
      "advert content"
      "footer footer";
    /* Only change code above this line */
  }
}
```

---

## Reference

- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://www.freecodecamp.org/learn/responsive-web-design/css-grid/
