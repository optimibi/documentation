"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6767],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(i),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return i?r.createElement(m,o(o({ref:t},c),{},{components:i})):r.createElement(m,o({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8221:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const a={id:"filter-lbk",title:"List Box",sidebar_position:10},o="List Box",s={unversionedId:"guides/60 visualizer/50 filter/filter-lbk",id:"guides/60 visualizer/50 filter/filter-lbk",title:"List Box",description:"List box is used to provide a set of items (data items) from which the user can select one or more items using a mouse. However, the user cannot directly edit the data in the list box.",source:"@site/docs/guides/60 visualizer/50 filter/\u5217\u8868\u6846.md",sourceDirName:"guides/60 visualizer/50 filter",slug:"/guides/60 visualizer/50 filter/filter-lbk",permalink:"/guides/60 visualizer/50 filter/filter-lbk",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/60 visualizer/50 filter/\u5217\u8868\u6846.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"filter-lbk",title:"List Box",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"GIS map settings",permalink:"/guides/60 visualizer/40 map/map-gisdtsz"},next:{title:"Time Filter",permalink:"/guides/60 visualizer/50 filter/filter-timefilter"}},l={},u=[{value:"Setting Data",id:"setting-data",level:2},{value:"Setting Behaviors",id:"setting-behaviors",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-box"},"List Box"),(0,n.kt)("p",null,"List box is used to provide a set of items (data items) from which the user can select one or more items using a mouse. However, the user cannot directly edit the data in the list box."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681966528385.png",width:"30%"})),(0,n.kt)("h2",{id:"setting-data"},"Setting Data"),(0,n.kt)("p",null,"A list box can display a field from a dimension or hierarchy."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681966583204.png",width:"70%"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associated Fact Table"),': Associates the dimension table with the real-time table. When this switch is enabled, if there are no dimension-related records in the real-time table, the dimension data will not appear in the list box. In addition, the component filtering is also affected by the "Associated Real-time Table" switch. When this switch is turned on, any dimension in the model or field on the fact table can be used to filter the list box field.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Multiple Selection"),": Allows multiple selection of items in the list box."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value Type"),": Fixed default value and relative default value. The fixed default value is to select one or more fixed items from the list as the default selection. Relative default value: first item, last item."),(0,n.kt)("h2",{id:"setting-behaviors"},"Setting Behaviors"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/img/en/datafor/visualizer/1681966616745.png",width:"70%"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subscribers"),': Establish a "filter" relationship between the list box component and other components on the page. The selected value in this list box will be the "filter" subscribed by the affected components.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),": Assign the selected value in the list to the relevant parameter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Custom Process"),": Embed JavaScript code to execute during different rendering stages of the component."),(0,n.kt)("p",null,'For example, when we need to adjust the rendering effects of a component, we can intervene in this custom process "before execution."'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function shouldExecute(require, options){\n    options.value = options.value?.slice(0, 3) || [];\n    return true;\n}\n")),(0,n.kt)("p",null,"This logic will cause the list component to always display only the first 3 items of the list data."))}d.isMDXComponent=!0}}]);