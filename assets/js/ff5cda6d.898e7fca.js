"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3680],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={id:"visualizer-setup",title:"Visualizer(Plugin for PBA) Setup",sidebar_position:40},o="Visualizer(Plugin for PBA) Setup Manual",p={unversionedId:"tutorials/20 setup/visualizer-setup",id:"tutorials/20 setup/visualizer-setup",title:"Visualizer(Plugin for PBA) Setup",description:"1. Unzip Visualizer.zip to the pentaho-solutions\\system directory",source:"@site/docs/tutorials/20 setup/60 Visualizer Setup Manual.md",sourceDirName:"tutorials/20 setup",slug:"/tutorials/20 setup/visualizer-setup",permalink:"/documentation/tutorials/20 setup/visualizer-setup",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/20 setup/60 Visualizer Setup Manual.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"visualizer-setup",title:"Visualizer(Plugin for PBA) Setup",sidebar_position:40},sidebar:"docsSidebar",previous:{title:"Datafor Installation (Ubuntu)",permalink:"/documentation/tutorials/20 setup/datafor-ubuntu"},next:{title:"Deploying Datafor Using Docker",permalink:"/documentation/tutorials/20 setup/datafor-docker"}},l={},s=[],u={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"visualizerplugin-for-pba-setup-manual"},"Visualizer(Plugin for PBA) Setup Manual"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Unzip ",(0,a.yg)("strong",{parentName:"p"},"Visualizer.zip")," to the ",(0,a.yg)("strong",{parentName:"p"},"pentaho-solutions\\system")," directory"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/1692584188749.png"})),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Note: If there is an old version of the Visualizer plugin in the system directory, it needs to be deleted; changing the folder name is also not allowed."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the ",(0,a.yg)("strong",{parentName:"p"},"ImportHandlerMimeTypeDefinitions.xml")," file in the ",(0,a.yg)("strong",{parentName:"p"},"pentaho-solutions\\system")," directory and add the following content."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"<extension>datafor</extension>\n")),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/image-20240117143902798.png"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the ",(0,a.yg)("strong",{parentName:"p"},"applicationContext-spring-security.xml")," file in the ",(0,a.yg)("strong",{parentName:"p"},"pentaho-solutions\\system")," directory."),(0,a.yg)("p",{parentName:"li"},"Add the following code under the ",(0,a.yg)("strong",{parentName:"p"},'bean id="filterInvocationInterceptor"')," node:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'<sec:intercept-url pattern="\\A/content/datafor/.*\\Z" access="Anonymous,Authenticated" />\n')),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/1705660701060-1705660868955-1.png"})),(0,a.yg)("p",{parentName:"li"}," Add the following code under the ",(0,a.yg)("strong",{parentName:"p"},'bean id="filterInvocationInterceptorForWS"')," node:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'<sec:intercept-url pattern="\\A/plugin/datafor/api/.*\\Z" access="Anonymous,Authenticated" />\n<sec:intercept-url pattern="\\A/plugin/datafor-modeler/api/.*\\Z" access="Anonymous,Authenticated" />\n')),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/image-20240117144417282.png"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the ",(0,a.yg)("strong",{parentName:"p"},"pentaho-solutions\\system")," directory, locate the ",(0,a.yg)("strong",{parentName:"p"},"server.properties")," file, and modify the value of ",(0,a.yg)("strong",{parentName:"p"},"fully-qualified-server-url")," according to the documentation instructions."),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/image-20240117144627174.png"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Installing Fonts (Only for Linux)"),(0,a.yg)("p",{parentName:"li"},"If you are unable to export Excel files, it may be because OpenJDK is in use, and the required fonts are not installed. Please execute the following command on the server as the root user to install the fonts."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"yum install fontconfig\nfc-cache --force\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Restart PBA"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{src:"../../../static/img/en/datafor/setup/1692583886673-1692584228417-11.png"})))))}g.isMDXComponent=!0}}]);