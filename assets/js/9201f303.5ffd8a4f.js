"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3214:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={id:"ksrm-rhzzdygym",title:"First analysis report",sidebar_position:20},s="Make your first analysis report",o={unversionedId:"guides/10 start/ksrm-rhzzdygym",id:"guides/10 start/ksrm-rhzzdygym",title:"First analysis report",description:"You can create your first data analysis page in just three steps.",source:"@site/docs/guides/10 start/20 \u7b2c\u4e00\u4e2a\u9875\u9762.md",sourceDirName:"guides/10 start",slug:"/guides/10 start/ksrm-rhzzdygym",permalink:"/guides/10 start/ksrm-rhzzdygym",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/10 start/20 \u7b2c\u4e00\u4e2a\u9875\u9762.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"ksrm-rhzzdygym",title:"First analysis report",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"Basic Operations for Creating Pages",permalink:"/guides/10 start/start-design"},next:{title:"Computing environments",permalink:"/guides/20 setup/szybs-sjdsxhgl"}},l={},d=[{value:"1.  Connect the data source",id:"1--connect-the-data-source",level:2},{value:"2. Create an analysis model",id:"2-create-an-analysis-model",level:2},{value:"3. Create data analysis report",id:"3-create-data-analysis-report",level:2},{value:"Drag and drop components",id:"drag-and-drop-components",level:3},{value:"Set data",id:"set-data",level:3},{value:"Adjust style",id:"adjust-style",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"make-your-first-analysis-report"},"Make your first analysis report"),(0,r.kt)("p",null,"You can create your first data analysis page in just three steps."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110170823049.png",width:"67%"})),(0,r.kt)("h2",{id:"1--connect-the-data-source"},"1.  Connect the data source"),(0,r.kt)("p",null,"Connecting to a data source refers to establishing a connection between DATAFOR and your database (for example: PostgresSQL, Mysql, Oracle, SQL Server, etc.), so that DATAFOR can use and query the data in your database. This chapter takes the PostgresSQL database as an example. We assume that you already have a PostgresSQL database, and the data to be analyzed and displayed already exists in the database."),(0,r.kt)("p",null,'Select the "Datasource" menu in the menu navigation, and select the "PostgresSQL" data source in the data source on the right.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110171726026.png"})),(0,r.kt)("p",null,"Fill in the relevant information about the database connection, and save the connection after the connectivity test passes."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110171807169.png"})),(0,r.kt)("h2",{id:"2-create-an-analysis-model"},"2. Create an analysis model"),(0,r.kt)("p",null,'Select "Models" from the navigation menu and click "New Model"'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110171844979.png"})),(0,r.kt)("p",null,'Select "Connection or Dataset", specify Dimension Table and Fact Table'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110171957138.png"})),(0,r.kt)("p",null,'Drag the table fields to establish the relationship between the tables, or click the connection line and select "Edit" in the pop-up menu to modify the table relationship.\nSelect dimensions and fields on the Analytical Model panel to modify related properties.\nSave the model when finished.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110172118319.png"})),(0,r.kt)("h2",{id:"3-create-data-analysis-report"},"3. Create data analysis report"),(0,r.kt)("p",null,'In the "Private" or "Public" folder, click the "New Analysis Report" button.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110192903403.png"})),(0,r.kt)("h3",{id:"drag-and-drop-components"},"Drag and drop components"),(0,r.kt)("p",null,'Click the component icon in the "Components", and drag the component on the canvas.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110192706824.png"})),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110193014155.png"})),(0,r.kt)("h3",{id:"set-data"},"Set data"),(0,r.kt)("p",null,'Select the analysis model in the "Analysis Model" box of the data panel, and set the relevant data properties of the component. Components will query data and render graphics.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110193059983.png"})),(0,r.kt)("h3",{id:"adjust-style"},"Adjust style"),(0,r.kt)("p",null,"Drag and drop different components in the canvas, and set corresponding properties such as data and styles. We have completed the design of the first analysis report."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"/img/en/datafor/start/image-20230110193204722.png"})),(0,r.kt)("p",null,'Click the "Preview" button to view your first analysis report.'))}p.isMDXComponent=!0}}]);