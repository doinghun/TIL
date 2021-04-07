---
id: python-matplotlib
title: Intro to Matplotlib
---

## Intro

Matplotlib is the "grandfather" library of data visualization with Python. To replicate MatLab's plotting capabilities in Python.

It is an excellent 2D and 3D graphics library for generating scientific figures.

### Installation

`conda install matplotlib` or `pip install matplotlib`

### Importing

```py
import matplotlib.pyplot as plt
%matplotlib inline # Only for jupyter notebooks
plt.show() # At end of all plotting commands for other editor
```

## Basic Example

```py
import numpy as np
x = np.linspace(0,5,11) # 0 to 5, 11 endpoints
# array([0. , 0.5, 1. , 1.5, 2. , 2.5, 3. , 3.5, 4. , 4.5, 5. ])

y = x ** 2
# array([ 0.  ,  0.25,  1.  ,  2.25,  4.  ,  6.25,  9.  , 12.25, 16.  ,20.25, 25.  ])
```

## Basic Matplotlib Commands

```py
plt.plot(x, y, 'r') # 'r' is the color red
plt.xlabel('X Axis Title Here')
plt.ylabel('Y Axis Title Here')
plt.title('String Title Here')
plt.show()
```

## Creating Multiplots on Same Canvas

Functional

```py
# plt.subplot(nrows, ncols, plot_number)
plt.subplot(1,2,1)
plt.plot(x, y, 'r--') # More on color options later
plt.subplot(1,2,2)
plt.plot(y, x, 'g*-')
```

# Matplotlib Object Oriented Method
