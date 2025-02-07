"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"datafor-docker",title:"Deploying Datafor Using Docker",sidebar_position:50},i="Deploying Datafor Using Docker",l={unversionedId:"20 setup/datafor-docker",id:"20 setup/datafor-docker",title:"Deploying Datafor Using Docker",description:"Datafor can be easily deployed using Docker. This guide provides the steps and commands to deploy the free version of Datafor.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20 setup/50 Docker\u90e8\u7f72Datafor.md",sourceDirName:"20 setup",slug:"/20 setup/datafor-docker",permalink:"/docs/en/20 setup/datafor-docker",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/20 setup/50 Docker\u90e8\u7f72Datafor.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"datafor-docker",title:"Deploying Datafor Using Docker",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Visualizer(Plugin for PBA) Setup",permalink:"/docs/en/20 setup/visualizer-setup"},next:{title:"Modeler(Plugin for PBA) Setup",permalink:"/docs/en/20 setup/modeler-setup"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Stopping and Removing the Container",id:"stopping-and-removing-the-container",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-datafor-using-docker"},"Deploying Datafor Using Docker"),(0,r.kt)("p",null,"Datafor can be easily deployed using Docker. This guide provides the steps and commands to deploy the free version of Datafor."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you start, ensure you have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker installed on your machine. If you don't have Docker installed, you can download and install it from the Docker website.")),(0,r.kt)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a Terminal or Command Prompt"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Windows, you can use Command Prompt or PowerShell."),(0,r.kt)("li",{parentName:"ul"},"On macOS or Linux, you can use the Terminal."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pull the Datafor Docker Image"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you haven't already pulled the Datafor Docker image, you can do so by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull datafor123/datafor-free:6.06\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This command downloads the Datafor Docker image to your local machine.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Run the Docker Container"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the following command to run the Datafor Docker container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -itd --name datafor-free -p 28080:28080 -p 25432:25432 datafor123/datafor-free:6.06\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Command explanation:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker run"),": This command is used to create and start a new Docker container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-itd"),": These flags tell Docker to run the container in interactive mode (",(0,r.kt)("inlineCode",{parentName:"li"},"-i"),"), allocate a pseudo-TTY (",(0,r.kt)("inlineCode",{parentName:"li"},"-t"),"), and run it in detached mode (",(0,r.kt)("inlineCode",{parentName:"li"},"-d"),"), which means it will run in the background."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name datafor-free"),": Names the container ",(0,r.kt)("inlineCode",{parentName:"li"},"datafor-free")," for easy reference."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p 28080:28080"),": Maps port 28080 on your local machine to port 28080 in the container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p 25432:25432"),": Maps port 25432 on your local machine to port 25432 in the container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"datafor123/datafor-free:6.06"),": Specifies the Docker image to use."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify the Deployment"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the container is running, you can check the container status with the following command to verify that Datafor is deployed correctly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This command lists all running containers. You should see ",(0,r.kt)("inlineCode",{parentName:"p"},"datafor-free")," in the list and its status.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Access Datafor"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open your web browser and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:28080"),"."),(0,r.kt)("li",{parentName:"ul"},"You should see the Datafor interface. If you need to connect to the database, you can use port ",(0,r.kt)("inlineCode",{parentName:"li"},"25432"),".")))),(0,r.kt)("h2",{id:"stopping-and-removing-the-container"},"Stopping and Removing the Container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To stop the Datafor container, use:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker stop datafor-free\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To remove the Datafor container, use:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker rm datafor-free\n")))),(0,r.kt)("p",null,"By following these steps, you should be able to deploy and run Datafor on your local machine using Docker."))}u.isMDXComponent=!0}}]);