---
id: python-pandas-intro
title: Intro to Python Pandas
---

## Serie

- Similar to Numpy array except it can be named or given datetime index (instead of numerical index)

### Creating a Series

```py
import numpy as np
import pandas as pd

labels = ['a','b','c']
my_list = [10,20,30]
arr = np.array([10,20,30])
d = {'a':10,'b':20,'c':30} # dictionary
```

**Using Lists**
```py
pd.Series(data=my_list)
# 0    10
# 1    20
# 2    30
# dtype: int64

pd.Series(data=my_list,index=labels)
# a   10
# b   20
# c   30
# dtype: int64
```

**Using NumPy Arrays**
```py
pd.Series(arr)
# 0    10
# 1    20
# 2    30
# dtype: int64

pd.Series(arr,labels)
# a    10
# b    20
# c    30
# dtype: int64
```

**Using Dictionary**
```py
pd.Series(d)
# a    10
# b    20
# c    30
# dtype: int64
```

## Using an Index

Pandas makes use of these index names or numbers by allowing for fast look ups of information (works like a hash table or dictionary).

```py
ser1 = pd.Series([1,2,3,4],index = ['USA', 'Germany','USSR', 'Japan'])
# USA        1
# Germany    2
# USSR       3
# Japan      4
# dtype: int64

ser2 = pd.Series([1,2,5,4],index = ['USA', 'Germany','Italy', 'Japan'])
# USA        1
# Germany    2
# Italy      5
# Japan      4
# dtype: int64

ser1['USA'] 
# 1

ser1 + ser2
# Germany    4.0
# Italy      NaN
# Japan      8.0
# USA        2.0
# USSR       NaN
# dtype: float64

# no match => null value
```