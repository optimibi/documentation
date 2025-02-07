"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[9220],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},248:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"sjy-cjsjklj",title:"Create database connection",sidebar_position:30},i="Create database connection",l={unversionedId:"guides/40 datasource/sjy-cjsjklj",id:"guides/40 datasource/sjy-cjsjklj",title:"Create database connection",description:'Datafor supports data from a variety of data sources. If your data source is a database, connect to the database before accessing the data. Define the database connection through the "Datasource" of Datafor.',source:"@site/docs/guides/40 datasource/30 \u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5.md",sourceDirName:"guides/40 datasource",slug:"/guides/40 datasource/sjy-cjsjklj",permalink:"/documentation/guides/40 datasource/sjy-cjsjklj",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/40 datasource/30 \u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"sjy-cjsjklj",title:"Create database connection",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"JDBC Driver Management",permalink:"/documentation/guides/40 datasource/datasource-JDBC-driver"},next:{title:"JDBC Timezone Setting",permalink:"/documentation/guides/40 datasource/datasource-sqsz"}},c={},s=[{value:"Select the database type",id:"select-the-database-type",level:2},{value:"Create connection",id:"create-connection",level:2},{value:"&quot;Advanced&quot; configuration items",id:"advanced-configuration-items",level:2},{value:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7279\u5b9a\u9009\u9879",id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7279\u5b9a\u9009\u9879",level:2},{value:"\u5b9a\u4e49\u8fde\u63a5\u6c60",id:"\u5b9a\u4e49\u8fde\u63a5\u6c60",level:2}],d={toc:s};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-database-connection"},"Create database connection"),(0,r.kt)("p",null,'Datafor supports data from a variety of data sources. If your data source is a database, connect to the database before accessing the data. Define the database connection through the "Datasource" of Datafor.'),(0,r.kt)("h2",{id:"select-the-database-type"},"Select the database type"),(0,r.kt)("p",null,'Click the "Data Connection" menu to enter the data connection management interface.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112172557302.png"})),(0,r.kt)("p",null,"Click the icon of the database type to be connected."),(0,r.kt)("h2",{id:"create-connection"},"Create connection"),(0,r.kt)("p",null,"Different databases have different configuration items. Here we use MySql as an example to illustrate how to establish a connection."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Enter the connection information under the "Basic Configuration" tab of the connection configuration page'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112173021914.png",width:"60%"})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Name"),(0,r.kt)("td",{parentName:"tr",align:null},"A name that uniquely describes this connection. The name can contain spaces, but no special characters (such as #, $, and %)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the server for the database. Alternatively, specify the host by IP address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database. If you are using an ODBC connection, enter a data source name (DSN) in this field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port number"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/IP port number (if it differs from default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username to connect to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password to connect to the database")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Test Connectivity. If a connection is established, a success message will be displayed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save to close the Connection Test dialog."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112173614873.png"})))),(0,r.kt)("h2",{id:"advanced-configuration-items"},'"Advanced" configuration items'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the "Advanced" tab of the connection configuration page'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112174440779.png",width:"60%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the SQL statement"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL Statement"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the SQL statement used to initialize this connection.")))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7279\u5b9a\u9009\u9879"},"\u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u7279\u5b9a\u9009\u9879"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112174901748.png",width:"60%"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the "Options" tab of the connection configuration page')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click the "Add" button to add parameter input items')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Enter the parameter name in the "Parameter" input box, and enter the parameter value in the "Value" input box'))),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u8fde\u63a5\u6c60"},"\u5b9a\u4e49\u8fde\u63a5\u6c60"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../..//documentation/img/en/datafor/datasource/image-20230112175039129.png",width:"60%"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Select the "Connection Pool" tab of the connection configuration page'),(0,r.kt)("li",{parentName:"ol"},'Turn on the "Use connection pool" switch'),(0,r.kt)("li",{parentName:"ol"},"Enter the connection pool configuration parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option ","\u2003","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable connection pooling","\xa0"," ","\xa0","\xa0"," ","\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable connection pooling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pool Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Sets the initial size of the connection pool. Maximum sets the maximum number of connections in the connection pool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"You can define additional custom pool parameters. Click on any parameter to view a short description of that parameter. The most commonly used parameter is validationQuery. This parameter varies slightly depending on your RDBMS connection. The base database uses the following values for validation queries: ",(0,r.kt)("strong",{parentName:"td"},"Select 1 from dual")," for Oracle and PostgreSQL. For MS SQL Server and MySQL, use ",(0,r.kt)("strong",{parentName:"td"},"Select 1"),".")))))}u.isMDXComponent=!0}}]);