"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4676],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return t?n.createElement(g,s(s({ref:a},l),{},{components:t})):n.createElement(g,s({ref:a},l))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const r={id:"map-gisbjdt",title:"GIS marked map",sidebar_position:30},s="GIS Marked Map",o={unversionedId:"guides/60 visualizer/40 map/map-gisbjdt",id:"guides/60 visualizer/40 map/map-gisbjdt",title:"GIS marked map",description:"GIS (Geographic Information System) marked map is used to visualize data on a map, so that users can have a more intuitive understanding of data distribution and spatial relationships, while providing more precise analysis and decision support. GIS marked maps can help users better understand geographic data, including location, region, and geographic features, as well as their relationships with other data.",source:"@site/docs/guides/60 visualizer/40 map/GIS\u6807\u8bb0\u5730\u56fe.md",sourceDirName:"guides/60 visualizer/40 map",slug:"/guides/60 visualizer/40 map/map-gisbjdt",permalink:"/guides/60 visualizer/40 map/map-gisbjdt",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/60 visualizer/40 map/GIS\u6807\u8bb0\u5730\u56fe.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"map-gisbjdt",title:"GIS marked map",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"GeoJSON marked map",permalink:"/guides/60 visualizer/40 map/map-geojsonmarked"},next:{title:"Image Map",permalink:"/guides/60 visualizer/40 map/map-image-marker"}},d={},p=[{value:"When to Use GIS Maps",id:"when-to-use-gis-maps",level:2},{value:"Creating a GIS Marked Map",id:"creating-a-gis-marked-map",level:2},{value:"Changing the Map Engine",id:"changing-the-map-engine",level:2}],l={toc:p};function c(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gis-marked-map"},"GIS Marked Map"),(0,i.kt)("p",null,"GIS (Geographic Information System) marked map is used to visualize data on a map, so that users can have a more intuitive understanding of data distribution and spatial relationships, while providing more precise analysis and decision support. GIS marked maps can help users better understand geographic data, including location, region, and geographic features, as well as their relationships with other data."),(0,i.kt)("p",null,"By combining data and maps, users can quickly discover the geographic location and spatial trends of data, and better understand the interactions and relationships between data. In addition, GIS marked maps can help users discover trends and patterns in data, as well as changes in specific locations."),(0,i.kt)("p",null,"In the business and government sectors, GIS marked maps are widely used in visualizing market and customer distribution, resource management, urban planning, environmental monitoring, and natural disaster response, among other areas."),(0,i.kt)("h2",{id:"when-to-use-gis-maps"},"When to Use GIS Maps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compare indicators across geographic areas."),(0,i.kt)("li",{parentName:"ul"},"Obtain an overview of the distribution of geographic locations.")),(0,i.kt)("h2",{id:"creating-a-gis-marked-map"},"Creating a GIS Marked Map"),(0,i.kt)("p",null,'Bind the "geographic field", such as city names, or any geographic name, or longitude and latitude information to the "longitude" and "latitude" data blocks. If the dataset used contains longitude and latitude fields, use them instead. Longitude and latitude information provides more precise location information and eliminates the need for back-end geocoding processes.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1681820210658",src:t(8147).Z,width:"1838",height:"851"})),(0,i.kt)("p",null,'For example, bind the "country" field to the "Location", and select the "sales" measurement field.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1681821106251",src:t(8843).Z,width:"1840",height:"866"})),(0,i.kt)("h2",{id:"changing-the-map-engine"},"Changing the Map Engine"),(0,i.kt)("p",null,"The default map engine is Open Street Map. The GIS systems supported by Datafor include: Amap, Baidu Map, Open Street Map, Google Map, etc. You can configure and modify the map engine in the map configuration file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1681821209858",src:t(7111).Z,width:"1833",height:"835"})))}c.isMDXComponent=!0},8147:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1681820210658-83e884d90d950bf27fcef53e7d9c0561.png"},8843:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1681821106251-30ae5bd45f8bc1309e3ccac516ff9b46.png"},7111:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1681821209858-d6491267c7b5cdbf4ca7da823fc626e8.png"}}]);