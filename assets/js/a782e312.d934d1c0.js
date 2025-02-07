"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3260],{5680:(t,e,a)=>{a.d(e,{xA:()=>u,yg:()=>y});var r=a(6540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},g="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),g=s(a),c=n,y=g["".concat(l,".").concat(c)]||g[c]||d[c]||o;return a?r.createElement(y,i(i({ref:e},u),{},{components:a})):r.createElement(y,i({ref:e},u))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[g]="string"==typeof t?t:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},447:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const o={id:"datafor-ubuntu",title:"Datafor Installation (Ubuntu)",sidebar_position:35},i="Datafor Installation (Ubuntu)",p={unversionedId:"tutorials/20 setup/datafor-ubuntu",id:"tutorials/20 setup/datafor-ubuntu",title:"Datafor Installation (Ubuntu)",description:"Installation Steps",source:"@site/docs/tutorials/20 setup/30 Datefor\u5b89\u88c5(Ubuntu).md",sourceDirName:"tutorials/20 setup",slug:"/tutorials/20 setup/datafor-ubuntu",permalink:"/tutorials/20 setup/datafor-ubuntu",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/20 setup/30 Datefor\u5b89\u88c5(Ubuntu).md",tags:[],version:"current",sidebarPosition:35,frontMatter:{id:"datafor-ubuntu",title:"Datafor Installation (Ubuntu)",sidebar_position:35},sidebar:"docsSidebar",previous:{title:"Datafor Installation (Windows)",permalink:"/tutorials/20 setup/datafor-windows"},next:{title:"Visualizer(Plugin for PBA) Setup",permalink:"/tutorials/20 setup/visualizer-setup"}},l={},s=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Startup",id:"startup",level:2},{value:"Login",id:"login",level:2},{value:"Update the System",id:"update-the-system",level:2}],u={toc:s},g="wrapper";function d(t){let{components:e,...a}=t;return(0,n.yg)(g,(0,r.A)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"datafor-installation-ubuntu"},"Datafor Installation (Ubuntu)"),(0,n.yg)("h2",{id:"installation-steps"},"Installation Steps"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1. Switch to the root user")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo su  \n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171526492.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},'Step 2. Create the "datafor" user, and set the user password to "datafor" as well.')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"adduser datafor\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171542736.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},'Step 3. Create a user group and add the "datafor" user to the "datafor" user group.')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"addgroup datafor\naddgroup datafor datafor\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171600582.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 4. Navigate to the directory where the installation package is located and unzip the package to the /opt path.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"unzip -o datafor-server_202203210834.zip -d /opt/\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171613825.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 5. After the extraction is complete, go to the /opt/ directory and modify permissions.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cd /opt/\nchmod -R 700 datafor-server\nchown -R datafor datafor-server\nchgrp -R datafor datafor-server\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171632512.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Installation Completed")),(0,n.yg)("p",null,"Start or stop the service, refer to daily startup procedures."),(0,n.yg)("h2",{id:"startup"},"Startup"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},'For daily startup and shutdown, please perform the operations using the "datafor" user.')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"su datafor\ncd /opt/datafor-server/\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Start the service")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"./start-datafor.sh\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171648174.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Stop the service")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"./stop-datafor.sh\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171701208.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Check the status of the service startup and shutdown")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ps -ef|grep tomcat\n")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/datafor/setup/image-20220829171716368.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"If the command outputs as above, it indicates that the service is in a running state.")),(0,n.yg)("h2",{id:"login"},"Login"),(0,n.yg)("p",null,"URL:  ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:28080/")),(0,n.yg)("p",null,"username  /  password"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"admin")," / ",(0,n.yg)("inlineCode",{parentName:"li"},"password")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"demo")," / ",(0,n.yg)("inlineCode",{parentName:"li"},"demo"))),(0,n.yg)("h2",{id:"update-the-system"},"Update the System"),(0,n.yg)("p",null,"Place the update package ",(0,n.yg)("inlineCode",{parentName:"p"},"datafor-upload.jar")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"datafor-server\\update")," folder and restart the system."))}d.isMDXComponent=!0}}]);