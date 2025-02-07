"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={id:"datasource-sqsz",title:"JDBC Timezone Setting",sidebar_position:40},r="JDBC Timezone Setting",s={unversionedId:"guides/40 datasource/datasource-sqsz",id:"guides/40 datasource/datasource-sqsz",title:"JDBC Timezone Setting",description:"When using JDBC to connect to a database in Datafor, timezone issues can lead to inconsistencies and confusion with time data. To resolve this, you can ensure the timezone is set correctly and displayed consistently in Datafor by following these steps.",source:"@site/docs/guides/40 datasource/40 \u65f6\u533a\u8bbe\u7f6e.md",sourceDirName:"guides/40 datasource",slug:"/guides/40 datasource/datasource-sqsz",permalink:"/documentation/guides/40 datasource/datasource-sqsz",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/40 datasource/40 \u65f6\u533a\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"datasource-sqsz",title:"JDBC Timezone Setting",sidebar_position:40},sidebar:"docsSidebar",previous:{title:"Create database connection",permalink:"/documentation/guides/40 datasource/sjy-cjsjklj"},next:{title:"File dataset",permalink:"/documentation/guides/40 datasource/sjy-wjsjy"}},c={},u=[{value:"1. Why Set JDBC Timezone",id:"1-why-set-jdbc-timezone",level:3},{value:"2. Configuring Datafor Data Source Timezone",id:"2-configuring-datafor-data-source-timezone",level:3},{value:"3. Verify Timezone Setting",id:"3-verify-timezone-setting",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:u};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jdbc-timezone-setting"},"JDBC Timezone Setting"),(0,i.kt)("p",null,"When using JDBC to connect to a database in Datafor, timezone issues can lead to inconsistencies and confusion with time data. To resolve this, you can ensure the timezone is set correctly and displayed consistently in Datafor by following these steps."),(0,i.kt)("h3",{id:"1-why-set-jdbc-timezone"},"1. Why Set JDBC Timezone"),(0,i.kt)("p",null,"In applications spanning multiple time zones, incorrect timezone settings can lead to confusion with time data. For instance, timestamp data may differ during storage and retrieval. Setting the JDBC timezone ensures consistency between the client and the database server."),(0,i.kt)("h3",{id:"2-configuring-datafor-data-source-timezone"},"2. Configuring Datafor Data Source Timezone"),(0,i.kt)("p",null,'Add a new parameter in the "options" section of the database connection configuration to set the timezone parameter and value.'),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/1681220004076.png",width:"60%"})),(0,i.kt)("h3",{id:"3-verify-timezone-setting"},"3. Verify Timezone Setting"),(0,i.kt)("p",null,"After configuring the timezone setting, ensure that the time data is displayed correctly:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create time-related visualizations in Datafor."),(0,i.kt)("li",{parentName:"ol"},"Confirm that the time data matches expectations.")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"By properly setting and adjusting the timezone, you can ensure the consistency and accuracy of time data in Datafor."))}l.isMDXComponent=!0}}]);