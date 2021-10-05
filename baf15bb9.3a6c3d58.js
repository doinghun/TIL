(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(132)),c=["components"],s={slug:"css-stacking",title:"Stacking Elements in CSS"},a={unversionedId:"frontend/1-css/css-stacking",id:"frontend/1-css/css-stacking",isDocsHomePage:!1,title:"Stacking Elements in CSS",description:"Using the Position Property",source:"@site/docs/frontend/1-css/css-stacking.md",slug:"/frontend/1-css/css-stacking",permalink:"/TIL/docs/frontend/1-css/css-stacking",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/frontend/1-css/css-stacking.md",version:"current",lastUpdatedAt:1632925168,sidebar:"frontend",previous:{title:"How CSS Specificity Works",permalink:"/TIL/docs/frontend/1-css/css-specificity"},next:{title:"Learn CSS by Playing Game",permalink:"/TIL/docs/frontend/1-css/learn-css-by-playing-game"}},p=[{value:"Using the <code>Position</code> Property",id:"using-the-position-property",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-the-position-property"},"Using the ",Object(i.b)("inlineCode",{parentName:"h2"},"Position")," Property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},".parent {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n")),Object(i.b)("iframe",{src:"https://codepen.io/sdras/embed/xxbLjqd",width:"500",height:"400",title:"CSS Stacking, Absolute 1"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},".parent {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n")),Object(i.b)("iframe",{scrolling:"no",title:"CSS Stacking, Absolute 2",src:"https://codepen.io/mootda/embed/zYrJQBa",width:"500",height:"400",frameborder:"no"}))}u.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);