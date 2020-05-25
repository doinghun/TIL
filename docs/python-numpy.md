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
random samples from a uniform distribution
over ``[0, 1)``.

np.random.rand(2)

np.random.rand(5,5)

### randn

Return a sample (or samples) from the "standard normal" distribution. Unlike rand which is uniform:

np.random.randn(2)

np.random.randn(5,5)

### randint
Return random integers from `low` (inclusive) to `high` (exclusive).

np.random.randint(1,100)

np.random.randint(1,100,10)

## Array Attributes and Methods

Let's discuss some useful attributes and methods or an array:

arr = np.arange(25)
ranarr = np.random.randint(0,50,10)

arr

ranarr

## Reshape
Returns an array containing the same data with a new shape.

arr.reshape(5,5)

### max,min,argmax,argmin

These are useful methods for finding max or min values. Or to find their index locations using argmin or argmax

ranarr

ranarr.max()

ranarr.argmax()

ranarr.min()

ranarr.argmin()

## Shape

Shape is an attribute that arrays have (not a method):

# Vector
arr.shape

# Notice the two sets of brackets
arr.reshape(1,25)

arr.reshape(1,25).shape

arr.reshape(25,1)

arr.reshape(25,1).shape

### dtype

You can also grab the data type of the object in the array:

arr.dtype
Numpy Indexing & Selection

Numpy Operations

Numpy Exercise
