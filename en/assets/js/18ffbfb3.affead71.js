"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5657],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(g,s(s({ref:t},m),{},{components:a})):r.createElement(g,s({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"visualization-parameter-driven",title:"Parameter-Driven Tab Switching",sidebar_position:120},s="Parameter-Driven Tab Switching",o={unversionedId:"60 visualizer/visualization-parameter-driven",id:"60 visualizer/visualization-parameter-driven",title:"Parameter-Driven Tab Switching",description:"Parameter-driven tab switching allows dynamic control over the display of tabs based on system parameters or user-defined parameters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/120 \u53c2\u6570\u9a71\u52a8Tabs\u7684\u663e\u793a.md",sourceDirName:"60 visualizer",slug:"/60 visualizer/visualization-parameter-driven",permalink:"/documentation/en/60 visualizer/visualization-parameter-driven",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/60 visualizer/120 \u53c2\u6570\u9a71\u52a8Tabs\u7684\u663e\u793a.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{id:"visualization-parameter-driven",title:"Parameter-Driven Tab Switching",sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"Conditional color",permalink:"/documentation/en/60 visualizer/visualizer-tjyssz"},next:{title:"Exploratory Analysis",permalink:"/documentation/en/70 analysis/analysis-overview"}},l={},p=[{value:"<strong>Types of Parameters</strong>",id:"types-of-parameters",level:2},{value:"<strong>Setting Up Parameter-Driven Tab Display</strong>",id:"setting-up-parameter-driven-tab-display",level:2},{value:"System Parameter-Driven:",id:"system-parameter-driven",level:3},{value:"Global Parameter-Driven:",id:"global-parameter-driven",level:3},{value:"<strong>Hiding the Tab Header</strong>",id:"hiding-the-tab-header",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameter-driven-tab-switching"},"Parameter-Driven Tab Switching"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter-driven tab switching")," allows dynamic control over the display of tabs based on system parameters or user-defined parameters."),(0,n.kt)("h2",{id:"types-of-parameters"},(0,n.kt)("strong",{parentName:"h2"},"Types of Parameters")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"System Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"User and Role-Based Visibility"),": Tabs can be controlled based on the user's identity or role. For example, only users with specific roles can see certain tabs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use Case"),": A dashboard with different departments (e.g., Sales, Finance) where each department's tabs are visible only to users in that department.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Global Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User-Defined Parameters"),": These parameters are set by users or administrators and determine which tabs are shown. The display of tabs dynamically changes based on user choices or specific conditions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use Case"),': Users can select a parameter (e.g., "Region") to control which tabs are displayed, such as tabs for different regions (e.g., APAC, North America, Europe).')))),(0,n.kt)("h2",{id:"setting-up-parameter-driven-tab-display"},(0,n.kt)("strong",{parentName:"h2"},"Setting Up Parameter-Driven Tab Display")),(0,n.kt)("h3",{id:"system-parameter-driven"},"System Parameter-Driven:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Define User Roles"),": Define user roles in the system settings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Assign Roles to Tabs"),": Configure which tabs are visible to each role."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select the tab component and choose "Settings" in the "Actions" panel.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/1721825271285.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Choose the "Role" system parameter and set the corresponding role in the tab\'s parameter value.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/1721825375906.png",width:"100%"})))))),(0,n.kt)("h3",{id:"global-parameter-driven"},"Global Parameter-Driven:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create Parameters"),': Define a global parameter called for example "Region".'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/1721825575928.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Assign Parameter Values to Tabs"),": Configure which tabs are visible based on the parameter values."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/1721825763898.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use a Parameter Controller to Change Parameter Values")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/tabs.gif",width:"100%"})))),(0,n.kt)("h2",{id:"hiding-the-tab-header"},(0,n.kt)("strong",{parentName:"h2"},"Hiding the Tab Header")),(0,n.kt)("p",null,"In many cases, parameter-driven tab switching may require hiding the tab component's header."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/1721820040925.png",width:"30%"})),(0,n.kt)("p",null,"The tab component's header can be hidden by setting the tab's style, allowing users to switch tabs only through parameter control, not manually."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/tabs_no_header.gif",width:"100%"})))}d.isMDXComponent=!0}}]);