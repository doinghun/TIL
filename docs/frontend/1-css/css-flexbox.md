---
slug: "css-flexbox"
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

<img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg" width="400" />

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
  flex-direction: row | row-reverse | column | column-reverse;
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

<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" width="400" />

Defines the alignment along the **main axis**.

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

### align-items

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" width="400" />

Defines the alignment along the **cross axis**.
(`justify-content` of cross-axis)

- `stretch` (default): stretch to fill the container (still respect min-width/max-width)
- `flex-start / start / self-start`: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
- `flex-end / end / self-end`: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
- `center`: items are centered in the cross-axis
- `baseline`: items are aligned such as their baselines align

### align-content

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg" width="400" />

This aligns a flex container’s lines within _when there is extra space_ in the **cross-axis**, similar to how justify-content aligns individual items within the main-axis.

- `flex-start / start`: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
- `flex-end / end`: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
- `center`: items centered in the container
- `space-between`: items evenly distributed; the first line is at the start of the container while the last one is at the end
- `space-around`: items evenly distributed with equal space around each line
- `space-evenly`: items are evenly distributed with equal space around them
- `stretch` (default): lines stretch to take up the remaining space

<img src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg" width="400" />

## Properties for the Children (flex items)

### order

<img src="https://css-tricks.com/wp-content/uploads/2018/10/order.svg" width="400" />

The order property controls the order in which they appear in the flex container.

```css
.item1 {
  order: 2; /* default is 0 */
}

.item2 {
  order 1;
}

| item2 | item 1 |
```

### flex-grow

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg" width="400" />

This defines the ability for a flex item to grow if necessary. It dictates what amount of the available space inside the flex container the item should take up.

If all items have `flex-grow` set to 1, the remaining space in the container will be distributed equally to all children.

If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

```css
.item {
  flex-grow: 4; /* default 0 */
}
```

### flex-shrink

This defines the ability for a flex item to shrink if necessary.

```css
.item1 {
  flex-shrink: 1; /* default 1 */
}

.item2 {
  flex-shrink: 2; /* default 1 */
}

| item 1 | item 1 | item 2 |
```

### flex-basis

- Specifies the initial size of the item before CSS makes adjustments with `flex-shrink` / `flex-grow`
- If set to `auto`, sizes items based on the content

### flex

- Shortcut to set several flex properties at once.

```css
.item {
  flex: flex-grow flex-shrink flex-basis;
  flex: 1 0 10px;
}
```

### align-self

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg" width="400" />

- Allows the default alignment to be overriden for individual flex items.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## Reference

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
