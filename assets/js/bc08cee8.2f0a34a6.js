"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1037],{5680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>c});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=n,c=g["".concat(o,".").concat(u)]||g[u]||y[u]||i;return t?r.createElement(c,l(l({ref:a},m),{},{components:t})):r.createElement(c,l({ref:a},m))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[g]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1405:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(8168),n=(t(6540),t(5680));const i={id:"analysis-parameters",title:"Parameters",sidebar_position:100},l="Parameters",s={unversionedId:"tutorials/70 analysis/analysis-parameters",id:"tutorials/70 analysis/analysis-parameters",title:"Parameters",description:"Overview",source:"@site/docs/tutorials/70 analysis/100_\u53c2\u6570.md",sourceDirName:"tutorials/70 analysis",slug:"/tutorials/70 analysis/analysis-parameters",permalink:"/documentation/tutorials/70 analysis/analysis-parameters",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/70 analysis/100_\u53c2\u6570.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{id:"analysis-parameters",title:"Parameters",sidebar_position:100},sidebar:"docsSidebar",previous:{title:"Top/Bottom N",permalink:"/documentation/tutorials/70 analysis/sjfx-tsxz"},next:{title:"Aggregation",permalink:"/documentation/tutorials/70 analysis/sjfx-dlhz"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Creating Global Parameters",id:"creating-global-parameters",level:2},{value:"Creating Report Parameters",id:"creating-report-parameters",level:2},{value:"Using Parameters",id:"using-parameters",level:2},{value:"Using Parameters in Calculated Measures",id:"using-parameters-in-calculated-measures",level:3},{value:"Using Parameters in Component Titles",id:"using-parameters-in-component-titles",level:3},{value:"Switching Tabs with Parameters",id:"switching-tabs-with-parameters",level:3}],m={toc:p},g="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"parameters"},"Parameters"),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Datafor provides a powerful dynamic parameters feature that allows users to achieve flexible and interactive data analysis in reports and data models. Users can define parameters' names, data types, and value sources (such as manual input, list values, or query values), and use these parameters in the analysis model to filter data or create calculated fields. In reports, parameters can be used with parameter controllers, enabling users to dynamically change the display of data by adjusting parameter values in real-time, thus enhancing interactivity and personalization of the reports."),(0,n.yg)("p",null,"Datafor includes two types of parameters: ",(0,n.yg)("strong",{parentName:"p"},"Global Parameters")," and ",(0,n.yg)("strong",{parentName:"p"},"Report Parameters"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Global Parameters"),": Global parameters are defined within the analysis model or project and can be reused across multiple reports and analyses. Key features include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Unified Management"),": Global parameters can be centrally managed, and modifying a global parameter's value will update all instances where it is referenced."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Consistency"),": Ensures that the same parameter settings are used across different reports and analysis models, maintaining consistency.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Report Parameters"),": Report parameters are used exclusively within a specific report, with their scope limited to the report in which they are created. Key features include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Local Control"),": Report parameters are only effective within the specific report, and modifying a report parameter will only affect that report.")),(0,n.yg)("h2",{id:"creating-global-parameters"},"Creating Global Parameters"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the Global Parameters Management")),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722158454596.png",width:"100%"})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click the ",(0,n.yg)("inlineCode",{parentName:"p"},"New")," button"),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722158494698.png",width:"100%"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"In the ",(0,n.yg)("strong",{parentName:"p"},'"Manage Parameters"')," window that appears, fill in the following information:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Name"),": Provide a name for the parameter.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Description"),": Provide a description for the parameter.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Type"),": Select the data type for the parameter (e.g., Text, Number).")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Suggested Values"),": Choose the source of the parameter values:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Any Value"),": Manually input parameter values."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"List Values"),": Define a set of predefined values for users to choose from."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Query Values"),": Use the first column of a query result as the parameter values.")))),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160279827.png",width:"75%"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Save the Parameter"),(0,n.yg)("p",{parentName:"li"},"After completing the settings, click ",(0,n.yg)("strong",{parentName:"p"},'"OK"')," to save the parameter."))),(0,n.yg)("h2",{id:"creating-report-parameters"},"Creating Report Parameters"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Method 1"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Enter the Report Designer and select the \u201cParameter Management\u201d button on the toolbar."),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160320635.png",width:"100%"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'In the "Parameter Management" window that appears, select the "New" button.'),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160356099.png",width:"75%"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Follow steps 3 and 5 of creating a "Global Parameter" to create and save the parameter.'))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Method 2"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select the \u201cParameter Controller\u201d component."),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160386665.png",width:"35%"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Add the parameter controller to the canvas and click the "Select Parameter" button on the data panel.'))),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160409355.png",width:"75%"})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},'Select the "New Parameter" button.')),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160433034.png",width:"75%"})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},'Follow steps 3 and 5 of creating a "Global Parameter" to create and save the parameter.')),(0,n.yg)("h2",{id:"using-parameters"},"Using Parameters"),(0,n.yg)("h3",{id:"using-parameters-in-calculated-measures"},"Using Parameters in Calculated Measures"),(0,n.yg)("p",null,"In calculated measures, you can reference parameter values using the ParamRef function: ",(0,n.yg)("inlineCode",{parentName:"p"},'ParamRef("ParameterName")'),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"For example:")),(0,n.yg)("p",null,"Calculated Measure: Forecast Sales"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Formula"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-DAX"},'[Measures].[Last Year Sales] * ParamRef("Sales Growth Rate")\n')),(0,n.yg)("h3",{id:"using-parameters-in-component-titles"},"Using Parameters in Component Titles"),(0,n.yg)("p",null,'In component titles, reference parameters using: ${"ParameterName"}.'),(0,n.yg)("div",{align:"left"},(0,n.yg)("img",{src:"../../../static/img/en/datafor/analysis/1722160477723.png",width:"100%"})),(0,n.yg)("h3",{id:"switching-tabs-with-parameters"},"Switching Tabs with Parameters"),(0,n.yg)("p",null,"Refer to: ",(0,n.yg)("a",{parentName:"p",href:"https://datafor123.github.io/docs/60%20visualizer/visualization-parameter-driven"},"Parameter-driven Tab Switching")))}y.isMDXComponent=!0}}]);