---
slug: "python-pandas-intro"
title: Intro to Python Pandas
---

# Series

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

# DataFrames

DataFrames are the workhorse of pandas and are directly inspired by the R programming language. We can think of a DataFrame as a bunch of Series objects put together to share the same index.

```py
import pandas as pd
import numpy as np

from numpy.random import randn
np.random.seed(101)

df = pd.DataFrame(
    randn(5,4), #data
    index='A B C D E'.split(), #index
    columns='W X Y Z'.split() #columns
    )
```

## Selection & Indexing

### Columns

```py
df['W']

# Pass a list of column names
df[['W','Z']]
```

DataFrame Columns are just Series

```py
type(df['W'])
# pandas.core.series.Series
```

Creating a new column:

```py
df['new'] = df['W'] + df['Y']
```

Removing columns

```py
# axis = 0 : row
# axis = 1 : column

df.drop('new',axis=1) # Not Inplace

df.drop('new',axis=1,inplace=True) # Inplace
```

### Rows

```py
# label based index
df.loc['A']

W    2.706850
X    0.628133
Y    0.907969
Z    0.503826
Name: A, dtype: float64

# numerical based index
df.iloc[2]

W   -2.018168
X    0.740122
Y    0.528813
Z   -0.589001
Name: C, dtype: float64
```

Selecting subset of rows & columns

```py
df.loc['B','Y'] #[R,C]
-0.84807698340363147

df.loc[['A','B'],['W','Y']]
```

|     | W        | Y         |
| --- | -------- | --------- |
| A   | 2.706850 | 0.907969  |
| B   | 0.651118 | -0.848077 |

### Conditional Selection

An important feature of pandas is conditional selection using bracket notation, very similar to numpy.

```py
df
```

|     | W         | X         | Y         | Z         |
| --- | --------- | --------- | --------- | --------- |
| A   | 2.706850  | 0.628133  | 0.907969  | 0.503826  |
| B   | 0.651118  | -0.319318 | -0.848077 | 0.605965  |
| C   | -2.018168 | 0.740122  | 0.528813  | -0.589001 |
| D   | 0.188695  | -0.758872 | -0.933237 | 0.955057  |
| E   | 0.190794  | 1.978757  | 2.605967  | 0.683509  |

```py
df>0
# returns 5x4 table of boolean

df[df>0]
# returns 5x4 table with +ve num

df[df['W']>0]
# returns 4x4 table where column W has only +ve num

df[df['W']>0]['Y']
# returns Series of Y column which satisfies the condition

df[df['W']>0]['Y','X']
# returns 4x2 table of Y & X which satisfies the condition

## For two conditions, use | and & with parenthesis: (Can't use `and`)

df[(df['W']>0) & (df['Y'] > 1)]
```

## More Index Details

```py
# Reset to dafult 0,1...n index
df.reset_index()
#(Need Inplace arg)
```

```py
newind = 'CA NY WY OR CO'.split()

df['States'] = newind

df
```

|     | W         | X         | Y         | Z         | States |
| --- | --------- | --------- | --------- | --------- | ------ |
| A   | 2.706850  | 0.628133  | 0.907969  | 0.503826  | CA     |
| B   | 0.651118  | -0.319318 | -0.848077 | 0.605965  | NY     |
| C   | -2.018168 | 0.740122  | 0.528813  | -0.589001 | WY     |
| D   | 0.188695  | -0.758872 | -0.933237 | 0.955057  | OR     |
| E   | 0.190794  | 1.978757  | 2.605967  | 0.683509  | CO     |

```py
df.set_index('States')
#(Need Inplace arg)

df.set_index('States',inplace=True)
```

| States | W         | X         | Y         | Z         |
| ------ | --------- | --------- | --------- | --------- |
| CA     | 2.706850  | 0.628133  | 0.907969  | 0.503826  |
| NY     | 0.651118  | -0.319318 | -0.848077 | 0.605965  |
| WY     | -2.018168 | 0.740122  | 0.528813  | -0.589001 |
| OR     | 0.188695  | -0.758872 | -0.933237 | 0.955057  |
| CO     | 0.190794  | 1.978757  | 2.605967  | 0.683509  |

## Multi-Index & INdex Hierarchy

```py
# Index Levels
outside = ['G1','G1','G1','G2','G2','G2']
inside = [1,2,3,1,2,3]
hier_index = list(zip(outside,inside))
hier_index = pd.MultiIndex.from_tuples(hier_index)

# MultiIndex(levels=[['G1', 'G2'], [1, 2, 3]],
#            labels=[[0, 0, 0, 1, 1, 1], [0, 1, 2, 0, 1, 2]])
```

```py
df = pd.DataFrame(np.random.randn(6,2),index=hier_index,columns=['A','B'])
```

|     |     | A         | B         |
| --- | --- | --------- | --------- |
| G1  | 1   | 0.302665  | 1.693723  |
| G1  | 2   | -1.706086 | -1.159119 |
| G1  | 3   | -0.134841 | 0.390528  |
| G2  | 1   | 0.166905  | 0.184502  |
| G2  | 2   | 0.807706  | 0.072960  |
| G2  | 3   | 0.638787  | 0.329646  |

```py
df.loc['G1']
```

|     | A         | B         |
| --- | --------- | --------- |
| 1   | 0.302665  | 1.693723  |
| 2   | -1.706086 | -1.159119 |
| 3   | -0.134841 | 0.390528  |

```py
df.loc['G1'].loc[1]

# A    0.302665
# B    1.693723
# Name: 1, dtype: float64
```

```py
df.index.names
# FrozenList([None, None])
```

```py
df.index.names = ['Group','Num']
```

| Group | Num | A         | B         |
| ----- | --- | --------- | --------- |
| G1    | 1   | 0.302665  | 1.693723  |
| G1    | 2   | -1.706086 | -1.159119 |
| G1    | 3   | -0.134841 | 0.390528  |
| G2    | 1   | 0.166905  | 0.184502  |
| G2    | 2   | 0.807706  | 0.072960  |
| G2    | 3   | 0.638787  | 0.329646  |

```py
df.xs('G1') # cross-section
```

| Num | A         | B         |
| --- | --------- | --------- |
| 1   | 0.302665  | 1.693723  |
| 2   | -1.706086 | -1.159119 |
| 3   | -0.134841 | 0.390528  |

```py
df.xs(['G1',1])
# A    0.302665
# B    1.693723
# Name: (G1, 1), dtype: float64
```

```py
df.xs(1,level='Num')
```

| Group | A        | B        |
| ----- | -------- | -------- |
| G1    | 0.302665 | 1.693723 |
| G2    | 0.166905 | 0.184502 |
