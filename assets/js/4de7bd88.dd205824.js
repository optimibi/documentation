"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[7521],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(i),f=n,p=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return i?r.createElement(p,l(l({ref:t},d),{},{components:i})):r.createElement(p,l({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7033:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const a={id:"filter-number-range",title:"Number Range Filter",sidebar_position:50},l="Number Range Filter",o={unversionedId:"guides/60 visualizer/50 filter/filter-number-range",id:"guides/60 visualizer/50 filter/filter-number-range",title:"Number Range Filter",description:"The Number Range Filter is used to filter numerical fields in the dimension of an analysis model.",source:"@site/docs/guides/60 visualizer/50 filter/\u6570\u5b57\u8303\u56f4\u7b5b\u9009\u5668.md",sourceDirName:"guides/60 visualizer/50 filter",slug:"/guides/60 visualizer/50 filter/filter-number-range",permalink:"/guides/60 visualizer/50 filter/filter-number-range",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/guides/60 visualizer/50 filter/\u6570\u5b57\u8303\u56f4\u7b5b\u9009\u5668.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"filter-number-range",title:"Number Range Filter",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Time Filter",permalink:"/guides/60 visualizer/50 filter/filter-timefilter"},next:{title:"Tabs",permalink:"/guides/60 visualizer/55 assist/assist-bqy"}},s={},u=[{value:"Numerical Dimension Fields",id:"numerical-dimension-fields",level:2},{value:"<strong>Datafor Analysis Model</strong>",id:"datafor-analysis-model",level:3},{value:"<strong>Pentaho Mondrian 3 Schema</strong>",id:"pentaho-mondrian-3-schema",level:3},{value:"How to Add a Number Range Filter?",id:"how-to-add-a-number-range-filter",level:2},{value:"Using the Number Slicer",id:"using-the-number-slicer",level:2},{value:"Adjusting the Range",id:"adjusting-the-range",level:3},{value:"Entering Specific Values",id:"entering-specific-values",level:3},{value:"Summary",id:"summary",level:2}],d={toc:u};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"number-range-filter"},"Number Range Filter"),(0,n.kt)("p",null,"The Number Range Filter is used to filter numerical fields in the dimension of an analysis model."),(0,n.kt)("h2",{id:"numerical-dimension-fields"},"Numerical Dimension Fields"),(0,n.kt)("p",null,"Only numerical dimension fields can be used in the Number Range Filter."),(0,n.kt)("h3",{id:"datafor-analysis-model"},(0,n.kt)("strong",{parentName:"h3"},"Datafor Analysis Model")),(0,n.kt)("p",null,'When creating an analysis model in Datafor, the system automatically detects the field types in the data table and sets the dimension fields of the analysis model to "numerical."'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1723127406337.png",width:"30%"})),(0,n.kt)("h3",{id:"pentaho-mondrian-3-schema"},(0,n.kt)("strong",{parentName:"h3"},"Pentaho Mondrian 3 Schema")),(0,n.kt)("p",null,'In Pentaho\u2019s schema file, fields with the type set to "Numeric."'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1723123784260.png",width:"100%"})),(0,n.kt)("h2",{id:"how-to-add-a-number-range-filter"},"How to Add a Number Range Filter?"),(0,n.kt)("p",null,"The following steps will guide users on how to add and configure a Number Range Filter in a Datafor report:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Select the Number Range Filter"))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1723127508505.png",width:"72%"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Select a \u201cNumerical\u201d Field")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"[!NOTE]"),(0,n.kt)("p",{parentName:"blockquote"},"When selecting a field for the Number Range Filter, only \u201cnumerical\u201d fields will be displayed in the model.")))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1723127584243.png",width:"72%"})),(0,n.kt)("h2",{id:"using-the-number-slicer"},"Using the Number Slicer"),(0,n.kt)("h3",{id:"adjusting-the-range"},"Adjusting the Range"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the report view, users will see a slicer with two sliders representing the minimum and maximum values."),(0,n.kt)("li",{parentName:"ol"},"Users can adjust the filter range by dragging the sliders, e.g., from 100 to 500."),(0,n.kt)("li",{parentName:"ol"},"Like other filter components, the slicer will automatically update other chart components subscribed to this filter component in the report, displaying only data that falls within the selected range.")),(0,n.kt)("h3",{id:"entering-specific-values"},"Entering Specific Values"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Users can also directly enter the specific minimum and maximum values in the text boxes next to the slicer."),(0,n.kt)("li",{parentName:"ol"},"After entering the values, press Enter, and the slicer will update the filter range according to the entered values.")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"The Number Range Filter allows users to filter numerical data more flexibly, enabling quick focus on data segments within a specific numerical range."))}m.isMDXComponent=!0}}]);