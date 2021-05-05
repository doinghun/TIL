---
slug: "devops-prettier-setup-troubleshooting"
title: Prettier Setup Troubleshooting
---

## Problem 1:

Keep getting `[eslint] Delete 'cr' [prettier/prettier]`

### Context

Working in MAC DEV Environment and thus, `LF (\n)` is set to default on the codebase.

## Solution 1:

- Add `"endOfLine": "auto"` to .prettierrc or .eslintrc file

## Solution 2 [Windows]:

- Set `autocrlf` to `false`

```sh
git config --global core.autocrlf false
```

---

_References_:

- https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
- https://technote.kr/300
