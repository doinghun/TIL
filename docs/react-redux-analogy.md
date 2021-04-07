---
id: react-redux-analogy
title: React Redux explained in Analogy
---

Redux is usually used together with React today as it helps with state management.
It's very confusing at first go & here's my attempt to explain it in easy term. (CR to Stephen from Udemy)

## React Redux system as Insurance Company

Redux using analogy of insurance company. Redux consist of

- Action Creator
- Action
- dispatch
- Reducers
- State

![Diagram](/img/react-redux-analogy.png)

1. In the analogy, Person **(Action Creator)** drops off a form **(Action)** stating policy or claim at the front desk of insurance company
2. Form receiver **(dispatch)** hand over the form to insurance departments consisting of accounting, policies and claim history **(Reducers)**.
3. Finally all processed policy or claim comes in form of compiled department data **(State)**

## Non-Analogy Diagram of React Redux system

![Diagram](/img/reactreduxdiagram.gif)
