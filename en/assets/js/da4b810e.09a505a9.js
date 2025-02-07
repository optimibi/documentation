"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[9719],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7993:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={id:"datafor-centos",title:"Datafor Installation (CentOS)",sidebar_position:20},i="Datafor Installation (CentOS)",p={unversionedId:"20 setup/datafor-centos",id:"20 setup/datafor-centos",title:"Datafor Installation (CentOS)",description:"Step 1. Switch to the root user",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20 setup/20 Datefor\u5b89\u88c5(Centos).md",sourceDirName:"20 setup",slug:"/20 setup/datafor-centos",permalink:"/docs/en/20 setup/datafor-centos",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/20 setup/20 Datefor\u5b89\u88c5(Centos).md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"datafor-centos",title:"Datafor Installation (CentOS)",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Computing environments",permalink:"/docs/en/20 setup/szybs-sjdsxhgl"},next:{title:"Datafor Installation (Windows)",permalink:"/docs/en/20 setup/datafor-windows"}},s={},l=[{value:"Start Datafor",id:"start-datafor",level:2},{value:"Login",id:"login",level:2},{value:"Update the System",id:"update-the-system",level:2}],d={toc:l};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datafor-installation-centos"},"Datafor Installation (CentOS)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1. Switch to the root user")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo su root\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172346058.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2. Create the 'datafor' user group")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"groupadd datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172418679.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3. Create the 'datafor' user, add it to the 'datafor' user group, and set the user password to 'datafor' as well.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"adduser datafor -g datafor\npasswd datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172434849.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4. Navigate to the directory containing the installation package and extract the package to the /opt directory.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"unzip -o datafor-server_202203240605.zip -d /opt/\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172446528.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5. After extracting, go to the /opt/ directory and modify permissions.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /opt/\nchmod -R 700 datafor-server\nchown -R datafor datafor-server\nchgrp -R datafor datafor-server\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172501348.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Installation completed.")),(0,n.kt)("h2",{id:"start-datafor"},"Start Datafor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please operate as the 'datafor' user")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"su datafor\ncd /opt/datafor-server/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Start the service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./start-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172513074.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stop Service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./stop-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172525119.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check Service Start/Stop Status")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ps -ef|grep tomcat\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/image-20220829172541387.png"})),(0,n.kt)("p",null,"If the command produces the above output, it indicates that the service is in a running state."),(0,n.kt)("h2",{id:"login"},"Login"),(0,n.kt)("p",null,"URL:  ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:28080/")),(0,n.kt)("p",null,"username  /  password"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"admin")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"password")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"demo")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"demo"))),(0,n.kt)("h2",{id:"update-the-system"},"Update the System"),(0,n.kt)("p",null,"Place the update package ",(0,n.kt)("inlineCode",{parentName:"p"},"datafor-upload.jar")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"datafor-server\\update")," folder and restart the system."))}c.isMDXComponent=!0}}]);