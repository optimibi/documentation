"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[8303],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),u=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(i.Provider,{value:a},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=n,m=g["".concat(i,".").concat(d)]||g[d]||s[d]||o;return t?r.createElement(m,p(p({ref:a},c),{},{components:t})):r.createElement(m,p({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[g]="string"==typeof e?e:n,p[1]=l;for(var u=2;u<o;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7470:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(8168),n=(t(6540),t(5680));const o={id:"backup-upgrade",title:"Backup Function Upgrade",sidebar_position:90},p="Backup Function Upgrade-v6.06",l={unversionedId:"tutorials/20 setup/backup-upgrade",id:"tutorials/20 setup/backup-upgrade",title:"Backup Function Upgrade",description:"In Datafor version 6.06, the backup functionality has been upgraded. If you upgrade your system using datafor-update.jar, you will need to manually create two tables after the upgrade.",source:"@site/docs/tutorials/20 setup/90 \u5907\u4efd\u529f\u80fd\u5347\u7ea7.md",sourceDirName:"tutorials/20 setup",slug:"/tutorials/20 setup/backup-upgrade",permalink:"/documentation/tutorials/20 setup/backup-upgrade",draft:!1,editUrl:"https://github.com/optimibi/documentation/edit/main/docs/tutorials/20 setup/90 \u5907\u4efd\u529f\u80fd\u5347\u7ea7.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{id:"backup-upgrade",title:"Backup Function Upgrade",sidebar_position:90},sidebar:"docsSidebar",previous:{title:"Migration of analysis reports and models",permalink:"/documentation/tutorials/20 setup/setup-zyqy"},next:{title:"Console",permalink:"/documentation/tutorials/30 console/kzt-jmgnjs"}},i={},u=[{value:"Steps",id:"steps",level:2}],c={toc:u},g="wrapper";function s(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"backup-function-upgrade-v606"},"Backup Function Upgrade-v6.06"),(0,n.yg)("p",null,"In Datafor version 6.06, the backup functionality has been upgraded. If you upgrade your system using ",(0,n.yg)("inlineCode",{parentName:"p"},"datafor-update.jar"),", you will need to manually create two tables after the upgrade."),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Start Datafor"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Log in to Datafor's Resource Database using a Database Client Tool")),(0,n.yg)("p",{parentName:"li"},"The default resource database for Datafor is ",(0,n.yg)("strong",{parentName:"p"},"PostgreSQL"),"."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Port"),": 25432"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Database"),": datafor"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Username"),": postgres"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Password"),": postgres")),(0,n.yg)("img",{src:"D:\\github_projects\\docs\\static\\img\\en\\datafor\\setup\\1725615931498.png",alt:"1725615931498",style:{float:"left","margin-right":"10px",zoom:"67%"}})),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Create the Tables")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Table: ",(0,n.yg)("inlineCode",{parentName:"strong"},"backup_config")))),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'sql\u590d\u5236\u4ee3\u7801-- DROP TABLE IF EXISTS "public"."backup_config";\nCREATE TABLE "public"."backup_config" (\n  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,\n  "name" varchar(200) COLLATE "pg_catalog"."default" DEFAULT 1,\n  "folder" varchar(200) COLLATE "pg_catalog"."default",\n  "cron" varchar(200) COLLATE "pg_catalog"."default",\n  "jobid" varchar(255) COLLATE "pg_catalog"."default",\n  "config" varchar(200) COLLATE "pg_catalog"."default",\n  "enable" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,\n  "add_by" varchar(200) COLLATE "pg_catalog"."default",\n  "add_time" timestamp(6),\n  "update_by" varchar(200) COLLATE "pg_catalog"."default",\n  "update_time" timestamp(6)\n);\n\nALTER TABLE "public"."backup_config" ADD CONSTRAINT "backup_config_pkey" PRIMARY KEY ("id");\n')),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Table: ",(0,n.yg)("inlineCode",{parentName:"strong"},"backup_log")))),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'sql\u590d\u5236\u4ee3\u7801-- DROP TABLE IF EXISTS "public"."backup_log";\nCREATE TABLE "public"."backup_log" (\n  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,\n  "backupid" varchar(64) COLLATE "pg_catalog"."default",\n  "name" varchar(200) COLLATE "pg_catalog"."default",\n  "folder" varchar(200) COLLATE "pg_catalog"."default",\n  "cron" varchar(200) COLLATE "pg_catalog"."default",\n  "config" varchar(200) COLLATE "pg_catalog"."default",\n  "status" char(1) COLLATE "pg_catalog"."default",\n  "msg" text COLLATE "pg_catalog"."default",\n  "add_by" varchar(200) COLLATE "pg_catalog"."default",\n  "add_time" timestamp(6),\n  "update_by" varchar(200) COLLATE "pg_catalog"."default",\n  "update_time" timestamp(6)\n);\n\nALTER TABLE "public"."backup_log" ADD CONSTRAINT "backup_log_pkey" PRIMARY KEY ("id");\n')),(0,n.yg)("img",{src:"D:\\github_projects\\docs\\static\\img\\en\\datafor\\setup\\1725615967244.png",alt:"1725615967244",style:{float:"left","margin-right":"10px",zoom:"80%"}})),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Restart Datafor")))))}s.isMDXComponent=!0}}]);