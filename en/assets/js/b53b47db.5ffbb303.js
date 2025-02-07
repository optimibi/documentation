"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,g=u["".concat(m,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(g,l(l({ref:e},s),{},{components:a})):r.createElement(g,l({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5466:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"map-image-marker",title:"Image Map",sidebar_position:50},l="Image Map",o={unversionedId:"60 visualizer/40 map/map-image-marker",id:"60 visualizer/40 map/map-image-marker",title:"Image Map",description:"What is an Image Map?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/40 map/50 _\u56fe\u7247\u5730\u56fe.md",sourceDirName:"60 visualizer/40 map",slug:"/60 visualizer/40 map/map-image-marker",permalink:"/docs/en/60 visualizer/40 map/map-image-marker",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/60 visualizer/40 map/50 _\u56fe\u7247\u5730\u56fe.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"map-image-marker",title:"Image Map",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"GIS marked map",permalink:"/docs/en/60 visualizer/40 map/map-gisbjdt"},next:{title:"GIS map settings",permalink:"/docs/en/60 visualizer/40 map/map-gisdtsz"}},m={},p=[{value:"What is an Image Map?",id:"what-is-an-image-map",level:2},{value:"How to Determine the X and Y Coordinates for Markers?",id:"how-to-determine-the-x-and-y-coordinates-for-markers",level:2},{value:"Example",id:"example",level:2},{value:"Example Data",id:"example-data",level:3},{value:"Steps",id:"steps",level:3}],s={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"image-map"},"Image Map"),(0,n.kt)("h2",{id:"what-is-an-image-map"},"What is an Image Map?"),(0,n.kt)("p",null,'The "Image Map" component allows users to add markers at specific pixel locations on an image, enabling the identification and display of key information across different areas of the image.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723971392008.png",width:"70%"})),(0,n.kt)("h2",{id:"how-to-determine-the-x-and-y-coordinates-for-markers"},"How to Determine the X and Y Coordinates for Markers?"),(0,n.kt)("p",null,"In an image map, the coordinate system's origin is at the bottom-left corner of the image (0, 0). Specifically:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"X Coordinate")," is the horizontal pixel distance from the origin to the marker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Y Coordinate")," is the vertical pixel distance from the origin to the marker.")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723969910547.png",width:"45%"})),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"example-data"},"Example Data"),(0,n.kt)("p",null,"The table below lists the coordinates and values for 6 markers:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Marker"),(0,n.kt)("th",{parentName:"tr",align:null},"X"),(0,n.kt)("th",{parentName:"tr",align:null},"Y"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A"),(0,n.kt)("td",{parentName:"tr",align:null},"337"),(0,n.kt)("td",{parentName:"tr",align:null},"645"),(0,n.kt)("td",{parentName:"tr",align:null},"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"B"),(0,n.kt)("td",{parentName:"tr",align:null},"579"),(0,n.kt)("td",{parentName:"tr",align:null},"585"),(0,n.kt)("td",{parentName:"tr",align:null},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C"),(0,n.kt)("td",{parentName:"tr",align:null},"1057"),(0,n.kt)("td",{parentName:"tr",align:null},"479"),(0,n.kt)("td",{parentName:"tr",align:null},"120")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D"),(0,n.kt)("td",{parentName:"tr",align:null},"1143"),(0,n.kt)("td",{parentName:"tr",align:null},"703"),(0,n.kt)("td",{parentName:"tr",align:null},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"E"),(0,n.kt)("td",{parentName:"tr",align:null},"1679"),(0,n.kt)("td",{parentName:"tr",align:null},"647"),(0,n.kt)("td",{parentName:"tr",align:null},"90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"F"),(0,n.kt)("td",{parentName:"tr",align:null},"1577"),(0,n.kt)("td",{parentName:"tr",align:null},"475"),(0,n.kt)("td",{parentName:"tr",align:null},"95")))),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the Image Map component"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973388996.png",width:"30%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Determine the component's position and size on the canvas"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973428195.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the component data"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973464960.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the image background"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973491066.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Adjust markers to fit the image based on pixel location"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973522976.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set marker icons"),(0,n.kt)("p",{parentName:"li"},"Choose different icons for markers"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973570151.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure marker colors"),(0,n.kt)("p",{parentName:"li"},"Select color fields, which can be based on values or categories"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723973632029.png",width:"90%"})))))}d.isMDXComponent=!0}}]);