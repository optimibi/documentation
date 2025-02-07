"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2607],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||y[d]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const i={id:"analysis-overview",title:"Exploratory Analysis",sidebar_position:1},l="Exploratory Analysis",o={unversionedId:"tutorials/70 analysis/analysis-overview",id:"tutorials/70 analysis/analysis-overview",title:"Exploratory Analysis",description:"Overview",source:"@site/docs/tutorials/70 analysis/1_\u63a2\u7d22\u5f0f\u5206\u6790\u80fd\u529b.md",sourceDirName:"tutorials/70 analysis",slug:"/tutorials/70 analysis/analysis-overview",permalink:"/tutorials/70 analysis/analysis-overview",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/70 analysis/1_\u63a2\u7d22\u5f0f\u5206\u6790\u80fd\u529b.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"analysis-overview",title:"Exploratory Analysis",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Pivot table",permalink:"/tutorials/60 visualizer/30 charts/sjfxyksh-pivot"},next:{title:"Filter Components",permalink:"/tutorials/70 analysis/analysis-filter"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"1. Slicers",id:"1-slicers",level:2},{value:"2. Component Filtering",id:"2-component-filtering",level:2},{value:"3. Cross-Filtering",id:"3-cross-filtering",level:2},{value:"4. Tooltips",id:"4-tooltips",level:2},{value:"5. Drillthrough",id:"5-drillthrough",level:2},{value:"6. Drill Down",id:"6-drill-down",level:2},{value:"7. Sorting",id:"7-sorting",level:2},{value:"8. Calculations",id:"8-calculations",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"exploratory-analysis"},"Exploratory Analysis"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Datafor offers powerful exploratory analysis capabilities that allow users to explore data in reports and dashboards in real-time."),(0,r.yg)("h2",{id:"1-slicers"},"1. Slicers"),(0,r.yg)("p",null,"Slicers are visual filtering tools that allow you to dynamically filter data by selecting different slicer options."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-filter"},"Reference Documentation")),(0,r.yg)("h2",{id:"2-component-filtering"},"2. Component Filtering"),(0,r.yg)("p",null,"Component filtering allows you to filter data based on specific criteria to display the most relevant information."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-component-Filtering"},"Filtering and Data Selection")),(0,r.yg)("h2",{id:"3-cross-filtering"},"3. Cross-Filtering"),(0,r.yg)("p",null,"Cross-filtering and cross-highlighting enable automatic updates of related charts when a data point is selected in one chart, reflecting the related data."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-cross-filtering"},"Reference Documentation")),(0,r.yg)("h2",{id:"4-tooltips"},"4. Tooltips"),(0,r.yg)("p",null,"Tooltips are detailed information boxes that appear when you hover over data points in charts."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-tooltips"},"Reference Documentation")),(0,r.yg)("h2",{id:"5-drillthrough"},"5. Drillthrough"),(0,r.yg)("p",null,"Drillthrough allows you to click on a data point in a report page and navigate to another page to see detailed information about that data point."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-Drill-through"},"Reference Documentation")),(0,r.yg)("h2",{id:"6-drill-down"},"6. Drill Down"),(0,r.yg)("p",null,"Drill down enables you to view data at different levels of granularity in a chart, such as drilling down from yearly data to quarterly data."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/kzt-jmgnjs"},"Reference Documentation")),(0,r.yg)("h2",{id:"7-sorting"},"7. Sorting"),(0,r.yg)("p",null,"Sorting allows you to arrange data in ascending or descending order based on a specific field."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/sjfx-px"},"Reference Documentation")),(0,r.yg)("h2",{id:"8-calculations"},"8. Calculations"),(0,r.yg)("p",null,"Calculations involve creating custom formulas and measures to compute complex data analysis results."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tutorials/70%20analysis/analysis-calculated-measures"},"Reference Documentation")),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Datafor's exploratory analysis capabilities enable users to interact with data in real-time, offering flexible and efficient data analysis methods. By utilizing slicers, component filtering, cross-filtering, tooltips, drillthrough, drill down, sorting, and calculations, users can deeply explore data and uncover hidden trends and insights."))}y.isMDXComponent=!0}}]);