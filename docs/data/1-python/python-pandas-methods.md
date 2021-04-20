---
slug: "python-pandas-methods"
title: Useful Methods in Pandas
---

# Handling Missing Data

Convenient methods to deal with Missing Data in pandas:

```py
import numpy as np
import pandas as pd

df = pd.DataFrame({'A':[1,2,np.nan],
                   'B':[5,np.nan,np.nan],
                   'C':[1,2,3]})
```

|     | A   | B   | C   |
| --- | --- | --- | --- |
| 0   | 1.0 | 5.0 | 1   |
| 1   | 2.0 | NaN | 2   |
| 2   | NaN | NaN | 3   |

## `dropna()`

```py
df.dropna()
# Drop raws with any missing values (NaN / null)
```

|     | A   | B   | C   |
| --- | --- | --- | --- |
| 0   | 1.0 | 5.0 | 1   |

```py
df.dropna(axis=1)
# Drop columns with any missing values (NaN / null)
```

|     | C   |
| --- | --- |
| 0   | 1   |
| 1   | 2   |
| 2   | 3   |

```py
df.dropna(thresh=2)
# Drop raws with < 2 non-NaN values
```

## `fillna()`

```py
df.fillna(value='FILL VALUE')
```

|     | A          | B          | C   |
| --- | ---------- | ---------- | --- |
| 0   | 1.0        | 5.0        | 1   |
| 1   | 2.0        | FILL VALUE | 2   |
| 2   | FILL VALUE | FILL VALUE | 3   |

```py
df['A'].fillna(value=df['A'].mean())
# 0    1.0
# 1    2.0
# 2    1.5
# Name: A, dtype: float64
```

# Groupby

The groupby method allows you to group rows of data together and call aggregate functions

```py
import pandas as pd
# Create dataframe
data = {'Company':['GOOG','GOOG','MSFT','MSFT','FB','FB'],
       'Person':['Sam','Charlie','Amy','Vanessa','Carl','Sarah'],
       'Sales':[200,120,340,124,243,350]}
df = pd.DataFrame(data)
```

|     | Company | Person  | Sales |
| --- | ------- | ------- | ----- |
| 0   | GOOG    | Sam     | 200   |
| 1   | GOOG    | Charlie | 120   |
| 2   | MSFT    | Amy     | 340   |
| 3   | MSFT    | Vanessa | 124   |
| 4   | FB      | Carl    | 243   |
| 5   | FB      | Sarah   | 350   |

Using .groupby() method groups rows together based off a column name & creates a `DataFramGroupBy` object

```py
by_comp = df.groupby('Company')
# <pandas.core.groupby.generic.DataFrameGroupBy object at 0x7fc970f60ed0>
```

```py
by_comp.mean()
# df.groupby('Company').mean()
```

| Company | Sales |
| ------- | ----- |
| FB      | 296.5 |
| GOOG    | 160.0 |
| MSFT    | 232.0 |

Other aggregate methods

```py
by_comp.std()
by_comp.min()
by_comp.max()
by_comp.count()
by_comp.describe()
by_comp.describe().transpose()
```

# Merging, Joining, and Concatenating

There are 3 main ways of combining DataFrames together: Merging, Joining and Concatenating.

```py
df1 = pd.DataFrame({'A': ['A0', 'A1', 'A2', 'A3'],
                    'B': ['B0', 'B1', 'B2', 'B3'],
                    'C': ['C0', 'C1', 'C2', 'C3'],
                    'D': ['D0', 'D1', 'D2', 'D3']},
                    index=[0, 1, 2, 3])
df2 = pd.DataFrame({'A': ['A4', 'A5', 'A6', 'A7'],
                    'B': ['B4', 'B5', 'B6', 'B7'],
                    'C': ['C4', 'C5', 'C6', 'C7'],
                    'D': ['D4', 'D5', 'D6', 'D7']},
                    index=[4, 5, 6, 7])
df3 = pd.DataFrame({'A': ['A8', 'A9', 'A10', 'A11'],
                    'B': ['B8', 'B9', 'B10', 'B11'],
                    'C': ['C8', 'C9', 'C10', 'C11'],
                    'D': ['D8', 'D9', 'D10', 'D11']},
                    index=[8, 9, 10, 11])
```

## Concatenation

Concatenation basically glues together DataFrames. Keep in mind that dimensions should match along the axis you are concatenating on. You can use `pd.concat` and pass in a list of DataFrames to concatenate together

```py
pd.concat([df1,df2,df3])
# concat by column (A,B,C,D)
pd.concat([df1,df2,df3], axis=1)
# concat by raw (index)
```

## Merging

The `merge` function allows you to merge DataFrames together using a similar logic as merging SQL Tables together.

```py
left = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                       'A': ['A0', 'A1', 'A2', 'A3'],
                       'B': ['B0', 'B1', 'B2', 'B3']})

right = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                        'C': ['C0', 'C1', 'C2', 'C3'],
                        'D': ['D0', 'D1', 'D2', 'D3']})
```

```py
pd.merge(left,right,how='inner',on='key')
```

|     | key | A   | B   | C   | D   |
| --- | --- | --- | --- | --- | --- |
| 0   | K0  | A0  | B0  | C0  | D0  |
| 1   | K1  | A1  | B1  | C1  | D1  |
| 2   | K2  | A2  | B2  | C2  | D2  |
| 3   | K3  | A3  | B3  | C3  | D3  |

More complex example:

```py
left = pd.DataFrame({'key1': ['K0', 'K0', 'K1', 'K2'],
                     'key2': ['K0', 'K1', 'K0', 'K1'],
                        'A': ['A0', 'A1', 'A2', 'A3'],
                        'B': ['B0', 'B1', 'B2', 'B3']})

right = pd.DataFrame({'key1': ['K0', 'K1', 'K1', 'K2'],
                      'key2': ['K0', 'K0', 'K0', 'K0'],
                         'C': ['C0', 'C1', 'C2', 'C3'],
                         'D': ['D0', 'D1', 'D2', 'D3']})
```

```py
pd.merge(left, right, on=['key1', 'key2'])
```

|     | key1 | key2 | A   | B   | C   | D   |
| --- | ---- | ---- | --- | --- | --- | --- |
| 0   | K0   | K0   | A0  | B0  | C0  | D0  |
| 1   | K1   | K0   | A2  | B2  | C1  | D1  |
| 2   | K1   | K0   | A2  | B2  | C2  | D2  |

```py
pd.merge(left, right, how='outer', on=['key1', 'key2'])
```

|     | key1 | key2 | A   | B   | C   | D   |
| --- | ---- | ---- | --- | --- | --- | --- |
| 0   | K0   | K0   | A0  | B0  | C0  | D0  |
| 1   | K1   | K0   | A2  | B2  | NaN | NaN |
| 2   | K1   | K0   | A2  | B2  | C2  | D2  |
| 3   | K1   | K0   | A2  | B2  | C2  | D2  |
| 4   | K2   | K1   | A3  | B3  | NaN | NaN |
| 5   | K2   | K0   | NaN | NaN | C3  | D3  |

```py
pd.merge(left, right, how='right', on=['key1', 'key2'])
pd.merge(left, right, how='left', on=['key1', 'key2'])

## Needs SQL knowledge
```

## Joining

Joining is a convenient method for combining the columns of two potentially differently-indexed DataFrames into a single result DataFrame.

```py
left = pd.DataFrame({'A': ['A0', 'A1', 'A2'],
                     'B': ['B0', 'B1', 'B2']},
                      index=['K0', 'K1', 'K2'])

right = pd.DataFrame({'C': ['C0', 'C2', 'C3'],
                      'D': ['D0', 'D2', 'D3']},
                      index=['K0', 'K2', 'K3'])
```

```py
left.join(right)
left.join(right, how='outer')
```

# Operations

```py
import pandas as pd
df = pd.DataFrame({'col1':[1,2,3,4],'col2':[444,555,666,444],'col3':['abc','def','ghi','xyz']})
```

|     | col1 | col2 | col3 |
| --- | ---- | ---- | ---- |
| 0   | 1    | 444  | abc  |
| 1   | 2    | 555  | def  |
| 2   | 3    | 666  | ghi  |
| 3   | 4    | 444  | xyz  |

## Info on Unique Values

```py
df['col2'].unique()
# array([444, 555, 666])

df['col2'].nunique()
# 3

df['col2'].value_counts()
# 444    2
# 555    1
# 666    1
# Name: col2, dtype: int64
```

## Applying Functions

```py
def times2(x):
    return x*2

df['col1'].apply(times2)
# 0    2
# 1    4
# 2    6
# 3    8
# Name: col1, dtype: int64

df['col3'].apply(len)
# 0    3
# 1    3
# 2    3
# 3    3
# Name: col3, dtype: int64

df['col1'].sum()
# 10
```

**Permanently Removing a Column**

```py
del df['col1']
```

|     | col2 | col3 |
| --- | ---- | ---- |
| 0   | 444  | abc  |
| 1   | 555  | def  |
| 2   | 666  | ghi  |
| 3   | 444  | xyz  |

**Get column and index names**

```py
df.columns
df.index
```

**Sorting and Ordering a DataFrame**

```py
df.sort_values(by='col2') #inplace=False by default
```

|     | col2 | col3 |
| --- | ---- | ---- |
| 0   | 444  | abc  |
| 3   | 444  | xyz  |
| 1   | 555  | def  |
| 2   | 666  | ghi  |

**Find Null Values or Check for Null Values**

```py
df.isnull()
```

|     | col2  | col3  |
| --- | ----- | ----- |
| 0   | False | False |
| 3   | False | False |
| 1   | False | False |
| 2   | False | False |

```py
data = {'A':['foo','foo','foo','bar','bar','bar'],
     'B':['one','one','two','two','one','one'],
       'C':['x','y','x','y','x','y'],
       'D':[1,3,2,5,4,1]}

df = pd.DataFrame(data)
```

|     | A   | B   | C   | D   |
| --- | --- | --- | --- | --- |
| 0   | foo | one | x   | 1   |
| 1   | foo | one | y   | 3   |
| 2   | foo | two | x   | 2   |
| 3   | bar | two | y   | 5   |
| 4   | bar | one | x   | 4   |
| 5   | bar | one | y   | 1   |

```py
df.pivot_table(values='D',index=['A', 'B'],columns=['C'])
```

```
	C	x	y
A	B
---------------
bar	one	4.0	1.0
two	NaN	5.0
foo	one	1.0	3.0
two	2.0	NaN
```

# Data Input and Output

## CSV

### CSV Input

Read csv file

```
df = pd.read_csv('example')
```

Write to csv file

```
df.to_csv('example',index=False)
```

## Excel

### Excel Input

Read Excel File

```py
pd.read_excel('Excel_Sample.xlsx',sheet_name='Sheet1')
```

### Excel Output

Write to Excel File

```py
df.to_excel('Excel_Sample.xlsx',sheet_name='Sheet1')
```

## HTML

You may need to install htmllib5,lxml, and BeautifulSoup4. In your terminal/command prompt run:

    conda install lxml
    conda install html5lib
    conda install BeautifulSoup4

Then restart Jupyter Notebook.
(or use pip install if you aren't using the Anaconda Distribution)

Pandas can read table tabs off of html. For example:

### HTML Input

Pandas read_html function will read tables off of a webpage and return a list of DataFrame objects:

```py
df = pd.read_html('http://www.fdic.gov/bank/individual/failed/banklist.html')
df[0]
```
