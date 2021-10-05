(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(h,i(i({ref:t},p),{},{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(132)),o=["components"],i={slug:"python-bootcamp",title:"Python Bootcamp"},s={unversionedId:"data/1-python/python-bootcamp",id:"data/1-python/python-bootcamp",isDocsHomePage:!1,title:"Python Bootcamp",description:"Python Crash Course Exercises",source:"@site/docs/data/1-python/python-bootcamp.md",slug:"/data/1-python/python-bootcamp",permalink:"/TIL/docs/data/1-python/python-bootcamp",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/data/1-python/python-bootcamp.md",version:"current",lastUpdatedAt:1632925168,sidebar:"data",previous:{title:"What is Anaconda",permalink:"/TIL/docs/data/1-python/python-anaconda"},next:{title:"Intro to Matplotlib",permalink:"/TIL/docs/data/1-python/python-matplotlib"}},p=[{value:"Exercises",id:"exercises",children:[{value:"Task #1",id:"task-1",children:[]},{value:"Task #2",id:"task-2",children:[]},{value:"Task #3",id:"task-3",children:[]},{value:"Task #4",id:"task-4",children:[]},{value:"Task #5",id:"task-5",children:[]},{value:"Task #6",id:"task-6",children:[]},{value:"Task #7",id:"task-7",children:[]},{value:"Task #8",id:"task-8",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"python-crash-course-exercises"},"Python Crash Course Exercises"),Object(c.b)("p",null,"Source: ",Object(c.b)("a",{parentName:"p",href:"https://www.udemy.com/complete-python-bootcamp/"},"Complete Python Bootcamp")),Object(c.b)("h2",{id:"exercises"},"Exercises"),Object(c.b)("p",null,"Answer the questions or complete the tasks outlined in bold below, use the specific method described if applicable."),Object(c.b)("h3",{id:"task-1"},"Task #1"),Object(c.b)("p",null,"Given price = 300 , use python to figure out the square root of the price."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"price = 300\n\nimport math\nmath.sqrt(price)\n\nprice ** 0.5\n")),Object(c.b)("h3",{id:"task-2"},"Task #2"),Object(c.b)("p",null,"Given the string:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'stock_index = "SP500"\n')),Object(c.b)("p",null,"Grab '500' from the string using indexing."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},'stock_index = "SP500"\nstock_index[2:5]\n')),Object(c.b)("h3",{id:"task-3"},"Task #3"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Given the variables:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'stock_index = "SP500"\nprice = 300\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Use .format() to print the following string:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"The SP500 is at 300 today.\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},'stock_index = "SP500"\nprice = 300\n\n"The {} is at {} today".format(stock_index,price)\n')),Object(c.b)("h3",{id:"task-4"},"Task #4"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Given the variable of a nested dictionary with nested lists:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"stock_info = {'sp500':{'today':300,'yesterday': 250}, 'info':['Time',[24,7,365]]}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Use indexing and key calls to grab the following items:")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Yesterday's SP500 price (250)"),Object(c.b)("li",{parentName:"ul"},"The number 365 nested inside a list nested inside the 'info' key.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"stock_info = {'sp500':{'today':300,'yesterday': 250}, 'info':['Time',[24,7,365]]}\n\nstock_info['sp500']['yesterday']\n\nstock_info['info'][1][2]\n")),Object(c.b)("h3",{id:"task-5"},"Task #5"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Given strings with this form where the last source value is always separated by two dashes -- ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'"PRICE:345.324:SOURCE--QUANDL"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},'Create a function called source_finder() that returns the source. For example, the above string passed into the function would return "QUANDL"')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"def source_finde(str) :\n    str.split('--')[-1]\n\nsource_finder(\"PRICE:345.324:SOURCE--QUANDL\")\n")),Object(c.b)("h3",{id:"task-6"},"Task #6"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Create a function called price_finder that returns True if the word 'price' is in a string. Your function should work even if 'Price' is capitalized or next to punctuation ('price!') ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},'def price_finder (str):\n    return \'price\' in str.lower()\n\nprice_finder("What is the price?")\nTrue\n\nprice_finder("DUDE, WHAT IS PRICE!!!")\nTrue\n\nprice_finder("The price is 300")\nTrue\n')),Object(c.b)("h3",{id:"task-7"},"Task #7"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},' Create a function called count_price() that counts the number of times the word "price" occurs in a string. Account for capitalization and if the word price is next to punctuation. ')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"def count_price(s) :\n    count = 0\n\n    for word in s.lower().split():\n        if 'price' in word:\n            count = count + 1\n    return count\n\ns = 'Wow that is a nice price, very nice Price! I said price 3 times.'\n\ncount_price(s)\n// 3\n")),Object(c.b)("h3",{id:"task-8"},"Task #8"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Create a function called avg_price that takes in a list of stock price numbers and calculates the average (Sum of the numbers divided by the number of elements in the list). It should return a float. ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-py"},"def avg_price(arr) :\n    return sum(arr)/len(arr)\n\navg_price([3,4,5])\n// 4.0\n")))}b.isMDXComponent=!0}}]);