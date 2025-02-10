"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"analysis-cross-filtering",title:"Cross-Filtering",sidebar_position:30},s="Cross-Filtering",o={unversionedId:"guides/70 analysis/analysis-cross-filtering",id:"guides/70 analysis/analysis-cross-filtering",title:"Cross-Filtering",description:"Overview",source:"@site/docs/guides/70 analysis/30_\u4ea4\u53c9\u7b5b\u9009.md",sourceDirName:"guides/70 analysis",slug:"/guides/70 analysis/analysis-cross-filtering",permalink:"/guides/70 analysis/analysis-cross-filtering",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/70 analysis/30_\u4ea4\u53c9\u7b5b\u9009.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"analysis-cross-filtering",title:"Cross-Filtering",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"Component-Level Filtering",permalink:"/guides/70 analysis/analysis-component-Filtering"},next:{title:"Tooltips",permalink:"/guides/70 analysis/analysis-tooltips"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"What is Cross-Filtering?",id:"what-is-cross-filtering",level:2},{value:"Benefits of Cross-Filtering",id:"benefits-of-cross-filtering",level:2},{value:"How to Use Cross-Filtering",id:"how-to-use-cross-filtering",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cross-filtering"},"Cross-Filtering"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Datafor's cross-filtering feature enable users to interact with multiple chart components within reports. These features allow users to dynamically filter and highlight data, aiding in deeper understanding of relationships within the data and more effective data exploration."),(0,i.kt)("h2",{id:"what-is-cross-filtering"},"What is Cross-Filtering?"),(0,i.kt)("p",null,"Cross-filtering allows users to filter data in other related chart components by selecting a data point in one chart. When a data point is selected, other related chart components automatically update to display only the relevant data. This helps users focus on specific data subsets and understand the relationships between different data segments."),(0,i.kt)("h2",{id:"benefits-of-cross-filtering"},"Benefits of Cross-Filtering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Focused Analysis"),": Concentrate on specific points of interest for better analysis and understanding."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Discover Data Relationships"),": Explore how changes in one data point affect other related data points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interactive Data Exploration"),": Engage with data in a dynamic and intuitive manner.")),(0,i.kt)("h2",{id:"how-to-use-cross-filtering"},"How to Use Cross-Filtering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Open Your Datafor Report"),": Ensure your report page contains multiple chart components."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select a Data Point"),": Click on a data point in one of the chart components (e.g., a bar in a bar chart)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Observe the Effect"),": Watch how other chart components update to reflect the selected related data.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider a sales report with a pie chart showing sales by product line and other charts. By selecting a specific product line in the pie, other charts update to display data only for that product line."),(0,i.kt)("p",null,"This interactive exploration allows users to analyze sales for a specific product line and compare it with overall sales."),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"/documentation/img/en/datafor/analysis/20230112_223238.gif"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Datafor's cross-filtering  features are powerful interactive data exploration tools. They help users focus on specific data points and understand the relationships between different data segments, enabling more effective and insightful data analysis."))}d.isMDXComponent=!0}}]);