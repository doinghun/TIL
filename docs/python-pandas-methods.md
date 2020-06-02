---
id: python-pandas-methods
title: Useful Methods in Pandas
---

## Handling Missing Data

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

### `dropna()`
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

### `fillna()`

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

## Groupby

The groupby method allows you to group rows of data together and call aggregate functions