"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6340],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=n.createContext({}),d=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(o.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(e),c=l,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return e?n.createElement(g,s(s({ref:a},p),{},{components:e})):n.createElement(g,s({ref:a},p))}));function c(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,s=new Array(r);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,s[1]=i;for(var d=2;d<r;d++)s[d]=e[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},4361:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=e(7462),l=(e(7294),e(3905));const r={id:"sjfx-cross-models",title:"Cross-Model and Cross-Data Source",sidebar_position:71},s="Cross-Model and Cross-Data Source Analysis",i={unversionedId:"guides/70 analysis/sjfx-cross-models",id:"guides/70 analysis/sjfx-cross-models",title:"Cross-Model and Cross-Data Source",description:"Datafor's cross-model and cross-data source analysis feature enables users to integrate data from different sources into a single report, providing comprehensive data analysis and visualization. This functionality helps users associate and compare data across sources, offering deeper analytical insights.",source:"@site/docs/guides/70 analysis/71_\u8de8\u6a21\u578b\u548c\u8de8\u6570\u636e\u6e90\u5206\u6790.md",sourceDirName:"guides/70 analysis",slug:"/guides/70 analysis/sjfx-cross-models",permalink:"/guides/70 analysis/sjfx-cross-models",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/70 analysis/71_\u8de8\u6a21\u578b\u548c\u8de8\u6570\u636e\u6e90\u5206\u6790.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{id:"sjfx-cross-models",title:"Cross-Model and Cross-Data Source",sidebar_position:71},sidebar:"docsSidebar",previous:{title:"Sorting",permalink:"/guides/70 analysis/sjfx-px"},next:{title:"Calculated Measures",permalink:"/guides/70 analysis/analysis-calculated-measures"}},o={},d=[{value:"Features",id:"features",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Sample Data",id:"sample-data",level:2},{value:"ERP System: Financial Data Table (FinanceData)",id:"erp-system-financial-data-table-financedata",level:3},{value:"CRM System: Sales Data Table (SalesData)",id:"crm-system-sales-data-table-salesdata",level:3},{value:"Creating Analysis Models",id:"creating-analysis-models",level:2},{value:"Financial Analysis Model: finance_data",id:"financial-analysis-model-finance_data",level:3},{value:"Sales Analysis Model: sales_data",id:"sales-analysis-model-sales_data",level:3},{value:"Creating Analysis Reports",id:"creating-analysis-reports",level:2},{value:"Cross-Analysis",id:"cross-analysis",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],p={toc:d};function m(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cross-model-and-cross-data-source-analysis"},"Cross-Model and Cross-Data Source Analysis"),(0,l.kt)("p",null,"Datafor's cross-model and cross-data source analysis feature enables users to integrate data from different sources into a single report, providing comprehensive data analysis and visualization. This functionality helps users associate and compare data across sources, offering deeper analytical insights."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Multi-Data Source Integration"),": Users can set up different analysis models for different components within the same report, breaking down data silos and creating a global view."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cross-Filtering"),": Visual components from different analysis models support cross-filtering, enabling users to explore relationships between data from multiple dimensions.")),(0,l.kt)("h2",{id:"use-case"},"Use Case"),(0,l.kt)("p",null,"Suppose a company wants to integrate financial and sales data to analyze market performance and track key financial metrics. Financial data is stored in an ERP system, while sales data resides in a CRM system. With Datafor's cross-model and cross-data source analysis, the company can visually present sales trends, cost analysis, profitability, and other key insights in a single report. Through cross-analysis, users can uncover potential connections between financial and sales data."),(0,l.kt)("h2",{id:"sample-data"},"Sample Data"),(0,l.kt)("h3",{id:"erp-system-financial-data-table-financedata"},"ERP System: Financial Data Table (FinanceData)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"),(0,l.kt)("th",{parentName:"tr",align:null},"Revenue"),(0,l.kt)("th",{parentName:"tr",align:null},"Profit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jan"),(0,l.kt)("td",{parentName:"tr",align:null},"500,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,200,000"),(0,l.kt)("td",{parentName:"tr",align:null},"700,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Feb"),(0,l.kt)("td",{parentName:"tr",align:null},"520,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,250,000"),(0,l.kt)("td",{parentName:"tr",align:null},"730,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Mar"),(0,l.kt)("td",{parentName:"tr",align:null},"510,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,220,000"),(0,l.kt)("td",{parentName:"tr",align:null},"710,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Apr"),(0,l.kt)("td",{parentName:"tr",align:null},"550,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,300,000"),(0,l.kt)("td",{parentName:"tr",align:null},"750,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 May"),(0,l.kt)("td",{parentName:"tr",align:null},"560,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,320,000"),(0,l.kt)("td",{parentName:"tr",align:null},"760,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jun"),(0,l.kt)("td",{parentName:"tr",align:null},"590,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,350,000"),(0,l.kt)("td",{parentName:"tr",align:null},"760,000")))),(0,l.kt)("h3",{id:"crm-system-sales-data-table-salesdata"},"CRM System: Sales Data Table (SalesData)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Market Region"),(0,l.kt)("th",{parentName:"tr",align:null},"Product Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Sales"),(0,l.kt)("th",{parentName:"tr",align:null},"Units Sold"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jan"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"600,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jan"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"400,000"),(0,l.kt)("td",{parentName:"tr",align:null},"900")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Feb"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"620,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Feb"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"420,000"),(0,l.kt)("td",{parentName:"tr",align:null},"920")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Mar"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"610,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,230")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Mar"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"410,000"),(0,l.kt)("td",{parentName:"tr",align:null},"910")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Apr"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"650,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Apr"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"450,000"),(0,l.kt)("td",{parentName:"tr",align:null},"950")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 May"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"670,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,340")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 May"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"470,000"),(0,l.kt)("td",{parentName:"tr",align:null},"970")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jun"),(0,l.kt)("td",{parentName:"tr",align:null},"East Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"690,000"),(0,l.kt)("td",{parentName:"tr",align:null},"1,380")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2023 Jun"),(0,l.kt)("td",{parentName:"tr",align:null},"South Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Home Goods"),(0,l.kt)("td",{parentName:"tr",align:null},"490,000"),(0,l.kt)("td",{parentName:"tr",align:null},"990")))),(0,l.kt)("h2",{id:"creating-analysis-models"},"Creating Analysis Models"),(0,l.kt)("p",null,"Next, we will create analysis models for two different data sources."),(0,l.kt)("h3",{id:"financial-analysis-model-finance_data"},"Financial Analysis Model: finance_data"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/1731233238801-1731234548377-7.png"})),(0,l.kt)("h3",{id:"sales-analysis-model-sales_data"},"Sales Analysis Model: sales_data"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/1731233049272-1731234548377-8.png"})),(0,l.kt)("h2",{id:"creating-analysis-reports"},"Creating Analysis Reports"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"finance_data")," model to create a line chart:"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/1731233589755-1731234548377-9.png"})),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"sales_data")," model to create a bar chart:"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/1731233692962-1731234548378-10.png"})),(0,l.kt)("h2",{id:"cross-analysis"},"Cross-Analysis"),(0,l.kt)("p",null,"In the data report, users can perform multi-dimensional analysis via cross-filtering:"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/f0exf-2cwap-1731234548378-11.gif"})),(0,l.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Can cross-analysis and filtering be performed when the field names in the two models are different?")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Answer"),": Yes, as long as the field titles in the two models are consistent, cross-analysis can be performed."),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"/img/en/datafor/analysis/1731238805833.png",width:"50%"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Can a filter component using fields from Model A subscribe to a chart component based on Model B?")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Answer"),": Yes. If Model B has fields with the same titles as the filter component, it is possible to filter and perform cross-analysis."))))}m.isMDXComponent=!0}}]);