(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(b,l(l({ref:t},p),{},{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(132)),o=["components"],l={slug:"js-map-filter-reduce",title:"Map, Filter & Reduce in JS"},c={unversionedId:"frontend/2-javascript/js-map-filter-reduce",id:"frontend/2-javascript/js-map-filter-reduce",isDocsHomePage:!1,title:"Map, Filter & Reduce in JS",description:"https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d",source:"@site/docs/frontend/2-javascript/js-map-filter-reduce.md",slug:"/frontend/2-javascript/js-map-filter-reduce",permalink:"/TIL/docs/frontend/2-javascript/js-map-filter-reduce",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/2-javascript/js-map-filter-reduce.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"Making CLI app with Inquirer.js",permalink:"/TIL/docs/frontend/2-javascript/js-making-cli-app-with-inquirerJS"},next:{title:"JS Memory Model",permalink:"/TIL/docs/frontend/2-javascript/js-memory-model"}},p=[{value:".map()",id:"map",children:[]},{value:".filter()",id:"filter",children:[]},{value:".reduce()",id:"reduce",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d"},"https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d")),Object(i.b)("p",null,"Since working as a FrontEnd Developer, I have been using Map, Filter & Reduce a lot more than when I was building portfolio and solve LC problems."),Object(i.b)("p",null,"This piece is a summary of my knowledge on JS array non-mutating methods - ",Object(i.b)("inlineCode",{parentName:"p"},".map()"),",",Object(i.b)("inlineCode",{parentName:"p"},".filter"),",",Object(i.b)("inlineCode",{parentName:"p"},".reduce()")),Object(i.b)("h2",{id:"map"},".map()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Used to "map" through array and outputs new array (same length)'),Object(i.b)("li",{parentName:"ul"},"Replaces ",Object(i.b)("inlineCode",{parentName:"li"},"forEach()"),", ",Object(i.b)("inlineCode",{parentName:"li"},"for(...of)")," or ",Object(i.b)("inlineCode",{parentName:"li"},"for()")),Object(i.b)("li",{parentName:"ul"},"Does the same job of going through array, element by element but it outputs ",Object(i.b)("strong",{parentName:"li"},"new")," array with ",Object(i.b)("strong",{parentName:"li"},"new")," elements that has gone through a function defined."),Object(i.b)("li",{parentName:"ul"},"Resulting array always outputs same length as the original array")),Object(i.b)("p",null,"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// Using forEach\nvar officersIds = [];\nofficers.forEach(function (officer) {\n  officersIds.push(officer.id);\n});\n\n// Using map\nconst officersIds = officers.map((officer) => officer.id); //ES6 arrow fxn\n")),Object(i.b)("h2",{id:"filter"},".filter()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Used to "filter" array and outputs new array (<= original array length) passing the test')),Object(i.b)("p",null,"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'//Data\nvar pilots = [\n  {\n    id: 2,\n    name: "Wedge Antilles",\n    faction: "Rebels",\n  },\n  {\n    id: 8,\n    name: "Ciena Ree",\n    faction: "Empire",\n  },\n];\n\nconst rebels = pilots.filter((pilot) => pilot.faction === "Rebels");\nconst empire = pilots.filter((pilot) => pilot.faction === "Empire");\n')),Object(i.b)("h2",{id:"reduce"},".reduce()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Works like map but reduce passes the result of the callback from one array element to the other")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'//Data\nvar pilots = [\n  {\n    id: 10,\n    name: "Poe Dameron",\n    years: 14,\n  },\n  {\n    id: 2,\n    name: "Temmin \'Snap\' Wexley",\n    years: 30,\n  },\n  {\n    id: 41,\n    name: "Tallissan Lintra",\n    years: 16,\n  },\n  {\n    id: 99,\n    name: "Ello Asty",\n    years: 22,\n  },\n];\n\nvar totalYears = pilots.reduce(function (accumulator, pilot) {\n  return accumulator + pilot.years;\n}, 0);\n// 0 is initial value\n\nconst totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);\n')),Object(i.b)("p",null,"Reduce can also be used to compare"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"var mostExpPilot = pilots.reduce(function (oldest, pilot) {\n  return (oldest.years || 0) > pilot.years ? oldest : pilot;\n}, {});\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"accumulator now named ",Object(i.b)("inlineCode",{parentName:"li"},"oldest")),Object(i.b)("li",{parentName:"ul"},"callback compares the accumulator to each pilot"),Object(i.b)("li",{parentName:"ul"},"If a pilot has more years of experience than ",Object(i.b)("inlineCode",{parentName:"li"},"oldest"),", then that pilot becomes the new ",Object(i.b)("inlineCode",{parentName:"li"},"oldest")," so that\u2019s the one returned.")))}u.isMDXComponent=!0}}]);