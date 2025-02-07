"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1283],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||g[p]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(8168),o=(n(6540),n(5680));const i={id:"sjfx-px",title:"Sorting",sidebar_position:70},s="Sorting",a={unversionedId:"tutorials/70 analysis/sjfx-px",id:"tutorials/70 analysis/sjfx-px",title:"Sorting",description:"Datafor provides the ability to set sorting fields on the analysis model and to set ascending or descending sorting on the fields in the report design components.",source:"@site/docs/tutorials/70 analysis/70_\u6392\u5e8f.md",sourceDirName:"tutorials/70 analysis",slug:"/tutorials/70 analysis/sjfx-px",permalink:"/documentation/tutorials/70 analysis/sjfx-px",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/70 analysis/70_\u6392\u5e8f.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{id:"sjfx-px",title:"Sorting",sidebar_position:70},sidebar:"docsSidebar",previous:{title:"Drill through",permalink:"/documentation/tutorials/70 analysis/analysis-Drill-through"},next:{title:"Cross-Model and Cross-Data Source",permalink:"/documentation/tutorials/70 analysis/sjfx-cross-models"}},l={},d=[{value:"Setting Sorting on the Analysis Model",id:"setting-sorting-on-the-analysis-model",level:2},{value:"Sorting during Design of Analytical Reports",id:"sorting-during-design-of-analytical-reports",level:2},{value:"Sorting Dimension Fields",id:"sorting-dimension-fields",level:3},{value:"Sorting Measures",id:"sorting-measures",level:3}],c={toc:d},u="wrapper";function g(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"sorting"},"Sorting"),(0,o.yg)("p",null,"Datafor provides the ability to set sorting fields on the analysis model and to set ascending or descending sorting on the fields in the report design components."),(0,o.yg)("h2",{id:"setting-sorting-on-the-analysis-model"},"Setting Sorting on the Analysis Model"),(0,o.yg)("p",null,'If a dimension field needs to be sorted based on the order of another field, you need to set the sorting field in the "advanced properties" of the dimension field when designing the model.'),(0,o.yg)("p",null,'For example: If you have an "ORDER_METHOD_SC" column, when it is added to a component, it will be sorted in alphabetical order. This is not what you need, you want it to be sorted in the order of "ORDER_METHOD_KEY".'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"1681910877933",src:n(9421).A,width:"1844",height:"873"})),(0,o.yg)("h2",{id:"sorting-during-design-of-analytical-reports"},"Sorting during Design of Analytical Reports"),(0,o.yg)("h3",{id:"sorting-dimension-fields"},"Sorting Dimension Fields"),(0,o.yg)("p",null,'The "axis" of a component can usually be sorted. Whether it\'s text, numbers, or dates, it can be sorted in the desired way.'),(0,o.yg)("p",null,"For some types of components, sorting is not available: tree maps, gauges, maps, etc."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"1681911083494",src:n(667).A,width:"1840",height:"851"})),(0,o.yg)("p",null,'To sort a dimension field, select the "Sort" menu from the field\'s menu and then choose either "Sort ascending" or "Sort descending" from the submenu.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"1681913087646",src:n(9585).A,width:"1840",height:"850"})),(0,o.yg)("h3",{id:"sorting-measures"},"Sorting Measures"),(0,o.yg)("p",null,'Measure values are usually of numeric type. To sort a measure, select "Sort" in the measure menu and choose either "Sort ascending" or "Sort descending" from the submenu.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"1681913234484",src:n(1334).A,width:"1842",height:"872"})))}g.isMDXComponent=!0},9421:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/1681910877933-83db2f395f236fd1b4d54cd2164932f2.png"},667:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/1681911083494-b6c9125a8e497026e73774eafff0e1d5.png"},9585:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/1681913087646-29c74132502af7f2a8784aed9e6ddb3c.png"},1334:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/1681913234484-6e82308aa3375e4f89bc41d0951a21f9.png"}}]);