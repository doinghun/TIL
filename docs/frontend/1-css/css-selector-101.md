---
slug: "css-selector-101"
title: Selectors 101
---

CSS Selectors cheatsheet

## Types

```css
# Class .nav {
  ...;
}

# ID #nav {
  ...;
}

# Nav element nav {
  ...;
}

# Attribute a[nav] {
  ...;
}
```

## Operator

### Adjacent Sibling combinator

Select all `<p>` elems placed right after `<div>` elems

```css
div + p
```

### General Sibling combinator

Selects every `<ul>` element that are preceded by a `<p>`element

```css
ul ~ p
```

### name

Selects all `<p>` elems inside `<div>` elems

```css
div p
```
