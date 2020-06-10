---
id: react-hook-adv
title: Advanced React Hook (ft. useMemo & useCallback)
---

## useMemo

```js
useMemo(function, dependencies arrays)

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`useMemo` will ONLY recompute the memoized value when one of the dependencies has changed.

This optimization helps to avoid expensive calcualtions on every render