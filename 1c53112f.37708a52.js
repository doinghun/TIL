(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(132)),c=["components"],i={slug:"react-make-cytoscape",title:"Creating Cytoscape in React"},p={unversionedId:"frontend/4-react/react-make-cytoscape",id:"frontend/4-react/react-make-cytoscape",isDocsHomePage:!1,title:"Creating Cytoscape in React",description:"`js",source:"@site/docs/frontend/4-react/react-make-cytoscape.md",slug:"/frontend/4-react/react-make-cytoscape",permalink:"/TIL/docs/frontend/4-react/react-make-cytoscape",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/4-react/react-make-cytoscape.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"Lists and Keys in React",permalink:"/TIL/docs/frontend/4-react/react-lists-and-keys"},next:{title:"Creating Dropdown in React",permalink:"/TIL/docs/frontend/4-react/react-make-dropdown"}},l=[{value:"Layout",id:"layout",children:[]},{value:"Reference",id:"reference",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const elements = [\n  { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },\n  { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },\n  { data: { source: "one", target: "two", label: "Edge from Node1 to Node2" } },\n];\nconst layout = { name: "random" };\n\n<CytoscapeComponent\n  elements={elements}\n  style={{ width: "400px", height: "400px", background: "white" }}\n  layout={layout}\n  zoom={2}\n/>;\n')),Object(o.b)("h2",{id:"layout"},"Layout"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Cytoscape from "cytoscape";\nimport CytoscapeComponent from "react-cytoscapejs";\nimport COSEBilkent from "cytoscape-cose-bilkent";\nCytoscape.use(COSEBilkent);\n\nconst layout = {\n  name: "cose-bilkent",\n};\n')),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Motivation: ",Object(o.b)("a",{parentName:"li",href:"https://seomal.org"},"https://seomal.org")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/plotly/react-cytoscapejs"},"https://github.com/plotly/react-cytoscapejs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://velog.io/@takeknowledge/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5-cytoscape-%ED%99%9C%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-56k4in7315#%F0%9F%A7%B2-%ED%95%98%EC%9D%B4%ED%8D%BC-%EB%A7%81%ED%81%AC-%EC%97%B0%EA%B2%B0"},"https://velog.io/@takeknowledge/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5-cytoscape-%ED%99%9C%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-56k4in7315#%F0%9F%A7%B2-%ED%95%98%EC%9D%B4%ED%8D%BC-%EB%A7%81%ED%81%AC-%EC%97%B0%EA%B2%B0"))))}u.isMDXComponent=!0}}]);