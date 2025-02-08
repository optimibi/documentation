"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"share-XDM",title:"Embedding Reports with XDM",sidebar_position:30},o="Embedding Reports Using XDM",p={unversionedId:"guides/80 share/share-XDM",id:"guides/80 share/share-XDM",title:"Embedding Reports with XDM",description:"Note:",source:"@site/docs/guides/80 share/XDM.md",sourceDirName:"guides/80 share",slug:"/guides/80 share/share-XDM",permalink:"/documentation/guides/80 share/share-XDM",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/guides/80 share/XDM.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"share-XDM",title:"Embedding Reports with XDM",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"Share link",permalink:"/documentation/guides/80 share/jcyfx-fxlj"},next:{title:"Export",permalink:"/documentation/guides/80 share/share-export"}},l={},s=[{value:"What is XDM (Cross-Document Messaging)?",id:"what-is-xdm-cross-document-messaging",level:2},{value:"Application Scenarios:",id:"application-scenarios",level:2},{value:"Steps:",id:"steps",level:2},{value:"<strong>Importing the <code>XDMWorker</code> Class in the Main Program:</strong>",id:"importing-the-xdmworker-class-in-the-main-program",level:3},{value:"Scenario 1: Passing Parameters to the Report During Initial Loading to Filter Data",id:"scenario-1-passing-parameters-to-the-report-during-initial-loading-to-filter-data",level:3},{value:"Scenario 2: Changing Parameter Values in the Web Application After the Report Has Loaded to Filter Data (Without Reloading the Report)",id:"scenario-2-changing-parameter-values-in-the-web-application-after-the-report-has-loaded-to-filter-data-without-reloading-the-report",level:3},{value:"How to Obtain the <code>uniqueName</code> of Analytical Model Fields?",id:"how-to-obtain-the-uniquename-of-analytical-model-fields",level:2},{value:"Sample Project",id:"sample-project",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embedding-reports-using-xdm"},"Embedding Reports Using XDM"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),'\nThe term "',(0,n.kt)("strong",{parentName:"p"},"report"),'" in this document refers to the visual reports created using Datafor or the Visualizer plugin.')),(0,n.kt)("p",null,"Reports support XDM (Cross-Document Messaging) for filtering report data without refreshing the report page. XDM allows control over the report's data filtering, styles, and behavior; however, this document focuses solely on data filtering scenarios."),(0,n.kt)("h2",{id:"what-is-xdm-cross-document-messaging"},"What is XDM (Cross-Document Messaging)?"),(0,n.kt)("p",null,"XDM (Cross-Document Messaging) is a technology that allows secure communication between different web pages or applications from different origins (such as different domains or subdomains). Typically, browsers restrict different-origin pages from accessing each other's content to protect user privacy and security. However, in some cases, such as when embedding external content, different-origin pages need to communicate, and XDM can be used for this purpose."),(0,n.kt)("p",null,"Web applications use the ",(0,n.kt)("inlineCode",{parentName:"p"},"postMessage")," API to communicate with the report, sending parameter values to the report. The report then distributes these parameter values as filters to the individual chart components, which re-query data to achieve the filtering effect."),(0,n.kt)("p",null,"XDM enables cross-origin communication between web pages without compromising browser security."),(0,n.kt)("h2",{id:"application-scenarios"},"Application Scenarios:"),(0,n.kt)("p",null,"When embedding a report within a web application using an iframe, the following scenarios may arise:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Passing parameters to the report during initial loading to filter report data."),(0,n.kt)("li",{parentName:"ol"},"Changing parameter values in the web application after the report has loaded and passing these values to the report to filter data (without reloading the report).")),(0,n.kt)("h2",{id:"steps"},"Steps:"),(0,n.kt)("h3",{id:"importing-the-xdmworker-class-in-the-main-program"},(0,n.kt)("strong",{parentName:"h3"},"Importing the ",(0,n.kt)("inlineCode",{parentName:"strong"},"XDMWorker")," Class in the Main Program:")),(0,n.kt)("p",null,"In the main program that calls the report, add the following ",(0,n.kt)("inlineCode",{parentName:"p"},"XDMWorker")," class to facilitate the forwarding of ",(0,n.kt)("inlineCode",{parentName:"p"},"XDM")," messages. The main program can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"send")," method of this class to pass filter parameters to the report."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"class XDMWorker {\n    constructor({ onPageInitEvent = () => { } }) {\n        this.reportId = null;\n        window.addEventListener('message', (msg) => {\n            const { data } = msg;\n            let reportMessage;\n            try { reportMessage = JSON.parse(data); } catch (d) { }\n            if (reportMessage) {\n                if (reportMessage.event == 'visualizerReportFileLoaded') {\n                    this.reportId = reportMessage.id;\n                    onPageInitEvent();\n                }\n            }\n        });\n    }\n\n    send(data, target, init = false) {\n        if (!this.reportId) {\n            console.error('No reportId found, please wait for the report to be loaded');\n            return;\n        }\n        const message = {\n            trustMark: this.reportId,\n            event: 'query',\n            init,\n            filters: data,\n        };\n        target?.postMessage(JSON.stringify(message), '*');\n    }\n}\n")),(0,n.kt)("h3",{id:"scenario-1-passing-parameters-to-the-report-during-initial-loading-to-filter-data"},"Scenario 1: Passing Parameters to the Report During Initial Loading to Filter Data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Initialize an XDMWorker Object Before Calling the Report:")),(0,n.kt)("p",{parentName:"li"},"Before calling the report, initialize an ",(0,n.kt)("inlineCode",{parentName:"p"},"XDMWorker")," object. To filter report data during the initial load, call the ",(0,n.kt)("inlineCode",{parentName:"p"},"send")," method within the ",(0,n.kt)("inlineCode",{parentName:"p"},"onPageInitEvent")," event, setting the third parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"const xdm = new XDMWorker({\n    onPageInitEvent: () => {\n       iframeRef?.current && xdm.send(\n               [\n                  {\n                    value: [\n                      'product_family_1', \n                      'product_family_2' \n                    ],  \n                    name: '[product_class].[hierarchy_product_family].[product_family]',  \n                    type: 'name',  \n                    datatype: 'string'  \n                  }\n               ], \n               iframeRef.current?.contentWindow, \n               true  \n           );\n    }\n});\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameter Description:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[{\n    value: [\n        [\n            {i: 0|1, v: string},  \n            {i: 0|1, v: string}\n        ], \n        string,  \n    ],  \n    name: string,  \n    type: 'name'|'caption',  \n    datatype: 'string'|'numeric'|'timestamp'  \n}]\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"value:")," Parameter values from the web application.")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x in ('a', 'b', 'c')"),(0,n.kt)("td",{parentName:"tr",align:null},"{'value':","['a', 'b', 'c']",",'datatype':'string'}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x >= 1 and x < 3"),(0,n.kt)("td",{parentName:"tr",align:null},"{'value':","[{'i':'1','v':'1'},{'i':'0','v':'3'}]",",'datatype':'numeric'}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x between (2, 5) or x between (4, 6)"),(0,n.kt)("td",{parentName:"tr",align:null},"{'value':[","['2', '5']",", ","['4', '6']","],'datatype':'numeric'}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x between (2, 5) or x between (4, 6) or x in (7, 8)"),(0,n.kt)("td",{parentName:"tr",align:null},"{'value':[","['2', '5']",", ","['4', '6']",", '7', '8'],'datatype':'numeric'}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x >= '2024-01-01 00:00:00+8' and x < '2025-01-01 00:00:00+8'"),(0,n.kt)("td",{parentName:"tr",align:null},"{'value':","[{'i':'1','v':'1704038400'},{'i':'0','v':'1735660800'}]",",'datatype':'timestamp'}")))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name:")," The unique name of the field in the report\u2019s analytical model."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:")," Specifies whether the parameter value is applied to the field\u2019s name or caption."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"datatype:")," The data type of the filter value."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call the Report")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Obtain the report's embedding mode URL."),(0,n.kt)("p",{parentName:"li"},"[Reference Document]","(",(0,n.kt)("a",{parentName:"p",href:"https://help.datafor.com.cn/docs/en/80"},"https://help.datafor.com.cn/docs/en/80")," share/jcyfx-report-api)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Add a "delay time parameter" to the report URL:'),(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("strong",{parentName:"p"},"delay time parameter")," ",(0,n.kt)("inlineCode",{parentName:"p"},"__xdmTimeout=150")," to the report link, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:28080/datafor/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==?__xdmTimeout=150"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\n",(0,n.kt)("strong",{parentName:"p"},'What is the "delay time parameter"?')," After the report is opened, it will broadcast a report initialization message and wait for 150ms. If a valid response is received within the wait time, the parameters in the response are used as the initial data filter values. You can adjust this delay time based on the main program\u2019s response speed. If data filtering is not required during the initial report load, this parameter can be omitted.")))))),(0,n.kt)("h3",{id:"scenario-2-changing-parameter-values-in-the-web-application-after-the-report-has-loaded-to-filter-data-without-reloading-the-report"},"Scenario 2: Changing Parameter Values in the Web Application After the Report Has Loaded to Filter Data (Without Reloading the Report)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call the send Method")),(0,n.kt)("p",{parentName:"li"},"After the report page is opened, if you need to pass parameter values from the web application to the report, you can call the send method in the main program. The report will immediately respond and re-query the data.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"send Method Call Format:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"send(message, target)\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameter Description:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"message:")," The filter parameters in the following format:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[{\n    value: [\n        [\n            {i: 0|1, v: string},  \n            {i: 0|1, v: string}\n        ], \n        string,  \n    ],  \n    name: string,  \n    type: 'name'|'caption',  \n    datatype: 'string'|'numeric'|'timestamp'  \n}]\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"target:")," The window object of the iframe where the report is opened."))))),(0,n.kt)("h2",{id:"how-to-obtain-the-uniquename-of-analytical-model-fields"},"How to Obtain the ",(0,n.kt)("inlineCode",{parentName:"h2"},"uniqueName")," of Analytical Model Fields?"),(0,n.kt)("p",null,"In the report designer, when selecting analytical model fields, you can view the ",(0,n.kt)("inlineCode",{parentName:"p"},"uniqueName")," through the tooltip."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"uniqueName")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"product_department")," field in the image below is ",(0,n.kt)("inlineCode",{parentName:"p"},"[product_class].[product_department].[product_department]"),"."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/documentation/img/en/datafor/share/1723711770233.png",width:"63%"})),(0,n.kt)("h2",{id:"sample-project"},"Sample Project"),(0,n.kt)("p",null,"Please refer to the sample project: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datafor123/visualizer-xdm-demo"},"https://github.com/datafor123/visualizer-xdm-demo")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/documentation/img/en/datafor/advanced/1721293514716.png",width:"100%"})))}m.isMDXComponent=!0}}]);