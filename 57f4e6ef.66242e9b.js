(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||a;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(132)),i=["components"],c={slug:"js-oop-2",title:"OOP in JS [Part 2]"},p={unversionedId:"frontend/2-javascript/js-oop-2",id:"frontend/2-javascript/js-oop-2",isDocsHomePage:!1,title:"OOP in JS [Part 2]",description:"Prototype Inheritance",source:"@site/docs/frontend/2-javascript/js-oop-2.md",slug:"/frontend/2-javascript/js-oop-2",permalink:"/TIL/docs/frontend/2-javascript/js-oop-2",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/2-javascript/js-oop-2.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"OOP in JS [Part 1]",permalink:"/TIL/docs/frontend/2-javascript/js-oop-1"},next:{title:"Regex",permalink:"/TIL/docs/frontend/2-javascript/js-regex"}},s=[{value:"Prototype Inheritance",id:"prototype-inheritance",children:[]},{value:"Use a Mixin to Add Common Behavior Between Unrelated Objects",id:"use-a-mixin-to-add-common-behavior-between-unrelated-objects",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"prototype-inheritance"},"Prototype Inheritance"),Object(a.b)("p",null,"Just like people inherit genes from their parents, an object inherits its ",Object(a.b)("inlineCode",{parentName:"p"},"prototype")," directly from the constructor function that created it. For example, here the ",Object(a.b)("inlineCode",{parentName:"p"},"Dog")," constructor creates the ",Object(a.b)("inlineCode",{parentName:"p"},"maletese")," object."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'function Dog(name) {\n  this.name = name;\n}\n\nlet maltese = new Dog("Koong");\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"maltese")," inherits its prototype from the ",Object(a.b)("inlineCode",{parentName:"p"},"Dog")," constructor function. You can show this relationship with the ",Object(a.b)("inlineCode",{parentName:"p"},"isPrototypeOf")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"Dog.prototype.isPrototypeOf(maltese);\n// true\n")),Object(a.b)("h4",{id:"prototype-chain"},"Prototype Chain"),Object(a.b)("p",null,"All objects in JavaScript (with a few exceptions) have a prototype. Also, an object\u2019s prototype itself is an object. Because a prototype is an object, a prototype can have its own prototype!"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"Object.prototype.isPrototypeOf(Dog.prototype); // true\n")),Object(a.b)("p",null,"For example, The ",Object(a.b)("inlineCode",{parentName:"p"},"hasOwnProperty")," method is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"Object.prototype"),", which can be accessed by ",Object(a.b)("inlineCode",{parentName:"p"},"Dog.prototype"),", which can then be accessed by ",Object(a.b)("inlineCode",{parentName:"p"},"maletese"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'maltese.hasOwnProperty("name"); // => true\n\n// Object is a supertype for all objects\n// Object [supertype] - Dog [subtype]\n// Dog [supertype] - maltese [subtype]\n')),Object(a.b)("h4",{id:"inheritance"},"Inheritance"),Object(a.b)("p",null,"If a method is repeated in two different objects, Edit the code in the spirit of DRY by moving the method to a supertype."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'function Cat(name) {\n  this.name = name;\n}\n\nCat.prototype = {\n  constructor: Cat,\n  eat: function () {\n    console.log("nom nom nom");\n  },\n};\n\nfunction Bear(name) {\n  this.name = name;\n}\n\nBear.prototype = {\n  constructor: Bear,\n  eat: function () {\n    console.log("nom nom nom");\n  },\n};\n\nfunction Animal() {}\nAnimal.prototype.eat = function () {\n  console.log("nom nom nom");\n};\nlet animal = Object.create(Animal.prototype);\n\nanimal.eat(); // prints "nom nom nom"\nanimal instanceof Animal; // => true\n')),Object(a.b)("h4",{id:"set-the-childs-prototype-to-an-instance-of-the-parent"},"Set the Child's Prototype to an Instance of the Parent"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Object.create(obj)")," creates a new object, and sets ",Object(a.b)("inlineCode",{parentName:"p"},"obj")," as the new object's ",Object(a.b)("inlineCode",{parentName:"p"},"prototype"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'// ChildObject.prototype = Object.create(ParentObject.prototype);\n\nfunction Dog() {}\n\nDog.prototype = Object.create(Animal.prototype);\n\nlet maltese = new Dog();\nmaltese.eat(); // Should print "nom nom nom"\n')),Object(a.b)("p",null,"Set the prototype of the subtype ( ",Object(a.b)("inlineCode",{parentName:"p"},"Dog")," ) to be an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"Animal"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"maltese")," inherits all of ",Object(a.b)("inlineCode",{parentName:"p"},"Animal"),"'s properties, including the eat method."),Object(a.b)("h4",{id:"reset-an-inherited-constructor-property"},"Reset an Inherited Constructor property"),Object(a.b)("p",null,"When an object inherits its prototype from another object, it also inherits the supertype's constructor property."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"maltese.constructor; // function Animal(){...}\n\n/* Manually set Dog's constructor property to the Dog object */\nDog.prototype.constructor = Dog;\nmaltese.constuctor; // function Dog(){...}\n")),Object(a.b)("h4",{id:"adding-methods-after-inheritance"},"Adding Methods After Inheritance"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'Dog.prototype.bark = function () {\n  console.log("Woof!");\n};\nmaltese.eat(); // Inherited Method\nmaltese.bark(); // Method added after Inheritance\n')),Object(a.b)("h4",{id:"override-inherited-methods"},"Override Inherited Methods"),Object(a.b)("p",null,"If you have an instance ",Object(a.b)("inlineCode",{parentName:"p"},"let maltese = new Dog();")," and you call ",Object(a.b)("inlineCode",{parentName:"p"},"maltese.eat()"),", this is how JavaScript looks for the method on maltese\u2019s prototype chain:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"maltese => Is eat() defined here? No.\nDog => Is eat() defined here? => Yes. Execute it and stop searching.\nAnimal => eat() is also defined, but JavaScript stopped searching before reaching this level.\nObject => JavaScript stopped searching before reaching this level.\n")),Object(a.b)("h3",{id:"use-a-mixin-to-add-common-behavior-between-unrelated-objects"},"Use a Mixin to Add Common Behavior Between Unrelated Objects"),Object(a.b)("p",null,"A mixin allows other objects to use a collection of functions."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'let bird = {\n  name: "Donald",\n  numLegs: 2,\n};\n\nlet boat = {\n  name: "Warrior",\n  type: "race-boat",\n};\n\n// Add your code below this line\n\nlet glideMixin = function (obj) {\n  obj.glide = function () {\n    console.log("Glidee");\n  };\n};\n\nglideMixin(bird);\nglideMixin(boat);\n')))}b.isMDXComponent=!0}}]);