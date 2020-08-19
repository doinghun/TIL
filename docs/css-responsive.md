---
id: css-reponsive
title: CSS Reponsive Web Design Princicples
---

## Media Query

- New technique on CSS3 that changes the presentation of content based on different viewport sizes (user's visible area of a web page depending on device).

### Example

Media query that returns the content when the device's **width** <= 100px

```css
@media (max-width: 100px) {
    p {
        font-size: 20px;
    }
}
```

Media query that returns the content when the device's **height** >= 350px

```css
@media (min-height: 350px) {
    p {
        font-size: 20px;
    }
}
```

## Reponsive Image

```css
responsive-img {
    max-width: 100%;
    height: auto;
}
```

## Responvie texts

- `vw` (viewport width): 10vw would be 10% of the viewport's width.
- `vh` (viewport height): 3vh would be 3% of the viewport's height.
- `vmin` (viewport minimum): 70vmin would be 70% of the viewport's smaller dimension (height or width).
- `vmax` (viewport maximum): 100vmax would be 100% of the viewport's bigger dimension (height or width).
```css
body {
    width: 30vw; // 30 % of viewport's width
}
```