---
id: css-scroll-behavior
title: CSS Scroll Behavior
---

## Using `scroll-behavior` to control transition animation of section jumping

### Using CSS

```css
.module {
  scroll-behaviour: [ auto | smooth ];
}
```

- `auto`: Abrupt jump between elements within the scrolling box
- `smooth`: Smooth animated transition

```html
<nav>
  <a href="#1">1</a>
  <a href="#2">2</a>
  <a href="#3">3</a>
</nav>

<div class="scrolling-box">
  <section id="1">This is the first section</section>
  <section id="2">This is the second section</section>
  <section id="3">This is the third section</section>
</div>
```

```css
.scrolling-box {
  background-color: #eaeaea;
  display: block;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  text-align: center;
  width: 200px;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
```

### Using `window` methods

- `Window.scrollTo()` scrolls to a particular set of coordinates in the document.
- Using `options`

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

---

Resources:

- https://css-tricks.com/almanac/properties/s/scroll-behavior/
- https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
