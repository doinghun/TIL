---
id: python-bootcamp
title: Python Bootcamp
---

# Python Crash Course Exercises 

Source: [Complete Python Bootcamp](https://www.udemy.com/complete-python-bootcamp/)

## Exercises

Answer the questions or complete the tasks outlined in bold below, use the specific method described if applicable.

### Task #1

Given price = 300 , use python to figure out the square root of the price.

```py
price = 300

import math
math.sqrt(price)

price ** 0.5
```

### Task #2

Given the string:

    stock_index = "SP500"
   
Grab '500' from the string using indexing.

```py
stock_index = "SP500"
stock_index[2:5]
```
### Task #3

**Given the variables:**

    stock_index = "SP500"
    price = 300

**Use .format() to print the following string:**

    The SP500 is at 300 today.

```py
stock_index = "SP500"
price = 300

"The {} is at {} today".format(stock_index,price)
```
### Task #4

**Given the variable of a nested dictionary with nested lists:**

    stock_info = {'sp500':{'today':300,'yesterday': 250}, 'info':['Time',[24,7,365]]}
    
**Use indexing and key calls to grab the following items:**

* Yesterday's SP500 price (250)
* The number 365 nested inside a list nested inside the 'info' key.

```py
stock_info = {'sp500':{'today':300,'yesterday': 250}, 'info':['Time',[24,7,365]]}

stock_info['sp500']['yesterday']

stock_info['info'][1][2]
```

### Task #5

** Given strings with this form where the last source value is always separated by two dashes -- **

    "PRICE:345.324:SOURCE--QUANDL"
    
**Create a function called source_finder() that returns the source. For example, the above string passed into the function would return "QUANDL"**
```
def source_finde(str) :
    str.split('--')[-1]

source_finder("PRICE:345.324:SOURCE--QUANDL")
```
### Task #6

** Create a function called price_finder that returns True if the word 'price' is in a string. Your function should work even if 'Price' is capitalized or next to punctuation ('price!')  **

```py
def price_finder (str):
    return 'price' in str.lower()

price_finder("What is the price?") 
True

price_finder("DUDE, WHAT IS PRICE!!!")
True

price_finder("The price is 300")
True
```
### Task #7

** Create a function called count_price() that counts the number of times the word "price" occurs in a string. Account for capitalization and if the word price is next to punctuation. **

```py
def count_price(s) :
    count = 0
    
    for word in s.lower().split():
        if 'price' in word:
            count = count + 1
    return count

s = 'Wow that is a nice price, very nice Price! I said price 3 times.'

count_price(s) 
// 3
```
### Task #8

**Create a function called avg_price that takes in a list of stock price numbers and calculates the average (Sum of the numbers divided by the number of elements in the list). It should return a float. **

```py
def avg_price(arr) :
    return sum(arr)/len(arr)

avg_price([3,4,5])
// 4.0
```