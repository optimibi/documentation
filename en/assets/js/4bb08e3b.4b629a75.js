"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const l={id:"model-multi-fact",title:"Multi-Fact Table Model",sidebar_position:30},o="Multi-Fact Table Model",r={unversionedId:"50 model/model-multi-fact",id:"50 model/model-multi-fact",title:"Multi-Fact Table Model",description:"Datafor supports complex Online Analytical Processing (OLAP) queries, enabling rapid access and processing of multidimensional data. One of its advanced features is the support for multi-fact table models.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/50 model/30 \u591a\u4e8b\u5b9e\u8868.md",sourceDirName:"50 model",slug:"/50 model/model-multi-fact",permalink:"/docs/en/50 model/model-multi-fact",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/50 model/30 \u591a\u4e8b\u5b9e\u8868.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"model-multi-fact",title:"Multi-Fact Table Model",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Create analysis model",permalink:"/docs/en/50 model/sjfx-cjfxmx"},next:{title:"Time dimension",permalink:"/docs/en/50 model/sjfx-sjwd"}},s={},c=[{value:"What is a Multi-Fact Table Model?",id:"what-is-a-multi-fact-table-model",level:2},{value:"Key Components",id:"key-components",level:3},{value:"When to Use a Multi-Fact Table Model",id:"when-to-use-a-multi-fact-table-model",level:2},{value:"How to Create a Multi-Fact Table Model",id:"how-to-create-a-multi-fact-table-model",level:2},{value:"Scenario",id:"scenario",level:3},{value:"Steps",id:"steps",level:3},{value:"Advantages",id:"advantages",level:2}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-fact-table-model"},"Multi-Fact Table Model"),(0,i.kt)("p",null,"Datafor supports complex Online Analytical Processing (OLAP) queries, enabling rapid access and processing of multidimensional data. One of its advanced features is the support for multi-fact table models."),(0,i.kt)("h2",{id:"what-is-a-multi-fact-table-model"},"What is a Multi-Fact Table Model?"),(0,i.kt)("p",null,"A multi-fact table model includes multiple fact tables within a single schema. These fact tables can share common dimension tables, allowing for more complex analytical queries across multiple business processes or domains."),(0,i.kt)("h3",{id:"key-components"},"Key Components"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fact Tables"),": Central tables in the schema containing quantitative data for analysis (e.g., sales, inventory, orders). Each fact table typically includes measures (e.g., sales amount, quantity) and keys linking to dimension tables."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Dimension Tables"),": Tables that store descriptive attributes related to facts (e.g., time, product, customer). These tables help users slice and dice the data in various ways."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Shared Dimensions"),": Dimensions used by multiple fact tables. For example, the time dimension might link to both sales and inventory fact tables.")),(0,i.kt)("h2",{id:"when-to-use-a-multi-fact-table-model"},"When to Use a Multi-Fact Table Model"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Complex Business Processes"),": When business processes involve multiple related but independent facts requiring simultaneous analysis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared Dimensions"),": When multiple fact tables need to share dimensions to provide a unified view of different business metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detailed Analysis"),": When detailed granularity and complex relationships are necessary for data analysis.")),(0,i.kt)("h2",{id:"how-to-create-a-multi-fact-table-model"},"How to Create a Multi-Fact Table Model"),(0,i.kt)("h3",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"A retail company wants to analyze both sales and inventory data. The company has two fact tables: ",(0,i.kt)("inlineCode",{parentName:"p"},"sales_fact")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inventory_fact"),", which share dimensions such as time and product."),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"sales_fact_1997")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inventory_fact_1997")," as ",(0,i.kt)("strong",{parentName:"p"},"fact tables"),", and other tables as ",(0,i.kt)("strong",{parentName:"p"},"dimension tables"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"1677412368056",src:a(5158).Z,width:"1688",height:"874"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Datafor automatically creates a ",(0,i.kt)("strong",{parentName:"p"},"snowflake multi-fact table model"),". The model shows two ",(0,i.kt)("strong",{parentName:"p"},"measure groups")," in the measures area, ",(0,i.kt)("inlineCode",{parentName:"p"},"time_by_day")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"product")," as two ",(0,i.kt)("strong",{parentName:"p"},"shared dimensions"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"warehouse")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"warehouse_class")," forming a ",(0,i.kt)("strong",{parentName:"p"},"snowflake dimension"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"1677412480350",src:a(554).Z,width:"1845",height:"879"})))),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unified View"),": Provides a comprehensive view of different business metrics within a single model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scalability"),": Easily extensible to include additional fact tables and shared dimensions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enhanced Analysis"),": Supports detailed and complex analysis across multiple business processes.")))}m.isMDXComponent=!0},5158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1677412368056-3b54cf427c7e0ba210c7221c2c3b2e58.png"},554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1677412480350-6f1d9eb90f15e9c853601def6b5f25c8.png"}}]);