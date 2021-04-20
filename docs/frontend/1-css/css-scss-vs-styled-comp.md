---
slug: 'css-scss-vs-styled-comp' 
title: SCSS vs Styled Components
---

## Overwriting styles and naming conventions

### Winner: Styled Components

- No styles overwriting & conflicts as there is no globally scoped selectors
- Although Sass comes with nice upgrades such as nesting and variables, it’s more likely to lead to overwriting styles.
- Simplicity in naming for Styled-components.
- SCSS: A lot of going back and forth to find the correct classes. Challenge for large projects
- SCSS: the code quickly becomes crowded when you start adding classes, especially if you want the additional styling to be optional for the user.

## Customization & reuse

### Winner: Styled Components

- Styled-components are easier to reuse than those styled with Sass.
- If you want to share a component between two higher-order components or even between two apps, you can be sure that the logic and styling will remain consistent.
- They’re also easy to customize by simply passing additional props. The ability to condition properties such as sizes and colors to props makes the styles more dynamic and easier to handle in big projects

## Performance and caching

### Winner: Styled Components (by bit)

- Styled-components are rendered only if the component is on screen, while Sass is processed anyway in most cases, although this can be controlled.
- But the drawback in this case is that once the styles are parsed, all the code is added into the index.html file and there’s no way to separate the CSS from the rest.
- Another disadvantage of styled-components is that the class names are generated dynamically, which can cause issues with caching between builds or renders. With Sass, this issue doesn’t exist.

## Debugging

### Winner: SCSS

The method of scoping styled-components is superior in terms of reusability and customization, but because the components are more generic, it can be harder to debug them.

Moreover, due to all the conditioning and logic mixed with styles, they’re also harder to read. With Sass/SCSS, the output is plain CSS and debugging is easier.

## Learning curve and legacy code

Winner: SCSS

- The learning curve for styled-components is steeper than that of Sass/SCSS, and not all developers like to mix their CSS with JS. But with styled-components, you can still use plain CSS. You don’t have the flexibility to do things both ways with Sass.

- Finally, Sass is more likely to be found in legacy projects. Integrating both libraries into a single application can be confusing. Although styled-components offer myriad advantages, some developers prefer the stability and more universal character of Sass over the novelty of styled-components.

---

Reference: https://blog.logrocket.com/moving-from-scss-to-styled-components-advantages-and-caveats/
