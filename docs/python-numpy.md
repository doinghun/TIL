---
id: python-numpy
title: Numpy in Python
---

Numpy is numberical lib for Python 
- It allows for fast data generation & handling
- It utilizes arrays that can efficiently store data (faster than built in python list

# Numpy Arrays

## Creating NumPy Arrays from a Python List
```py
my_list = [1,2,3]
type(my_list) #list 

x = np.array(my_list)
type(x) #numpy.ndarray

my_matrix = [[1,2,3],[4,5,6],[7,8,9]]
type(my_matrix) #list

y = np.array(my_matrix)
type(y) #numpy.ndarray
```

## Built-in Methods
### arange
Return evenly spaced values within a given interval.
```py
np.arange(0,10) #(start, end(excl))
#array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

np.arange(0,11,2) #(start, end(excl), interval)
#array([ 0,  2,  4,  6,  8, 10])
```
### zeros and ones
Generate arrays of zeros or ones
```py
np.zeros(3)
# array([0., 0., 0.])

np.zeros((5,5))
# array([[ 0.,  0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.,  0.]])

np.ones(3)
# array([ 1.,  1.,  1.])

np.ones((3,3))
#array([[ 1.,  1.,  1.],
#       [ 1.,  1.,  1.],
#       [ 1.,  1.,  1.]])
```
### linspace
Return *evenly* spaced numbers over a specified interval.

```py
np.linspace(0,10,3) #(start, end(incl), number of elem)
# array([  0.,   5.,  10.])
```
## eye

Creates an identity matrix

np.eye(4)
```py
# array([[ 1.,  0.,  0.,  0.],
#        [ 0.,  1.,  0.,  0.],
#        [ 0.,  0.,  1.,  0.],
#        [ 0.,  0.,  0.,  1.]])
```

## Random 

Numpy also has lots of ways to create random number arrays:

### rand
Create an array of the given shape and populate it with
random samples from a **uniform** distribution
over ``[0, 1)``.
```py
np.random.rand(2)
# array([0.11117311, 0.10694908])
np.random.rand(5,5) 
# array([[0.32919478, 0.89520412, 0.03326804, 0.47479204],
#       [0.99272802, 0.71816066, 0.3453127 , 0.17001773],
#       [0.07819272, 0.76300463, 0.8945015 , 0.487872  ],
#       [0.95668361, 0.80910131, 0.48793077, 0.72231638],
#       [0.37697983, 0.94262294, 0.13009871, 0.77302476]])
```
### randn

Return a sample (or samples) from the **"standard normal"** distribution.
```py
np.random.randn(2)
# array([0.57916744, 0.01683836])
np.random.randn(5,4)
# array([[-0.03813404,  0.00507951, -0.50010239,  0.14320891],
#       [ 0.80241397,  0.99455157,  0.55929319,  1.57562611],
#       [ 2.36626857,  0.7783677 , -1.92138192, -0.0893623 ],
#       [ 0.07557485,  1.48150919, -0.17868916, -1.67600368],
#       [ 1.37925383, -0.61186829, -0.87933735, -0.56165139]])
```
### randint
Return random integers from `low` (inclusive) to `high` (exclusive).
```py
np.random.randint(1,100) # (start(incl), end(excl))
np.random.randint(1,100,10) # (start(incl), end(excl), num of elem)
```
## Array Attributes and Methods

Let's discuss some useful attributes and methods or an array:
```py
arr = np.arange(25)
# array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
ranarr = np.random.randint(0,50,10)
# array([38,  4, 42, 31, 46, 34, 23, 49, 33, 30])
```
## Reshape
Returns an array containing the same data with a new shape.
```py
arr.reshape(5,5)
# array([[ 0,  1,  2,  3,  4],
#       [ 5,  6,  7,  8,  9],
#       [10, 11, 12, 13, 14],
#       [15, 16, 17, 18, 19],
#       [20, 21, 22, 23, 24]])
```
### max,min,argmax,argmin

These are useful methods for finding max or min values. 
Or to find their index locations using argmin or argmax
```py
ranarr
# array([38,  4, 42, 31, 46, 34, 23, 49, 33, 30])
ranarr.max()
# 49
ranarr.argmax()
# 7
ranarr.min()
# 4
ranarr.argmin()
# 1
```
## Shape

Shape is an **attribute** that arrays have (not a method):
```py
arr.shape
# (25,)
arr.reshape(5,5)
#array([[ 0,  1,  2,  3,  4],
#       [ 5,  6,  7,  8,  9],
#       [10, 11, 12, 13, 14],
#       [15, 16, 17, 18, 19],
arr.reshape(5,5).shape
# (5,5)
```

### dtype

You can also grab the data type of the object in the array:
```py
arr.dtype
# dtype('int64')
```

# Numpy Operations

Numpy Indexing & Selection

Numpy Exercise
