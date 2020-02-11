---
id: regex
title: Regex 
---

## Understanding Regex

### Test Method

`.test()` taks the regex, applies to string & return `true` or `false`

```javascript
let myString = 'Hello, World!';
let myRegex = /Hello/;
myRegex.test(myString); // true
```

### Extract Matches
```javascript
let extractStr = "Extract the word 'coding' from this."
let codingRegex = /coding/;
extractStr.match(codingRegex); // ['coding']
```

#### Match Literal Strings with multiple possibilities
```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/;
petRegex.test(petString); // true
```

#### Ignore case while matching
```javascript
let myString = 'Hello, World!';
let myRegex = /hello, world/i;
myRegex.test(myString); // true
```

#### Find more than the first match
```javascript
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); // [ "Repeat", "Repeat", "Repeat"]
```

#### Match Anything with Wildcard Period
```javascript
let testStr = "Let's have fun with regex!";
let unRegex = /.un/;
unRegex.test(testStr); //true
```
#### Match Single Character with Multiple Possibilities
```javascript
let bigStr = "big";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // ["big"]
bogStr.match(bgRegex); // null
```

#### Match Letters Range
```javascript
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

#### Match Numbers & Letters Range
```javascript
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

#### Negated Character Sets
`[^]` used like NOT
```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
quoteSample.match(myRegex); 
//[ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
```

#### Match Characters occuring 1 or more times
```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
difficultSpelling.match(myRegex); //['ss', 'ss']
```

#### Match Characters occuring 0 or more times
```javascript
let soccerWord = "goooooooooal!";
let goRegex = /go*/;
soccerWord.match(goRegex) ["gooooooooo"]
```

#### Lazy Matching
By default, the longest possible part of a string fitting the regex pattern is returned (*greedy match*).
Use `*` finds the smallest possible part of the string.
```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1*?>/;
let result = text.match(myRegex); //[ '<h1>' ]
```
Regex Search Engine: https://ihateregex.io/
