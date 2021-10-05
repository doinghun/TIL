(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return d})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(132)),c=["components"],i={slug:"devops-docker-command-101",title:"Docker Command 101"},p={unversionedId:"devops/1-infra/devops-docker-command-101",id:"devops/1-infra/devops-docker-command-101",isDocsHomePage:!1,title:"Docker Command 101",description:"Docker commands for Beginners 101",source:"@site/docs/devops/1-infra/devops-docker-command-101.md",slug:"/devops/1-infra/devops-docker-command-101",permalink:"/TIL/docs/devops/1-infra/devops-docker-command-101",editUrl:"https://github.com/doinghun/TIL/edit/master/website/docs/devops/1-infra/devops-docker-command-101.md",version:"current",lastUpdatedAt:1632925168,sidebar:"devops",previous:{title:"Container Orchestration Techniques",permalink:"/TIL/docs/devops/1-infra/devops-container-orchestration"},next:{title:"Using Docker Compose",permalink:"/TIL/docs/devops/1-infra/devops-docker-compose"}},d=[{value:"Starting new container",id:"starting-new-container",children:[]},{value:"Starting stopped container",id:"starting-stopped-container",children:[]},{value:"Stop running container",id:"stop-running-container",children:[]}],s={rightToc:d};function l(e){var n=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"docker-commands-for-beginners-101"},"Docker commands for Beginners 101"),Object(a.b)("p",null,"See all running & stopped containers"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker ps -a\n")),Object(a.b)("h2",{id:"starting-new-container"},"Starting new container"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker run\n")),Object(a.b)("p",null,"a combination of create & start"),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name pg -p 5432:5432 -d postgres\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"creates container"),Object(a.b)("li",{parentName:"ul"},"named 'pg'"),Object(a.b)("li",{parentName:"ul"},"on port 5432"),Object(a.b)("li",{parentName:"ul"},"using postgres"),Object(a.b)("li",{parentName:"ul"},"in ",Object(a.b)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/docker-detached-mode-explained/"},"detached mode"))),Object(a.b)("h2",{id:"starting-stopped-container"},"Starting stopped container"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker start (container_name)\n")),Object(a.b)("h2",{id:"stop-running-container"},"Stop running container"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker stop (container_name)\n")))}l.isMDXComponent=!0},132:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=t,b=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return r?o.a.createElement(b,i(i({ref:n},d),{},{components:r})):o.a.createElement(b,i({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);