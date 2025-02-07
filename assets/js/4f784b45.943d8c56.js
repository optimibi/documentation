"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5287],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=s(n),c=l,u=y["".concat(d,".").concat(c)]||y[c]||g[c]||r;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(8168),l=(n(6540),n(5680));const r={id:"sjfx-cjfxmx",title:"Create analysis model",sidebar_position:20},i="Create analysis model",o={unversionedId:"tutorials/50 model/sjfx-cjfxmx",id:"tutorials/50 model/sjfx-cjfxmx",title:"Create analysis model",description:'The prerequisite for creating an analysis model is that a "data connection" or a "file dataset" has been created.',source:"@site/docs/tutorials/50 model/20 \u521b\u5efa\u5206\u6790\u6a21\u578b.md",sourceDirName:"tutorials/50 model",slug:"/tutorials/50 model/sjfx-cjfxmx",permalink:"/documentation/tutorials/50 model/sjfx-cjfxmx",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/50 model/20 \u521b\u5efa\u5206\u6790\u6a21\u578b.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"sjfx-cjfxmx",title:"Create analysis model",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"Overview of Analysis Models",permalink:"/documentation/tutorials/50 model/fxmx-fxmxgs"},next:{title:"Multi-Fact Table Model",permalink:"/documentation/tutorials/50 model/model-multi-fact"}},d={},s=[{value:"list of models",id:"list-of-models",level:2},{value:"Create model",id:"create-model",level:2},{value:"1. Select tables or views in a connection or dataset",id:"1-select-tables-or-views-in-a-connection-or-dataset",level:3},{value:"2. Set tables relationship",id:"2-set-tables-relationship",level:3},{value:"3. Modify the automatically generated model",id:"3-modify-the-automatically-generated-model",level:3}],m={toc:s},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"create-analysis-model"},"Create analysis model"),(0,l.yg)("p",null,'The prerequisite for creating an analysis model is that a "data connection" or a "file dataset" has been created.'),(0,l.yg)("h2",{id:"list-of-models"},"list of models"),(0,l.yg)("p",null,'Navigate on the left side of the console and select the "Analysis Model" menu to enter the list of analysis models. Analysis models can be managed through the model list.'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/image-20230131150321934.png"})," "),(0,l.yg)("h2",{id:"create-model"},"Create model"),(0,l.yg)("p",null,"Creating an analysis model involves the following steps:"),(0,l.yg)("h3",{id:"1-select-tables-or-views-in-a-connection-or-dataset"},"1. Select tables or views in a connection or dataset"),(0,l.yg)("p",null,'Select the tables or views to be analyzed, and set the "dimension table" and "fact table".'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/image-20230131150508703.png"})," "),(0,l.yg)("p",null,'After the setting is complete, click the "OK" button to enter the model editing window.'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/image-20230131150621908.png"})," "),(0,l.yg)("h3",{id:"2-set-tables-relationship"},"2. Set tables relationship"),(0,l.yg)("p",null,"Datafor will automatically establish a relationship between the fact table (foreign key) and the dimension table (primary key) (the names of the foreign key and the primary key are the same)."),(0,l.yg)("p",null,'If the names of the foreign key and the primary key are inconsistent, you can manually establish a connection by dragging and dropping fields. The mouse dragging direction is from "primary key" to "foreign key".'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/20230131_150858.gif"})," "),(0,l.yg)("p",null,"Connections can be deleted and modified by right-clicking on connection lines between tables."),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/image-20230131152105147.png"})," "),(0,l.yg)("h3",{id:"3-modify-the-automatically-generated-model"},"3. Modify the automatically generated model"),(0,l.yg)("p",null,"When the relationship between the tables is established, the analysis model will be automatically generated. You can modify the model according to actual needs to meet the data analysis requirements."),(0,l.yg)("p",null,"The model design tool provides the following modification functions:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Model element ","\u2003","\u2003"),(0,l.yg)("th",{parentName:"tr",align:null},"Function point ","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Dimension"),(0,l.yg)("td",{parentName:"tr",align:null},"- modify dimension name",(0,l.yg)("br",null)," - add description",(0,l.yg)("br",null)," - set hidden",(0,l.yg)("br",null)," - modify dimension type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Dimension Field"),(0,l.yg)("td",{parentName:"tr",align:null},"- Modify Name",(0,l.yg)("br",null)," - Add Description",(0,l.yg)("br",null)," - Set Hidden",(0,l.yg)("br",null)," - Set Sort Field",(0,l.yg)("br",null)," - Modify Column",(0,l.yg)("br",null)," - Member Formatting")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Hierarchy"),(0,l.yg)("td",{parentName:"tr",align:null},"- New Hierarchy",(0,l.yg)("br",null)," - Deleting Hierarchy",(0,l.yg)("br",null)," - Hide Hierarchy")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Metric Group"),(0,l.yg)("td",{parentName:"tr",align:null},"- Modify Metric Group Name",(0,l.yg)("br",null),"- Add Metric Group Description",(0,l.yg)("br",null),"- Set Hidden")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Measure"),(0,l.yg)("td",{parentName:"tr",align:null},"- Modify Dimension Name",(0,l.yg)("br",null),"- Add Description",(0,l.yg)("br",null),"- Set Hidden",(0,l.yg)("br",null),"- Modify Data Format",(0,l.yg)("br",null),"- Modify Aggregation Method")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Calculated Measure"),(0,l.yg)("td",{parentName:"tr",align:null},"- Create Calculated Measure",(0,l.yg)("br",null),"- Modify Name",(0,l.yg)("br",null),"- Add Description",(0,l.yg)("br",null),"- Hide Calculated Measure",(0,l.yg)("br",null),"- Modify Calculated Measure Format",(0,l.yg)("br",null),"- Modify Aggregation Method")))))}g.isMDXComponent=!0}}]);