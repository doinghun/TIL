---
id: css-em-vs-rem
title: Difference between `em` & `rem` units
---

### `em` vs `rem` unit in CSS

Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.

- `em` units inherit their value from the `font-size` of the **parent** element
  - Use `%` instead for change depending on `box size`
- `rem` units inherit their value from t he `font-size` of the **root** element (`html`)
  - Use `v*` (viewport) instead for change depending on `box size`

*Note: In most browsers, the `font-size` of the root element is set to `16px` by default.*

### Reference
- [What is the difference between em and rem units?](https://github.com/30-seconds/30-seconds-of-interviews/blob/master/questions/em-rem-difference.md)
- [CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)