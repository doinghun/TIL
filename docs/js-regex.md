---
id: js-regex
title: Regex
---

## Understanding Regex

### Test Method

`.test()` taks the regex, applies to string & return `true` or `false`

```javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
myRegex.test(myString); // true
```

### Extract Matches

```javascript
let extractStr = "Extract the word 'coding' from this.";
let codingRegex = /coding/;
extractStr.match(codingRegex); // ['coding']
```

#### Match Literal Strings with multiple possibilities

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/;
petRegex.test(petString); // true
```

#### Case-insensitive

```javascript
let myString = "Hello, World!";
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
let myRegex = /[a-z0-9]/gi;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

#### Negated Character Sets

`[^]` used like NOT

```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
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
soccerWord.match(goRegex)["gooooooooo"];
```

#### Lazy Matching

By default, the longest possible part of a string fitting the regex pattern is returned (_greedy match_).
Use `*` finds the smallest possible part of the string.

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1*?>/;
text.match(myRegex); //[ '<h1>' ]
```

#### Match Beginning String Patterns

`^` without character set (eg. `[a-z]`) used to search for patterns at the beginning og strings

```javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
calRegex.test(rickyAndCal); // true
```

#### Match Ending String Patterns

```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
lastRegex.test(caboose); // true
```

#### Shortcuts

- All Letters & Numbers`/\w/` === `/[A-Za-z0-9_]/`
- All Except Letters & Numbers: `/\W/` === `/[^A-Za-z0-9_]/`
- All Numbers: `/\d/` === `/[0-9]/`
- All Non-Numbers: `/[^0-9]/` === `/\D/`

#### Application - Restric Possible Usernames

Conditions:

1. Only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. There can be zero or more of them at the end.

3. Letters can be lowercase and uppercase.

4. Have to be at least two characters long. A two-character username can only use alphabet letters as characters.

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
userCheck.test(username); // true
```

#### Match Whitespace

```javascript
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

#### Match Non-Whitespace Characters

```javascript
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

#### Specify Upper and Lower Number of Matches

```javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

#### Specify Only the Lower Number of Matches

```javascript
let A4 = "haaaah";
let A2 = "haah";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

#### Specify Exact Number of Matches

```javascript
let A4 = "haaaah";
let A3 = "haaah";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
```

#### Check for All or None

```javascript
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

#### Positive and Negative Lookahead

- A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
- A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.

```javascript
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

#### Check For Mixed Grouping of Characters

```javascript
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
```

#### Use Capture Groups to Search and Replace

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
str.replace(fixRegex, replaceText);
// "three two one"
```

### Cheatsheet

https://ihateregex.io/cheatsheet
