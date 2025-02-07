"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1474],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(i),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<n;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=i(7462),r=(i(7294),i(3905));const n={id:"Q&A-time-axis",title:"Time axis",sidebar_position:10},o="Time Axis",l={unversionedId:"110 Q&A/Q&A-time-axis",id:"110 Q&A/Q&A-time-axis",title:"Time axis",description:"What is the Purpose of the \u201cTime Axis\u201d in Chart Component Data Panels?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/110 Q&A/\u65f6\u95f4\u8f74.md",sourceDirName:"110 Q&A",slug:"/110 Q&A/Q&A-time-axis",permalink:"/docs/en/110 Q&A/Q&A-time-axis",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/110 Q&A/\u65f6\u95f4\u8f74.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Q&A-time-axis",title:"Time axis",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"OLAP\u8bbe\u7f6e",permalink:"/docs/en/100 system/OLAP\u8bbe\u7f6e"},next:{title:"MDX Functions",permalink:"/docs/en/120 advanced/advanced-mdx"}},s={},m=[{value:"What is the Purpose of the \u201cTime Axis\u201d in Chart Component Data Panels?",id:"what-is-the-purpose-of-the-time-axis-in-chart-component-data-panels",level:2},{value:"How Does the Time Axis Work?",id:"how-does-the-time-axis-work",level:2},{value:"How to Use the \u201cTime Axis\u201d?",id:"how-to-use-the-time-axis",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time-axis"},"Time Axis"),(0,r.kt)("h2",{id:"what-is-the-purpose-of-the-time-axis-in-chart-component-data-panels"},"What is the Purpose of the \u201cTime Axis\u201d in Chart Component Data Panels?"),(0,r.kt)("p",null,"The \u201cTime Axis\u201d feature allows you to filter multiple \u201ctime fields\u201d in the model using a single \u201cTime Axis Filter\u201d component."),(0,r.kt)("p",null,"For example, if your model includes fields like \u201cSales Date,\u201d \u201cPurchase Date,\u201d and \u201cInventory Date,\u201d or if you have metrics with different time granularities\u2014such as \u201cSales Budget Amount\u201d displayed by \u201cYear\u201d and \u201cSales Amount\u201d displayed by \u201cDay\u201d\u2014you can use the \u201cTime Axis\u201d to apply a unified time filter across these various components."),(0,r.kt)("p",null,"By using the \u201cTime Axis,\u201d you ensure consistent time filtering across all relevant components in your report."),(0,r.kt)("h2",{id:"how-does-the-time-axis-work"},"How Does the Time Axis Work?"),(0,r.kt)("p",null,"The Time Axis Filter applies the selected time range to the time axis fields of chart components, thereby filtering the data."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chart A")," has a time axis field of \u201cSales Month.\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chart B")," has a time axis field of \u201cPurchase Year.\u201d")),(0,r.kt)("p",null,"When the Time Axis Filter selects the time range of \u201c1998\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chart A")," will filter for \u201cSales Month\u201d between January 1998 and December 1998."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chart B")," will filter for \u201cPurchase Year\u201d equal to \u201c1998.\u201d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The Time Axis Filter can be used to filter time fields with the same or finer granularity. For example, a year filter can be used for fields with yearly, monthly, or daily granularity, while a month filter can be used for fields with monthly or daily granularity."),(0,r.kt)("h2",{id:"how-to-use-the-time-axis"},"How to Use the \u201cTime Axis\u201d?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set the \u201cTime Axis\u201d Field in Chart Components")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/Q&A/image-20230113124614265.png",alt:"image-20230113124614265",width:"67%"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the \u201cTime Axis\u201d or \u201cRange Time Axis\u201d Filter Component to the Report Page"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/Q&A/image-20230113124904616.png",alt:"image-20230113124904616",width:"67%"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Establish Subscription Relationships Between the Filter Component and Chart Components."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/Q&A/1722333101929.png",alt:"1722333101929.png",width:"67%"})))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Does the Time Axis Filter need to be bound to specific time fields?")),(0,r.kt)("p",{parentName:"li"},"No. The Time Axis Filter can be set up and used independently of specific time fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"When should you use the Time Axis Filter?")),(0,r.kt)("p",{parentName:"li"},"Use the Time Axis Filter when your report contains multiple time fields that need to be filtered by the same time filter, or when you need to apply a unified time filter to time fields with different granularities.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Can a Time Axis Filter set to \u201cYear\u201d be applied to charts with time axis fields of \u201cDay\u201d?")),(0,r.kt)("p",{parentName:"li"},"Yes. A coarser time granularity filter, such as a year filter, can be used to filter finer granularity fields, such as days. However, for better performance, using filters with the same granularity as the time fields is recommended."))))}u.isMDXComponent=!0}}]);