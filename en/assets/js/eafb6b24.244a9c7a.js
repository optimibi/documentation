"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,g=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"analysis-parameters",title:"Parameters",sidebar_position:100},l="Parameters",s={unversionedId:"70 analysis/analysis-parameters",id:"70 analysis/analysis-parameters",title:"Parameters",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/100_\u53c2\u6570.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-parameters",permalink:"/docs/en/70 analysis/analysis-parameters",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/70 analysis/100_\u53c2\u6570.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{id:"analysis-parameters",title:"Parameters",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Top/Bottom N",permalink:"/docs/en/70 analysis/sjfx-tsxz"},next:{title:"Aggregation",permalink:"/docs/en/70 analysis/sjfx-dlhz"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Creating Global Parameters",id:"creating-global-parameters",level:2},{value:"Creating Report Parameters",id:"creating-report-parameters",level:2},{value:"Using Parameters",id:"using-parameters",level:2},{value:"Using Parameters in Calculated Measures",id:"using-parameters-in-calculated-measures",level:3},{value:"Using Parameters in Component Titles",id:"using-parameters-in-component-titles",level:3},{value:"Switching Tabs with Parameters",id:"switching-tabs-with-parameters",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameters"},"Parameters"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Datafor provides a powerful dynamic parameters feature that allows users to achieve flexible and interactive data analysis in reports and data models. Users can define parameters' names, data types, and value sources (such as manual input, list values, or query values), and use these parameters in the analysis model to filter data or create calculated fields. In reports, parameters can be used with parameter controllers, enabling users to dynamically change the display of data by adjusting parameter values in real-time, thus enhancing interactivity and personalization of the reports."),(0,n.kt)("p",null,"Datafor includes two types of parameters: ",(0,n.kt)("strong",{parentName:"p"},"Global Parameters")," and ",(0,n.kt)("strong",{parentName:"p"},"Report Parameters"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Global Parameters"),": Global parameters are defined within the analysis model or project and can be reused across multiple reports and analyses. Key features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unified Management"),": Global parameters can be centrally managed, and modifying a global parameter's value will update all instances where it is referenced."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Consistency"),": Ensures that the same parameter settings are used across different reports and analysis models, maintaining consistency.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Report Parameters"),": Report parameters are used exclusively within a specific report, with their scope limited to the report in which they are created. Key features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Local Control"),": Report parameters are only effective within the specific report, and modifying a report parameter will only affect that report.")),(0,n.kt)("h2",{id:"creating-global-parameters"},"Creating Global Parameters"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Global Parameters Management")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722158454596.png",width:"100%"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"New")," button"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722158494698.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},'"Manage Parameters"')," window that appears, fill in the following information:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Name"),": Provide a name for the parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description"),": Provide a description for the parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": Select the data type for the parameter (e.g., Text, Number).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Suggested Values"),": Choose the source of the parameter values:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Any Value"),": Manually input parameter values."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"List Values"),": Define a set of predefined values for users to choose from."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Query Values"),": Use the first column of a query result as the parameter values.")))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160279827.png",width:"75%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the Parameter"),(0,n.kt)("p",{parentName:"li"},"After completing the settings, click ",(0,n.kt)("strong",{parentName:"p"},'"OK"')," to save the parameter."))),(0,n.kt)("h2",{id:"creating-report-parameters"},"Creating Report Parameters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method 1"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the Report Designer and select the \u201cParameter Management\u201d button on the toolbar."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160320635.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In the "Parameter Management" window that appears, select the "New" button.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160356099.png",width:"75%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Follow steps 3 and 5 of creating a "Global Parameter" to create and save the parameter.'))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method 2"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the \u201cParameter Controller\u201d component."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160386665.png",width:"35%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Add the parameter controller to the canvas and click the "Select Parameter" button on the data panel.'))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160409355.png",width:"75%"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},'Select the "New Parameter" button.')),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160433034.png",width:"75%"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'Follow steps 3 and 5 of creating a "Global Parameter" to create and save the parameter.')),(0,n.kt)("h2",{id:"using-parameters"},"Using Parameters"),(0,n.kt)("h3",{id:"using-parameters-in-calculated-measures"},"Using Parameters in Calculated Measures"),(0,n.kt)("p",null,"In calculated measures, you can reference parameter values using the ParamRef function: ",(0,n.kt)("inlineCode",{parentName:"p"},'ParamRef("ParameterName")'),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For example:")),(0,n.kt)("p",null,"Calculated Measure: Forecast Sales"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Formula"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-DAX"},'[Measures].[Last Year Sales] * ParamRef("Sales Growth Rate")\n')),(0,n.kt)("h3",{id:"using-parameters-in-component-titles"},"Using Parameters in Component Titles"),(0,n.kt)("p",null,'In component titles, reference parameters using: ${"ParameterName"}.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722160477723.png",width:"100%"})),(0,n.kt)("h3",{id:"switching-tabs-with-parameters"},"Switching Tabs with Parameters"),(0,n.kt)("p",null,"Refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://datafor123.github.io/docs/60%20visualizer/visualization-parameter-driven"},"Parameter-driven Tab Switching")))}c.isMDXComponent=!0}}]);