"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"system-advanced-clear-repository",title:"Clearing Datafor Repository",sidebar_position:20},i="Clearing Datafor Repository",s={unversionedId:"guides/100 system/20 \u9ad8\u7ea7/system-advanced-clear-repository",id:"guides/100 system/20 \u9ad8\u7ea7/system-advanced-clear-repository",title:"Clearing Datafor Repository",description:"The Datafor repository (JCR) often retains a large amount of unused data after multiple migrations from the same repository. This leads to increased table sizes and a slowdown of the repository. You can clean up this unused data in the JCR by enabling a system listener designed for this purpose. Cleaning the JCR can only be done when no users are logged in, and the repository remains locked while the process is running.",source:"@site/docs/guides/100 system/20 \u9ad8\u7ea7/20 \u6e05\u7406 Datafor \u4ed3\u5e93.md",sourceDirName:"guides/100 system/20 \u9ad8\u7ea7",slug:"/guides/100 system/20 \u9ad8\u7ea7/system-advanced-clear-repository",permalink:"/guides/100 system/20 \u9ad8\u7ea7/system-advanced-clear-repository",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/guides/100 system/20 \u9ad8\u7ea7/20 \u6e05\u7406 Datafor \u4ed3\u5e93.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"system-advanced-clear-repository",title:"Clearing Datafor Repository",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"\u66f4\u6539\u7aef\u53e3\u548cURL",permalink:"/guides/100 system/20 \u9ad8\u7ea7/system-advanced-port-url"},next:{title:"Authorize user or role",permalink:"/guides/100 system/ststem-wyhhjssq"}},l={},p=[{value:"Steps:",id:"steps",level:3},{value:"Configuration Options:",id:"configuration-options",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clearing-datafor-repository"},"Clearing Datafor Repository"),(0,a.kt)("p",null,"The Datafor repository (JCR) often retains a large amount of unused data after multiple migrations from the same repository. This leads to increased table sizes and a slowdown of the repository. You can clean up this unused data in the JCR by enabling a system listener designed for this purpose. Cleaning the JCR can only be done when no users are logged in, and the repository remains locked while the process is running."),(0,a.kt)("h3",{id:"steps"},"Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Stop the Datafor server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"datafor-server/Datafor-solutions/system")," directory and open the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemListeners.xml")," file with any text editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add this bean as the last item within the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," tags"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="repositoryCleanerSystemListener" class="org.Datafor.platform.plugin.services.repository.RepositoryCleanerSystemListener">\n    <property name="gcEnabled" value="true"/>\n    <property name="execute" value="now"/>\n</bean>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save and close the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemListeners.xml")," file, then restart the Datafor server."))),(0,a.kt)("h3",{id:"configuration-options"},"Configuration Options:"),(0,a.kt)("p",null,"You can customize the settings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"repositoryCleanerSystemListener")," by editing these properties. It is recommended to clean up the Datafor repository on a regular schedule."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gcEnabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean flag to turn the listener On (true) or Off (false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"execute"),(0,a.kt)("td",{parentName:"tr",align:null},"You can choose when to run the listener: ",(0,a.kt)("inlineCode",{parentName:"td"},"now")," (runs once during server start-up), ",(0,a.kt)("inlineCode",{parentName:"td"},"weekly")," (runs on the first day of each week), ",(0,a.kt)("inlineCode",{parentName:"td"},"monthly")," (runs on the first day of each month).")))))}u.isMDXComponent=!0}}]);