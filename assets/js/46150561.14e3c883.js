"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3822],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>c});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=u(i),c=n,p=f["".concat(s,".").concat(c)]||f[c]||d[c]||l;return i?r.createElement(p,a(a({ref:t},m),{},{components:i})):r.createElement(p,a({ref:t},m))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<l;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},3875:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const l={id:"filter-timefilter",title:"Time Filter",sidebar_position:20},a="Time Filter",o={unversionedId:"guides/60 visualizer/50 filter/filter-timefilter",id:"guides/60 visualizer/50 filter/filter-timefilter",title:"Time Filter",description:"Datafor's time filter component has two groups:",source:"@site/docs/guides/60 visualizer/50 filter/\u65f6\u95f4\u7b5b\u9009.md",sourceDirName:"guides/60 visualizer/50 filter",slug:"/guides/60 visualizer/50 filter/filter-timefilter",permalink:"/guides/60 visualizer/50 filter/filter-timefilter",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/60 visualizer/50 filter/\u65f6\u95f4\u7b5b\u9009.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"filter-timefilter",title:"Time Filter",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"List Box",permalink:"/guides/60 visualizer/50 filter/filter-lbk"},next:{title:"Number Range Filter",permalink:"/guides/60 visualizer/50 filter/filter-number-range"}},s={},u=[{value:"Time Filter Bound to the Date Field",id:"time-filter-bound-to-the-date-field",level:2},{value:"Time Filter Bound to the Time axis",id:"time-filter-bound-to-the-time-axis",level:2}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"time-filter"},"Time Filter"),(0,n.kt)("p",null,"Datafor's time filter component has two groups:"),(0,n.kt)("p",null,"Time filter bound to the date field:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Date Range: Filter date range."),(0,n.kt)("li",{parentName:"ul"},"Date: Filter a single date.")),(0,n.kt)("p",null,"Time filter bound to the timeline field:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Timeline Range: Filter timeline range."),(0,n.kt)("li",{parentName:"ul"},"Timeline: Filter a single timeline date.")),(0,n.kt)("h2",{id:"time-filter-bound-to-the-date-field"},"Time Filter Bound to the Date Field"),(0,n.kt)("p",null,'The time filter bound to the date field passes the time filter value to the time field of the "subscriber" model for time filtering through a "subscription" relationship.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681968290550-1681969927926-9.png",width:"30%"})),(0,n.kt)("p",null,"Selecting the Time Field in the Analysis Model."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681968385042-1681969927927-10.png",width:"63%"})),(0,n.kt)("p",null,"Setting the Default Time Value"),(0,n.kt)("p",null,'The default time value can be set to a fixed time period or to a "relative time."'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681968453048-1681969927927-11.png",width:"63%"})),(0,n.kt)("p",null,'Selecting the "Subscriber"'),(0,n.kt)("p",null,"Note: Datafor automatically detects whether the analysis model used on the page has this time field to determine whether the component appears in the subscription list."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681970221697.png",width:"63%"})),(0,n.kt)("h2",{id:"time-filter-bound-to-the-time-axis"},"Time Filter Bound to the Time axis"),(0,n.kt)("p",null,'The time filter bound to the Time axis passes the time filter value to the "Time axis" of the "subscriber" model for time filtering through a "subscription" relationship.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681968627927-1681969927927-12.png",width:"30%"})),(0,n.kt)("p",null,"Setting the time type and display format for the timeline."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681969033464-1681969927927-13.png",width:"63%"})),(0,n.kt)("p",null,"Setting the Default Value for Time."),(0,n.kt)("p",null,'The default value for time can be set as a fixed time period or as a "relative time".'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681969064782-1681969927928-14.png",width:"63%"})),'Select "Subscribers".',(0,n.kt)("p",null,'Chart components used with the "Timeline" component must have the "Timeline" field set.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681969177679-1681969927928-15.png",width:"63%"})),(0,n.kt)("p",null,'If a component with the "Timeline" field is set and the granularity of the timeline field set in the component is more detailed than the time type selected in the timeline filter component (for example, the filter component selects "year" while the timeline field in the chart component includes "year", "quarter", "month", and "day"), the component will appear in the "Subscribers" list.\u3002'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681969231279-1681969927928-16.png",width:"63%"})))}d.isMDXComponent=!0}}]);