---
id: css-centering
title: How to center things with style on CSS
---

1. Text-Align Method
- Enclose the div that you want to center with a parent div
- Set “text-align: center” to parent element
- Set child div to “display: inline-block”
```html
<div class="blue-square-container">
  <div class="blue-square"></div>
</div>
```

```css
.blue-square-container {
  text-align: center;
}
.blue-square {
  background-color: #0074D9;
  width: 100px;
  height: 100px;
  display: inline-block;
}
```

2. Margin Auto Method

`margin: top right bottom left`

`margin: 0 auto` : Set the top and bottom margins to `0`, and the left and right margins to `auto`.

**Need to define width.**

```html
<div class="yellow-square"></div>
```
```css
.yellow-square {
  background-color: #FFDC00;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
```

3. Absolute Positioning Method (Brute Force)

*Absolute positioning removes the element from the flow of the page.*

- Set the element’s position property to absolute
- Apply “left: 50%” to the element
- Set a margin-left of half of the element’s width

```html
<div class="green-square"></div>
```
```css
.green-square {
  background-color: #3D9970;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
```

4. Flexbox Method
```html
<div class="purple-square-container">
  <div class="purple-square"></div>
</div>
```
```css
.purple-square-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purple-square {
  background-color: #B10DC9;
  width: 300px;
  height: 300px;
}
```
- `align-items` : vertically center
- `justify-contents` : horizontally center



Reference: 
- https://www.freecodecamp.org/news/how-to-center-things-with-style-in-css-dc87b7542689/
