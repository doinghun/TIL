(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{132:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||f[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(132)),i=["components"],c={slug:"js-set-vs-map",title:"Set vs Map"},s={unversionedId:"frontend/2-javascript/js-set-vs-map",id:"frontend/2-javascript/js-set-vs-map",isDocsHomePage:!1,title:"Set vs Map",description:"Set vs Map",source:"@site/docs/frontend/2-javascript/js-set-vs-map.md",slug:"/frontend/2-javascript/js-set-vs-map",permalink:"/TIL/docs/frontend/2-javascript/js-set-vs-map",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/2-javascript/js-set-vs-map.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"Regex",permalink:"/TIL/docs/frontend/2-javascript/js-regex"},next:{title:"this in Javascript",permalink:"/TIL/docs/frontend/2-javascript/js-this"}},p=[],u={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Set vs Map"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/24085708/javascript-map-object-vs-set-object"},"Javascript Map Object vs Set Object")),Object(o.b)("li",{parentName:"ul"},"Set is a collection of unique values"),Object(o.b)("li",{parentName:"ul"},"Map object holds key-value pairs and remembers the original insertion order of the keys.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Map is mainly used for fast searching and looking up data. (set, get, has)")))))}l.isMDXComponent=!0}}]);