"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6343],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(8168),n=(a(6540),a(5680));const i={id:"sjfxyksh-pivot",title:"Pivot table",sidebar_position:130},o="Pivot table",l={unversionedId:"tutorials/60 visualizer/30 charts/sjfxyksh-pivot",id:"tutorials/60 visualizer/30 charts/sjfxyksh-pivot",title:"Pivot table",description:"A pivot table helps users quickly analyze large amounts of data by viewing data from different angles and dimensions and summarizing and calculating the data.",source:"@site/docs/tutorials/60 visualizer/30 charts/\u900f\u89c6\u8868.md",sourceDirName:"tutorials/60 visualizer/30 charts",slug:"/tutorials/60 visualizer/30 charts/sjfxyksh-pivot",permalink:"/tutorials/60 visualizer/30 charts/sjfxyksh-pivot",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/60 visualizer/30 charts/\u900f\u89c6\u8868.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{id:"sjfxyksh-pivot",title:"Pivot table",sidebar_position:130},sidebar:"docsSidebar",previous:{title:"Image",permalink:"/tutorials/60 visualizer/30 charts/sjfxyksh-tupian"},next:{title:"Exploratory Analysis",permalink:"/tutorials/70 analysis/analysis-overview"}},s={},p=[{value:"Applicable scenario",id:"applicable-scenario",level:2},{value:"Composition",id:"composition",level:2},{value:"Make a pivot table",id:"make-a-pivot-table",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(u,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"pivot-table"},"Pivot table"),(0,n.yg)("p",null,"A pivot table helps users quickly analyze large amounts of data by viewing data from different angles and dimensions and summarizing and calculating the data."),(0,n.yg)("h2",{id:"applicable-scenario"},"Applicable scenario"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Summarizing data: Pivot tables can quickly summarize large amounts of data and are easy to use and understand."),(0,n.yg)("li",{parentName:"ul"},"Grouping and aggregating data: Pivot tables can group and aggregate data in many ways, such as by department, salesperson, date, etc."),(0,n.yg)("li",{parentName:"ul"},"Data analysis: Pivot tables can search for trends, patterns, and outliers in data and can dynamically change the grouping and aggregation methods to view different aspects of the data.")),(0,n.yg)("h2",{id:"composition"},"Composition"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Rows: Represents the categorical variable of each row in the pivot table, such as employee name, date, region, etc.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Columns: Represents the categorical variable of each column in the pivot table, such as department, product, etc.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Measures: Represents the data records in the pivot table, such as sales, inventory amount, etc.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Summary: Used to summarize the data, such as calculating the average, sum, maximum, minimum, etc."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"image-20230127162217454",src:a(425).A,width:"1382",height:"573"})))),(0,n.yg)("h2",{id:"make-a-pivot-table"},"Make a pivot table"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Set pivot table data")),(0,n.yg)("p",{parentName:"li"},"A pivot table consists of three data rows, columns, and measures."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"image-20230127161933508",src:a(1891).A,width:"1838",height:"844"})))),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Sub total and Grand total")),(0,n.yg)("p",{parentName:"li"},"Both the row and column fields of the pivot table can be set to sub total summary and grand total summary."),(0,n.yg)("p",{parentName:"li"},'The "Sub total" and "Grand total" switches in the style panel can turn on or off the total and total row, and can adjust the background color, font size and other style properties.'),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"image-20230127162428026",src:a(2342).A,width:"1838",height:"808"})))))}m.isMDXComponent=!0},1891:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/image-20230127161933508-df9913a9ad84d96bc94c145d9c57ae1f.png"},425:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/image-20230127162217454-00406be7464e494264743070177d20de.png"},2342:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/image-20230127162428026-381f84ad460dc3a1e348a1e4ab215aa1.png"}}]);