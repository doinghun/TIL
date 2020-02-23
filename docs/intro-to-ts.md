---
id: intro-to-ts
title: Introduction to TypeScript
---

## What is TypeScript?

TypeScript = JavaScript + ***Type System***

TS Type System
 - Helps us catch errors *during development*
 - Uses 'type annotations' to analyze our code
 - Only active *during development*
 - Doesn't provide any performance optimization

![Types](/TIL/img/typescript-types.png)

### What is Type?

- Easy way to refer to the different properties + functions that a value has

### Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

## Type Annotations & Type Inference

### Type Annotations

- Developers tell TypeScript what type of value a variable will refer to

### Type inference

- TypeScript tries to figure out what type of value a variable refers to

### When to use Type Annotations over Type Inference?

- When a function returns the 'any' type and we need to clarify the value
- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred