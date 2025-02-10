"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[9791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"analysis-filter",title:"Filter Components",sidebar_position:10},l="Filter Components",o={unversionedId:"guides/70 analysis/analysis-filter",id:"guides/70 analysis/analysis-filter",title:"Filter Components",description:"Datafor offers a variety of filter components to help users analyze data more flexibly.",source:"@site/docs/guides/70 analysis/10_\u7b5b\u9009\u5668.md",sourceDirName:"guides/70 analysis",slug:"/guides/70 analysis/analysis-filter",permalink:"/guides/70 analysis/analysis-filter",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/guides/70 analysis/10_\u7b5b\u9009\u5668.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"analysis-filter",title:"Filter Components",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Exploratory Analysis",permalink:"/guides/70 analysis/analysis-overview"},next:{title:"Component-Level Filtering",permalink:"/guides/70 analysis/analysis-component-Filtering"}},s={},p=[{value:"The Role of Filter Components in Exploratory Analysis",id:"the-role-of-filter-components-in-exploratory-analysis",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filter-components"},"Filter Components"),(0,i.kt)("p",null,"Datafor offers a variety of filter components to help users analyze data more flexibly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Filter components include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dropdown"),(0,i.kt)("li",{parentName:"ul"},"List box"),(0,i.kt)("li",{parentName:"ul"},"Button"),(0,i.kt)("li",{parentName:"ul"},"Radio/Checkbox"),(0,i.kt)("li",{parentName:"ul"},"Hierarchical filter"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Date range"),(0,i.kt)("li",{parentName:"ul"},"Timeline"),(0,i.kt)("li",{parentName:"ul"},"Range timeline"),(0,i.kt)("li",{parentName:"ul"},"Numeric range filter"),(0,i.kt)("li",{parentName:"ul"},"Pager"),(0,i.kt)("li",{parentName:"ul"},"Search")),(0,i.kt)("h2",{id:"the-role-of-filter-components-in-exploratory-analysis"},"The Role of Filter Components in Exploratory Analysis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enhancing Data Accessibility"),(0,i.kt)("p",{parentName:"li"},"Filter components allow users to easily access and select specific subsets of data without writing complex queries. With simple operations, users can quickly filter data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Increasing Data Interactivity"),(0,i.kt)("p",{parentName:"li"},"Filter components make data analysis more interactive. Users can dynamically adjust data views by selecting different filter conditions and observe data changes in real time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supporting Complex Analytical Needs"),(0,i.kt)("p",{parentName:"li"},"By combining multiple filter components, users can apply multidimensional filter conditions for more detailed and in-depth analysis. For example, in sales data analysis, users can simultaneously filter data by specific time periods, regions, and product categories.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Providing Personalized Analytical Experience"),(0,i.kt)("p",{parentName:"li"},"Different users have different needs and focuses on data. Filter components allow users to customize data views based on their specific analytical requirements."))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Datafor's filter components play a crucial role in data analysis and decision-making. They not only enhance data accessibility and interactivity but also support complex analytical needs and personalized analytical experiences."))}u.isMDXComponent=!0}}]);