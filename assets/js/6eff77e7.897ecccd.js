"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[8251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={id:"sjfxyksh-ldt",title:"Radar",sidebar_position:60},s="Radar",o={unversionedId:"guides/60 visualizer/30 charts/sjfxyksh-ldt",id:"guides/60 visualizer/30 charts/sjfxyksh-ldt",title:"Radar",description:"A radar chart is a graph that converts data of 3 or more different dimensions into a unified measurement through a certain formula, and draws them on the same central point starting axis. The radar chart can display the data of multiple dimensions of the object, and convert the dimensional data of different measures into a unified measure, which intuitively describes the attributes of a single object.",source:"@site/docs/guides/60 visualizer/30 charts/\u96f7\u8fbe\u56fe.md",sourceDirName:"guides/60 visualizer/30 charts",slug:"/guides/60 visualizer/30 charts/sjfxyksh-ldt",permalink:"/guides/60 visualizer/30 charts/sjfxyksh-ldt",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/guides/60 visualizer/30 charts/\u96f7\u8fbe\u56fe.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{id:"sjfxyksh-ldt",title:"Radar",sidebar_position:60},sidebar:"docsSidebar",previous:{title:"Scatter",permalink:"/guides/60 visualizer/30 charts/sjfxyksh-sdt"},next:{title:"Treemap",permalink:"/guides/60 visualizer/30 charts/sjfxyksh-jxst"}},l={},c=[{value:"Applicable scene",id:"applicable-scene",level:2},{value:"composition",id:"composition",level:2},{value:"Example",id:"example",level:2},{value:"Single radar chain",id:"single-radar-chain",level:3},{value:"Multi-radar chain",id:"multi-radar-chain",level:3},{value:"Populate the radar chart",id:"populate-the-radar-chart",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"radar"},"Radar"),(0,i.kt)("p",null,"A radar chart is a graph that converts data of 3 or more different dimensions into a unified measurement through a certain formula, and draws them on the same central point starting axis. The radar chart can display the data of multiple dimensions of the object, and convert the dimensional data of different measures into a unified measure, which intuitively describes the attributes of a single object."),(0,i.kt)("p",null,"The radar chart consists of two parts: multiple dimensions and unified measurement."),(0,i.kt)("h2",{id:"applicable-scene"},"Applicable scene"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The radar chart is suitable for multi-dimensional data (more than four dimensions), and is generally used to represent the comprehensive situation of a certain data field, and there are generally about 6 data points.")),(0,i.kt)("h2",{id:"composition"},"composition"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The data of each ",(0,i.kt)("strong",{parentName:"li"},"dimension")," corresponds to a ",(0,i.kt)("strong",{parentName:"li"},"coordinate axis")," respectively. These coordinate axes have the same center of circle, are arranged radially at the same interval, and *",(0,i.kt)("em",{parentName:"li"},"the scales of each coordinate axis are the same")," *."),(0,i.kt)("li",{parentName:"ol"},"The grid lines connecting the axes are usually only auxiliary elements."),(0,i.kt)("li",{parentName:"ol"},"Connect the ",(0,i.kt)("strong",{parentName:"li"},"data points on each axis with a line")," to form a ",(0,i.kt)("strong",{parentName:"li"},"polygon"),"."),(0,i.kt)("li",{parentName:"ol"},"Coordinate axes, points, lines, and polygons together form a radar chart.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"single-radar-chain"},"Single radar chain"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("img",{alt:"image-20230113162236635",src:a(8922).Z,width:"1848",height:"823"}))),(0,i.kt)("h3",{id:"multi-radar-chain"},"Multi-radar chain"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230113162304176",src:a(268).Z,width:"1850",height:"840"})),(0,i.kt)("p",null,"Usually represents a measure of capability that consists of multiple dimensions."),(0,i.kt)("h3",{id:"populate-the-radar-chart"},"Populate the radar chart"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20230113162342586",src:a(5040).Z,width:"1835",height:"801"})))}u.isMDXComponent=!0},8922:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20230113162236635-3a51694bf923e4606b0f82aeb173851a.png"},268:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20230113162304176-a9dc810e2f63a6f0ea9af6943ca0312b.png"},5040:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20230113162342586-bb740dc392a2e1afc5ec0c477466b77a.png"}}]);