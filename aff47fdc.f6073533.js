(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(132)),c=["components"],i={slug:"react-hook-intro",title:"Introduction to React Hook"},u={unversionedId:"frontend/4-react/react-hook-intro",id:"frontend/4-react/react-hook-intro",isDocsHomePage:!1,title:"Introduction to React Hook",description:"Hooks are relatively new addition to React. They let you use state and other REact features without writing a class.",source:"@site/docs/frontend/4-react/react-hook-intro.md",slug:"/frontend/4-react/react-hook-intro",permalink:"/TIL/docs/frontend/4-react/react-hook-intro",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/4-react/react-hook-intro.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"Advanced React Hook (ft. useMemo & useCallback)",permalink:"/TIL/docs/frontend/4-react/react-hook-adv"},next:{title:"React in TypeScript",permalink:"/TIL/docs/frontend/4-react/react-in-ts"}},s=[{value:"useState",id:"usestate",children:[]},{value:"useEffect",id:"useeffect",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hooks are relatively new addition to React. They let you use state and other REact features without writing a class."),Object(a.b)("h2",{id:"usestate"},"useState"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react";\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Click Me</button>\n    </div>\n  );\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Only argument to ",Object(a.b)("inlineCode",{parentName:"li"},"useState")," is initial state."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"useState")," returns a pair: current state value (",Object(a.b)("inlineCode",{parentName:"li"},"count"),") & a function that lets you update it (",Object(a.b)("inlineCode",{parentName:"li"},"setCount"),")."),Object(a.b)("li",{parentName:"ul"},"State Hook can be used more than once in a single component.")),Object(a.b)("h2",{id:"useeffect"},"useEffect"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," replaces the functionality of class-based component's ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount")," & ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from "react";\n\nfunction Example() {\n  const [resources, setResources] = useState([]);\n\n  const fetchResource = async (resource) => {\n    // some API call function\n\n    setResources(response.data);\n  };\n\n  useEffect(() => {\n    fetchResource(resource);\n  }, [resource]);\n  // if the resource change then arrow function in useEffect is called, like prev.props !== props in class-based components\n  return <div>{resources.length}</div>;\n}\n')))}p.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);