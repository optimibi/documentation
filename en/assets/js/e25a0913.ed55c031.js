"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[8821],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return o?a.createElement(f,r(r({ref:t},d),{},{components:o})):a.createElement(f,r({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4839:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const i={id:"visualizer-tjyssz",title:"Conditional color",sidebar_position:110},r="Conditional Colors",l={unversionedId:"60 visualizer/visualizer-tjyssz",id:"60 visualizer/visualizer-tjyssz",title:"Conditional color",description:"In Datafor, conditional colors are a powerful data visualization feature that allows users to set colors based on specific conditions. This helps quickly identify and analyze patterns and anomalies in the data. This document will explain in detail how to use conditional colors in Datafor.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/110 \u6761\u4ef6\u989c\u8272\u8bbe\u7f6e.md",sourceDirName:"60 visualizer",slug:"/60 visualizer/visualizer-tjyssz",permalink:"/docs/en/60 visualizer/visualizer-tjyssz",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/60 visualizer/110 \u6761\u4ef6\u989c\u8272\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{id:"visualizer-tjyssz",title:"Conditional color",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Component display in full screen",permalink:"/docs/en/60 visualizer/visuaalizer-zjqpms"},next:{title:"Parameter-Driven Tab Switching",permalink:"/docs/en/60 visualizer/visualization-parameter-driven"}},s={},c=[{value:"What are Conditional Colors?",id:"what-are-conditional-colors",level:2},{value:"Use Cases for Conditional Colors",id:"use-cases-for-conditional-colors",level:2},{value:"Setting Background or Font Colors",id:"setting-background-or-font-colors",level:2},{value:"Types of Conditional Colors",id:"types-of-conditional-colors",level:2},{value:"Color Scale Mode",id:"color-scale-mode",level:3},{value:"Rule-Based Mode",id:"rule-based-mode",level:3},{value:"Summary",id:"summary",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"conditional-colors"},"Conditional Colors"),(0,n.kt)("p",null,"In Datafor, conditional colors are a powerful data visualization feature that allows users to set colors based on specific conditions. This helps quickly identify and analyze patterns and anomalies in the data. This document will explain in detail how to use conditional colors in Datafor."),(0,n.kt)("h2",{id:"what-are-conditional-colors"},"What are Conditional Colors?"),(0,n.kt)("p",null,"Conditional colors refer to the automatic application of color formatting to elements in a chart (such as bars in a bar chart, lines in a line chart, cells in a table, etc.) based on data values or expression results. Through conditional colors, differences, trends, and anomalies in the data can be visually displayed."),(0,n.kt)("h2",{id:"use-cases-for-conditional-colors"},"Use Cases for Conditional Colors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Highlighting Key Data Points"),": For example, data points that exceed or fall below a certain threshold."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Showing Data Trends"),": For example, using color gradients to display trends in sales growth or decline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Comparing Data"),": For example, comparing data across different categories or regions.")),(0,n.kt)("h2",{id:"setting-background-or-font-colors"},"Setting Background or Font Colors"),(0,n.kt)("p",null,'To set background or font colors, select "Cell Font Conditional Color" or "Cell Background Conditional Color" from the measure menu.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113130143301.png",alt:"image-20230113130143301",width:"67%"})),(0,n.kt)("p",null,"The Background Color or Font Color dialog box opens with the name of the field being formatted in the title. Select Enable."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113130827348.png",width:"67%"})),(0,n.kt)("h2",{id:"types-of-conditional-colors"},"Types of Conditional Colors"),(0,n.kt)("h3",{id:"color-scale-mode"},"Color Scale Mode"),(0,n.kt)("p",null,"Setting conditional colors using the color scale mode is a common method that displays the range of data values through a gradient. Users can set the minimum and maximum values and choose corresponding colors."),(0,n.kt)("p",null,'To set cell background or font colors using the color scale mode, select "Color Scale" under "Conditional Type" in the "Background Color" or "Font Color" options. Under "Based on Field," choose the field you want to use as the basis for formatting. You can format based on other measure fields in the model.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113131505280.png",alt:"image-20230113131505280",width:"67%"})),(0,n.kt)("p",null,"Select measure and Min Color and Max Color."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113131619710.png",alt:"image-20230113131619710",width:"50%"})),(0,n.kt)("h3",{id:"rule-based-mode"},"Rule-Based Mode"),(0,n.kt)("p",null,"Setting conditional colors using the rule-based mode is suitable for scenarios where specific data points need to be highlighted. Users can set one or more specific values and assign a color to each value."),(0,n.kt)("p",null,'To set cell background or font colors using the rule-based mode, select "Rule-Based" under "Conditional Type" in the "Background Color" or "Font Color" options. Under "Based on Field," choose the field you want to use as the basis for formatting. You can format based on other measure fields in the model.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113132434829.png",width:"67%"})),(0,n.kt)("p",null,"In the Rule List, create one or more value ranges and set the color for each value range. The cell background or the font in each value range is colored with the given color."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/visualizer/image-20230113132458420.png",width:"50%"})),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"The conditional colors feature is an important visualization tool in Datafor that helps users better understand and analyze data. By flexibly applying conditional colors, data can be displayed more intuitively and clearly, thereby enhancing the effectiveness of data analysis."))}u.isMDXComponent=!0}}]);