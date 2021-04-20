---
slug: "js-this"
title: this in Javascript
---

## What is lexical scope

lexical scope (also called static scope), in C-like syntax:

```c
void fun() {
    int x = 5;

    void fun2() {
        printf("%d", x);
    }
}
```

dynamic scope in C-like syntax:

```c
void fun() {
    printf("%d", x);
}

void dummy1() {
    int x = 5;
    fun();
}

void dummy2() {
    int x = 10;
    fun();
}
```

Here fun can either access x in dummy1 or dummy2, or any x in any function that call fun with x declared in it.

```c
dummy1(); // print 5
dummy2(); // print 10.
```

The first one is called static because it can be deduced at compile-time, and the second is called dynamic because the outer scope is dynamic and depends on the chain call of the functions.

---

## _References_:
