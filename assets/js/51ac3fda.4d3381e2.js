"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3055],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,u=p["".concat(s,".").concat(h)]||p[h]||g[h]||a;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(8168),r=(n(6540),n(5680));const a={id:"kzt-jmgnjs",title:"Drill down",sidebar_position:50},o="Drill down",l={unversionedId:"tutorials/70 analysis/kzt-jmgnjs",id:"tutorials/70 analysis/kzt-jmgnjs",title:"Drill down",description:"Data drilling can be understood as adding levels of dimensionality, so that data can be observed from coarse to fine granularity. For example, when analyzing product sales, data can be drilled down from product categories to specific products along the product dimension.",source:"@site/docs/tutorials/70 analysis/50_\u6570\u636e\u4e0b\u94bb.md",sourceDirName:"tutorials/70 analysis",slug:"/tutorials/70 analysis/kzt-jmgnjs",permalink:"/tutorials/70 analysis/kzt-jmgnjs",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/70 analysis/50_\u6570\u636e\u4e0b\u94bb.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"kzt-jmgnjs",title:"Drill down",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Tooltips",permalink:"/tutorials/70 analysis/analysis-tooltips"},next:{title:"Drill through",permalink:"/tutorials/70 analysis/analysis-Drill-through"}},s={},c=[{value:"Creating Hierarchies in Analytical Models",id:"creating-hierarchies-in-analytical-models",level:2},{value:"Component Drill-down Behavior",id:"component-drill-down-behavior",level:2},{value:"Using Fields in Hierarchies",id:"using-fields-in-hierarchies",level:3},{value:"Preview Page",id:"preview-page",level:3}],d={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"drill-down"},"Drill down"),(0,r.yg)("p",null,"Data drilling can be understood as adding levels of dimensionality, so that data can be observed from coarse to fine granularity. For example, when analyzing product sales, data can be drilled down from product categories to specific products along the product dimension."),(0,r.yg)("h2",{id:"creating-hierarchies-in-analytical-models"},"Creating Hierarchies in Analytical Models"),(0,r.yg)("p",null,"Open the model editing interface."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677400661992",src:n(6700).A,width:"1831",height:"868"})),(0,r.yg)("p",null,'In the "Analytical Model" panel, right-click on a dimension field and select the "New Hierarchy" button from the pop-up menu.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677400737020",src:n(1082).A,width:"1831",height:"864"})),(0,r.yg)("p",null,'A "hierarchy" is created in the dimension, and the attribute field selected by right-clicking is automatically added to this "hierarchy."'),(0,r.yg)("p",null,'Through the "Properties" panel on the right, you can modify the name of the "hierarchy" or hide the "hierarchy".'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677400828510",src:n(9651).A,width:"1842",height:"871"})),(0,r.yg)("p",null,"Drag other fields into this hierarchy and adjust their positions by dragging and dropping."),(0,r.yg)("p",null,"Hierarchies are arranged from top to bottom, from higher level to lower level, with the lowest level being the most detailed."),(0,r.yg)("h2",{id:"component-drill-down-behavior"},"Component Drill-down Behavior"),(0,r.yg)("h3",{id:"using-fields-in-hierarchies"},"Using Fields in Hierarchies"),(0,r.yg)("p",null,"When the component data uses fields in a hierarchy, no settings are required, and the component can drill down."),(0,r.yg)("p",null,"Take the column chart as an example and set the component's drill-down behavior."),(0,r.yg)("p",null,'For the "axis" field of a column chart, a higher-level field in the hierarchy is usually selected.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677401056266",src:n(8007).A,width:"1839",height:"837"})),(0,r.yg)("p",null,'In the example, the "Product Line" hierarchy has two levels, "Product Line" and "Product."'),(0,r.yg)("h3",{id:"preview-page"},"Preview Page"),(0,r.yg)("p",null,'Click the "Drill-Down Mode" button on the component toolbar.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677402081753",src:n(1325).A,width:"1833",height:"642"})),(0,r.yg)("p",null,"Click on a column to drill down."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677402128961",src:n(8226).A,width:"1832",height:"669"})),(0,r.yg)("p",null,'Click the "Reset Drilling" button in the upper-right corner of the component menu to return the component to the data before drilling down.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"1677402023419",src:n(2332).A,width:"1837",height:"680"})))}g.isMDXComponent=!0},6700:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677400661992-56826e613f399bab0ccdc9e6131610f9.png"},1082:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677400737020-7d4cb8ac5f548dc51fb195d944cd635c.png"},9651:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677400828510-e2c3feb8009a6d71f455f5b185e9c745.png"},8007:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677401056266-8dbdeb002b7b13b7a544bc4f992cd56c.png"},2332:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677402023419-04cb3a17cf73116891da816d47cdabb2.png"},1325:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677402081753-4ac8b5bdaca4d646fe03188f71617614.png"},8226:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1677402128961-ab0e0f541a72c4a1359ebd90baa2a5f0.png"}}]);