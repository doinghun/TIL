(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),a=(n(0),n(132)),i=["components"],o={slug:"react-in-ts",title:"React in TypeScript"},s={unversionedId:"frontend/4-react/react-in-ts",id:"frontend/4-react/react-in-ts",isDocsHomePage:!1,title:"React in TypeScript",description:"Why use React with TypeScript?",source:"@site/docs/frontend/4-react/react-in-ts.md",slug:"/frontend/4-react/react-in-ts",permalink:"/TIL/docs/frontend/4-react/react-in-ts",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/4-react/react-in-ts.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"Introduction to React Hook",permalink:"/TIL/docs/frontend/4-react/react-hook-intro"},next:{title:"React Lifecycle",permalink:"/TIL/docs/frontend/4-react/react-lifecycle"}},p=[{value:"Why use React with TypeScript?",id:"why-use-react-with-typescript",children:[{value:"Getting Started",id:"getting-started",children:[]},{value:".ts vs .tsx",id:"ts-vs-tsx",children:[]},{value:"Typical Class Components in React + TS",id:"typical-class-components-in-react--ts",children:[]}]}],l={rightToc:p};function u(e){var t=e.components,n=Object(c.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"why-use-react-with-typescript"},"Why use React with TypeScript?"),Object(a.b)("p",null,"Pros"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Much easier to avoid extremely common typos, like incorrect action types"),Object(a.b)("li",{parentName:"ul"},"Gives developers better understanding of the type of data flowing around"),Object(a.b)("li",{parentName:"ul"},"Much easier to refactor just about anything")),Object(a.b)("p",null,"Cons"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Not the best type definition files (especially around redux)"),Object(a.b)("li",{parentName:"ul"},"Tons of generics flying around"),Object(a.b)("li",{parentName:"ul"},"Tons of imports & more complicated"),Object(a.b)("li",{parentName:"ul"},"Redux is inherently functional in nature -> Tough integration with TS classes")),Object(a.b)("h3",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npx create-react-app <FILE_NAME> --typescript")),Object(a.b)("h3",{id:"ts-vs-tsx"},".ts vs .tsx"),Object(a.b)("p",null,"TypeScript has Filetype of ",Object(a.b)("inlineCode",{parentName:"p"},".ts")," and ",Object(a.b)("inlineCode",{parentName:"p"},".tsx"),".\n",Object(a.b)("inlineCode",{parentName:"p"},".tsx")," contains JSX elements while ",Object(a.b)("inlineCode",{parentName:"p"},".ts")," contains more of logic etc."),Object(a.b)("h3",{id:"typical-class-components-in-react--ts"},"Typical Class Components in React + TS"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\n\ninterface AppProps {}\n\ninterface AppState {\n  counter: number;\n}\n\nclass App extends React.Component<AppProps, AppState> {\n  state = { counter: 0 };\n\n  onIncrement = (): void => {\n    this.setState({ counter: this.state.counter + 1 });\n  };\n\n  onDecrement = (): void => {\n    this.setState({ counter: this.state.counter - 1 });\n  };\n\n  renter() {\n    return (\n      <div>\n        <button onClick={this.onIncrement}>Increment</button>\n        <button onClick={this.onDecrement}>Decrement</button>\n        {this.state.counter}\n      </div>\n    );\n  }\n}\n')))}u.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?c.a.createElement(f,o(o({ref:t},p),{},{components:n})):c.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);