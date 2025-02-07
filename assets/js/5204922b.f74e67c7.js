"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4123],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(a),p=l,g=s["".concat(c,".").concat(p)]||s[p]||m[p]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},51:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(8168),l=(a(6540),a(5680));const r={id:"model-calculated-field",title:"Calculated Columns",sidebar_position:50},o="Calculated Columns",i={unversionedId:"tutorials/50 model/model-calculated-field",id:"tutorials/50 model/model-calculated-field",title:"Calculated Columns",description:"A calculated column is a new data field created in the analytical model using SQL formulas.",source:"@site/docs/tutorials/50 model/50 \u8ba1\u7b97\u5b57\u6bb5.md",sourceDirName:"tutorials/50 model",slug:"/tutorials/50 model/model-calculated-field",permalink:"/tutorials/50 model/model-calculated-field",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/50 model/50 \u8ba1\u7b97\u5b57\u6bb5.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"model-calculated-field",title:"Calculated Columns",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Time dimension",permalink:"/tutorials/50 model/sjfx-sjwd"},next:{title:"Designer overview",permalink:"/tutorials/60 visualizer/visualization-sjqgs"}},c={},u=[{value:"When to Use Calculated Columns",id:"when-to-use-calculated-columns",level:2},{value:"How to Create a Calculated Column",id:"how-to-create-a-calculated-column",level:2}],d={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(s,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"calculated-columns"},"Calculated Columns"),(0,l.yg)("p",null,"A calculated column is a new data field created in the analytical model using SQL formulas."),(0,l.yg)("h2",{id:"when-to-use-calculated-columns"},"When to Use Calculated Columns"),(0,l.yg)("p",null,"You should use calculated columns in the following scenarios:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When row-by-row calculations are required."),(0,l.yg)("li",{parentName:"ul"},"When you need to create a new data field based on existing columns."),(0,l.yg)("li",{parentName:"ul"},"When you want to enhance the data model with additional information.")),(0,l.yg)("h2",{id:"how-to-create-a-calculated-column"},"How to Create a Calculated Column"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Enter Modeling View")),(0,l.yg)("p",{parentName:"li"},'Click the menu button at the top right corner of the data table, and select "Calculated Column" from the pop-up menu.'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/1722590445679.png",width:"90%"}))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Enter Column Name, Type, and SQL Expression")),(0,l.yg)("p",{parentName:"li"},"Enter the column name, type, and SQL expression. Once the validation is successful, click the ",(0,l.yg)("inlineCode",{parentName:"p"},"OK")," button."),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/1722590871062.png",width:"60%"}))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"View the New Field in the Table")),(0,l.yg)("p",{parentName:"li"},'You will see a new field "Gross Profit" added to the ',(0,l.yg)("inlineCode",{parentName:"p"},"sales_fact")," table."),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/1722590897012.png",width:"90%"}))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Drag the Created Calculated Column into the Model")),(0,l.yg)("p",{parentName:"li"},'Drag the created calculated column "Gross Profit" into the model.'),(0,l.yg)("div",{align:"left"},(0,l.yg)("img",{src:"../../../static/img/en/datafor/model/1722590931762.png",width:"90%"}))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Use the Calculated Column in Reports")),(0,l.yg)("p",{parentName:"li"},"You can now use this calculated column in your reports."))))}m.isMDXComponent=!0}}]);