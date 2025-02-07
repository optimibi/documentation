"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1193],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),l=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=l(e.components);return r.createElement(m.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(t),g=n,u=c["".concat(m,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(u,i(i({ref:a},s),{},{components:t})):r.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9835:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(8168),n=(t(6540),t(5680));const o={id:"map-geojsonmarked",title:"GeoJSON marked map",sidebar_position:20},i="GeoJSON marked map",p={unversionedId:"tutorials/60 visualizer/40 map/map-geojsonmarked",id:"tutorials/60 visualizer/40 map/map-geojsonmarked",title:"GeoJSON marked map",description:"A GeoJSON marked map is a map that encodes geographical location information as data in the GeoJSON format and marks it on the map. The GeoJSON marked map can help users display geographical location information more intuitively on the map, such as marking different locations, paths, and regions.",source:"@site/docs/tutorials/60 visualizer/40 map/GeoJSON\u6807\u8bb0\u5730\u56fe.md",sourceDirName:"tutorials/60 visualizer/40 map",slug:"/tutorials/60 visualizer/40 map/map-geojsonmarked",permalink:"/tutorials/60 visualizer/40 map/map-geojsonmarked",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/60 visualizer/40 map/GeoJSON\u6807\u8bb0\u5730\u56fe.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"map-geojsonmarked",title:"GeoJSON marked map",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"GeoJSON filled map",permalink:"/tutorials/60 visualizer/40 map/map-geojsonfilled"},next:{title:"GIS marked map",permalink:"/tutorials/60 visualizer/40 map/map-gisbjdt"}},m={},l=[{value:"Creating a Map",id:"creating-a-map",level:2},{value:"FAQ",id:"faq",level:2}],s={toc:l},c="wrapper";function d(e){let{components:a,...o}=e;return(0,n.yg)(c,(0,r.A)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"geojson-marked-map"},"GeoJSON marked map"),(0,n.yg)("p",null,"A GeoJSON marked map is a map that encodes geographical location information as data in the GeoJSON format and marks it on the map. The GeoJSON marked map can help users display geographical location information more intuitively on the map, such as marking different locations, paths, and regions."),(0,n.yg)("h2",{id:"creating-a-map"},"Creating a Map"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a new report in Datafor and add a GeoJSON marked map component in the report's design mode. This will add a blank map to the canvas area of the report designer."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"1681887783802",src:t(5781).A,width:"1833",height:"857"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select Map Data"),(0,n.yg)("p",{parentName:"li"},"Select the required map JSON data from the data panel."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"image-20230419151149418",src:t(9227).A,width:"1835",height:"862"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Add Geographic Data Fields"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"1681888030553",src:t(8818).A,width:"1837",height:"871"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Customize Map Style\nYou can customize the style of the map according to your preferences, including background color, border lines, labels, etc."))),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"How do I match the names of my regions with the names of the regions in the GeoJSON file?"),(0,n.yg)("p",{parentName:"li"},'You can maintain the mapping between the names of the regions in your map and the data in the "key-value mapping table".'),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"image-20230419151212963",src:t(5025).A,width:"1838",height:"870"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Can I customize my own GeoJSON map?"),(0,n.yg)("p",{parentName:"li"},"Yes, you can contact Datafor to customize a GeoJSON map for you."),(0,n.yg)("p",{parentName:"li"},"Contact email: ",(0,n.yg)("a",{parentName:"p",href:"mailto:marketing@datafor.com.cn"},"marketing@datafor.com.cn")))))}d.isMDXComponent=!0},5781:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/1681887783802-12fd8b179f9cd9873d4cf1e00e33f2c8.png"},8818:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/1681888030553-8e251589179dae8b0281f371c30e680c.png"},9227:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/image-20230419151149418-32ab5ce9960c4b54774792ab698c927c.png"},5025:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/image-20230419151212963-a51e5f2b49436c678b177b97bc222985.png"}}]);