"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[119],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5599:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"analysis-component-Filtering",title:"\u7ec4\u4ef6\u7ea7\u7b5b\u9009",sidebar_position:20},i="\u7ec4\u4ef6\u7ea7\u7b5b\u9009",o={unversionedId:"70 analysis/analysis-component-Filtering",id:"70 analysis/analysis-component-Filtering",title:"\u7ec4\u4ef6\u7ea7\u7b5b\u9009",description:"Datafor \u63d0\u4f9b\u4e86\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u4e3a\u6bcf\u4e2a\u53ef\u89c6\u5316\u7ec4\u4ef6\u8bbe\u7f6e\u7279\u5b9a\u7684\u7b5b\u9009\u6761\u4ef6\u3002",source:"@site/docs/70 analysis/20_\u7ec4\u4ef6\u7ea7\u7b5b\u9009.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-component-Filtering",permalink:"/docs/70 analysis/analysis-component-Filtering",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/70 analysis/20_\u7ec4\u4ef6\u7ea7\u7b5b\u9009.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"analysis-component-Filtering",title:"\u7ec4\u4ef6\u7ea7\u7b5b\u9009",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u7b5b\u9009\u5668\u7ec4\u4ef6",permalink:"/docs/70 analysis/analysis-filter"},next:{title:"\u4ea4\u53c9\u7b5b\u9009",permalink:"/docs/70 analysis/analysis-cross-filtering"}},p={},s=[{value:"\u4ec0\u4e48\u662f\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f",id:"\u4ec0\u4e48\u662f\u7ec4\u4ef6\u7ea7\u7b5b\u9009",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f",id:"\u5982\u4f55\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],m={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7ec4\u4ef6\u7ea7\u7b5b\u9009"},"\u7ec4\u4ef6\u7ea7\u7b5b\u9009"),(0,r.kt)("p",null,"Datafor \u63d0\u4f9b\u4e86\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u4e3a\u6bcf\u4e2a\u53ef\u89c6\u5316\u7ec4\u4ef6\u8bbe\u7f6e\u7279\u5b9a\u7684\u7b5b\u9009\u6761\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u7ec4\u4ef6\u7ea7\u7b5b\u9009"},"\u4ec0\u4e48\u662f\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u662f\u5e94\u7528\u4e8e Datafor \u4e2d\u5355\u4e2a\u53ef\u89c6\u5316\u7ec4\u4ef6\u7684\u7b5b\u9009\u5668\u3002\u5b83\u5141\u8bb8\u7528\u6237\u5bf9\u6bcf\u4e2a\u7ec4\u4ef6\u8bbe\u7f6e\u72ec\u7279\u7684\u7b5b\u9009\u6761\u4ef6\uff0c\u4ec5\u5f71\u54cd\u6240\u9009\u7684\u53ef\u89c6\u5316\u7ec4\u4ef6\uff0c\u800c\u4e0d\u4f1a\u5bf9\u9875\u9762\u4e0a\u7684\u5176\u4ed6\u7ec4\u4ef6\u4ea7\u751f\u5f71\u54cd\u3002"),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f"),(0,r.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4e3b\u8981\u4f18\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7cbe\u7ec6\u63a7\u5236"),"\uff1a\u4e3a\u6bcf\u4e2a\u53ef\u89c6\u5316\u7ec4\u4ef6\u8bbe\u7f6e\u4e0d\u540c\u7684\u7b5b\u9009\u6761\u4ef6\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u7684\u5206\u6790\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u63d0\u9ad8\u6570\u636e\u5c55\u793a\u7684\u51c6\u786e\u6027"),"\uff1a\u786e\u4fdd\u6bcf\u4e2a\u7ec4\u4ef6\u663e\u793a\u7684\u6570\u636e\u90fd\u7b26\u5408\u5176\u72ec\u7279\u7684\u7b5b\u9009\u6761\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u907f\u514d\u6570\u636e\u6df7\u6dc6"),"\uff1a\u5728\u540c\u4e00\u9875\u9762\u4e0a\u5c55\u793a\u4e0d\u540c\u7ef4\u5ea6\u6216\u4e0d\u540c\u6570\u636e\u96c6\u7684\u6570\u636e\u65f6\uff0c\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u6709\u52a9\u4e8e\u907f\u514d\u6570\u636e\u6df7\u6dc6\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009"},"\u5982\u4f55\u4f7f\u7528\u7ec4\u4ef6\u7ea7\u7b5b\u9009\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\uff1a\u9009\u62e9\u53ef\u89c6\u5316\u7ec4\u4ef6\uff0c\u5e76\u5728\u6570\u636e\u9762\u677f\u4e2d\u627e\u5230 \u201c\u8fc7\u6ee4\u201d \u533a\u57df")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/docs/img/datafor/analysis/1722413657443.png",width:"100%"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\uff1a\u6dfb\u52a0\u7b5b\u9009\u5b57\u6bb5")),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u6dfb\u52a0\u201d\u6309\u94ae\uff0c\u4ece\u5206\u6790\u6a21\u578b\u4e2d\u9009\u62e9\u60a8\u60f3\u8981\u4f5c\u4e3a\u7b5b\u9009\u6761\u4ef6\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/docs/img/datafor/analysis/1722413850794.png",width:"100%"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\uff1a\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6")),(0,r.kt)("p",null,"\u9009\u62e9\u6570\u636e\u5b57\u6bb5\u540e\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u9009\u62e9\u4e86\u4e00\u4e2a\u65e5\u671f\u5b57\u6bb5\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u65e5\u671f\u8303\u56f4\u7b5b\u9009\uff1b"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/docs/img/datafor/analysis/1722414323848.png",width:"100%"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7c7b\u578b\u5b57\u6bb5\u7684\u8fc7\u6ee4\u65b9\u6cd5\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u65b9\u6cd5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u672c","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u62ec\u6216\u6392\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8\u7ea7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u3001\u4e0d\u5305\u542b\u3001\u524d\u7f6e\u3001\u540e\u7f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u62ec\u6216\u6392\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5bf9\u65f6\u95f4\uff0c\u5305\u62ec\uff1a\u8fc7\u53bb\u3001\u5f53\u524d\u3001\u672a\u6765")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8\u7ea7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e4b\u524d(<=), \u7b49\u4e8e(=)\uff0c\u4e4b\u540e(>=)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e\u3001\u5c0f\u4e8e\u7b49\u4e8e\u3001\u7b49\u4e8e\u3001\u5927\u4e8e\u7b49\u4e8e\u3001\u5927\u4e8e\u3001\u5927\u4e8e\u4e14\u5c0f\u4e8e\u3001\u5927\u4e8e\u7b49\u4e8e\u4e14\u5c0f\u4e8e\u3001\u5927\u4e8e\u4e14\u5c0f\u4e8e\u7b49\u4e8e\u3001\u5927\u4e8e\u7b49\u4e8e\u4e14\u5c0f\u4e8e\u7b49\u4e8e\u3001\u975e\u7a7a\u6570\u636e\u3001\u7a7a\u6570\u636e")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4\uff1a\u5e94\u7528\u7b5b\u9009\u5668\u5e76\u67e5\u770b\u6548\u679c")),(0,r.kt)("p",null,"\u914d\u7f6e\u597d\u7b5b\u9009\u6761\u4ef6\u540e\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528"),"\u6309\u94ae\uff0c\u6570\u636e\u7b5b\u9009\u4f1a\u7acb\u5373\u5e94\u7528\u4e8e\u6240\u9009\u7684\u53ef\u89c6\u5316\u7ec4\u4ef6\u3002"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/docs/img/datafor/analysis/1722414353123.png",width:"100%"})),(0,r.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,r.kt)("p",null,"Datafor \u7684\u7ec4\u4ef6\u7ea7\u7b5b\u9009\u529f\u80fd\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5bf9\u5355\u4e2a\u53ef\u89c6\u5316\u7ec4\u4ef6\u7684\u7cbe\u7ec6\u6570\u636e\u63a7\u5236\u3002\u5b83\u4e0d\u4ec5\u63d0\u9ad8\u4e86\u6570\u636e\u7684\u53ef\u8bbf\u95ee\u6027\u548c\u4e92\u52a8\u6027\uff0c\u8fd8\u652f\u6301\u590d\u6742\u7684\u5206\u6790\u9700\u6c42\u548c\u4e2a\u6027\u5316\u7684\u5206\u6790\u4f53\u9a8c\u3002"))}u.isMDXComponent=!0}}]);