"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2690],{7727:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=n(5893),r=n(1151),t=n(4996);const l={id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},d=void 0,c={id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",description:"https://www.bilibili.com/video/BV1Rv4y1P7ZB",source:"@site/docs/virtual-deploy.mdx",sourceDirName:".",slug:"/virtual-deploy",permalink:"/docs/virtual-deploy",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/virtual-deploy.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},sidebar:"docs",previous:{title:"34.3 \u5728 Nginx \u90e8\u7f72",permalink:"/docs/deploy-nginx"},next:{title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",permalink:"/docs/singlefile"}},o={},p=[{value:"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",level:2},{value:"34.4.2 \u9488\u5bf9\u5728 <code>IIS</code> \u7f51\u7ad9\u4e0b\u6dfb\u52a0 <code>Application</code> \u60c5\u51b5",id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5",level:2},{value:"34.4.3 \u9488\u5bf9\u975e <code>IIS</code> \u4e0b\u90e8\u7f72\u60c5\u51b5",id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5",level:2},{value:"34.4.3.1 \u914d\u7f6e <code>AppSettings</code>",id:"34431-\u914d\u7f6e-appsettings",level:3},{value:"34.4.3.2 <code>.NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e</code>",id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e",level:3},{value:"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{title:"\u89c6\u9891\u6559\u7a0b",type:"tip",children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1Rv4y1P7ZB",children:"https://www.bilibili.com/video/BV1Rv4y1P7ZB"})})}),"\n",(0,s.jsx)(i.h2,{id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",children:"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"}),"\n",(0,s.jsxs)(i.p,{children:["\u901a\u5e38\u6211\u4eec\u7684\u7ad9\u70b9\u90fd\u662f\u90e8\u7f72\u5728\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u5c06\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\u4f5c\u4e3a\u4e8c\u7ea7\u7ad9\u70b9\u6216\u5b50\u7ad9\u70b9\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u4f1a\u51fa\u73b0 ",(0,s.jsx)(i.code,{children:"404"})," \u9519\u8bef\u4e86\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\u4e86\u3002"}),"\n",(0,s.jsxs)(i.h2,{id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5",children:["34.4.2 \u9488\u5bf9\u5728 ",(0,s.jsx)(i.code,{children:"IIS"})," \u7f51\u7ad9\u4e0b\u6dfb\u52a0 ",(0,s.jsx)(i.code,{children:"Application"})," \u60c5\u51b5"]}),"\n",(0,s.jsx)(i.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"warning",children:(0,s.jsxs)(i.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,s.jsx)(i.code,{children:"Furion 3.2.0 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u679c\u7f51\u7ad9\u662f\u5728 ",(0,s.jsx)(i.code,{children:"Site"})," \u4e0b\u9762\u6dfb\u52a0 ",(0,s.jsx)(i.code,{children:"Application"})," \u4e0b\u90e8\u7f72\uff0c\u5219\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\u6dfb\u52a0 ",(0,s.jsx)(i.code,{children:"Application Pool"})," \u5e94\u7528\u7a0b\u5e8f\u6c60\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u975e\u6258\u7ba1\u6a21\u5f0f"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,t.Z)("img/vr1.png")}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsxs)(i.li,{children:["\u6dfb\u52a0 ",(0,s.jsx)(i.code,{children:"Application"})," \u5e76\u9009\u62e9\u521a\u521a\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u6c60"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,t.Z)("img/vr2.png")}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,t.Z)("img/vr3.png")}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,t.Z)("img/vr4.png")}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsx)(i.li,{children:"\u6dfb\u52a0\u5e94\u7528\u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",metastring:"showLineNumbers  {2,3}",children:'{\r\n  "SpecificationDocumentSettings": {\r\n    "ServerDir": "IIS\u4e2d\u5e94\u7528\u7a0b\u5e8f\u540d\uff08Applicaiton\uff09"\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["\u8be5\u914d\u7f6e\u4e3b\u8981\u662f\u89e3\u51b3 ",(0,s.jsx)(i.code,{children:"Swagger"})," \u51fa\u73b0 ",(0,s.jsx)(i.code,{children:"404"})," \u95ee\u9898\u3002"]})}),"\n",(0,s.jsxs)(i.admonition,{title:"\u4e2a\u522b\u60c5\u51b5",type:"tip",children:[(0,s.jsxs)(i.p,{children:["\u5982\u679c\u914d\u7f6e\u4e4b\u540e\u8fd8 ",(0,s.jsx)(i.code,{children:"Swagger"})," \u8fd8\u51fa\u73b0\u4e0d\u80fd\u52a0\u8f7d ",(0,s.jsx)(i.code,{children:"swagger.json"})," \u6587\u4ef6\u95ee\u9898\uff0c\u90a3\u4e48\u9700\u4fee\u6539\u542f\u52a8\u6ce8\u518c\u4ee3\u7801\uff1a"]}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cs",metastring:"showLineNumbers",children:"app.UseInject(string.Empty);  // \u786e\u4fdd\u53c2\u6570\u662f strng.Empty\n"})})]}),"\n",(0,s.jsxs)(i.h2,{id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5",children:["34.4.3 \u9488\u5bf9\u975e ",(0,s.jsx)(i.code,{children:"IIS"})," \u4e0b\u90e8\u7f72\u60c5\u51b5"]}),"\n",(0,s.jsx)(i.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution",children:(0,s.jsxs)(i.p,{children:["\u8fd9\u91cc\u662f\u9488\u5bf9 ",(0,s.jsx)(i.code,{children:"\u975e IIS"})," \u90e8\u7f72\u4f7f\u7528\u7684\uff01\uff01\uff01"]})}),"\n",(0,s.jsxs)(i.h3,{id:"34431-\u914d\u7f6e-appsettings",children:["34.4.3.1 \u914d\u7f6e ",(0,s.jsx)(i.code,{children:"AppSettings"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,s.jsx)(i.code,{children:"AppSettings"})," \u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",metastring:"showLineNumbers  {2,3}",children:'{\r\n  "AppSettings": {\r\n    "VirtualPath": "/\u865a\u62df\u76ee\u5f55"\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(i.h3,{id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e",children:["34.4.3.2 ",(0,s.jsx)(i.code,{children:".NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e"})]}),"\n",(0,s.jsx)(i.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,s.jsxs)(i.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,s.jsx)(i.code,{children:"Furion 3.2.0 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsxs)(i.p,{children:["\u7531\u4e8e\u5728 ",(0,s.jsx)(i.code,{children:".NET6"})," \u7684 ",(0,s.jsx)(i.code,{children:"WebApplication"})," \u6a21\u5f0f\u4e0b\u5fae\u8f6f\u5e95\u5c42\u53d1\u751f\u4e86\u6539\u53d8\uff0c",(0,s.jsxs)(i.strong,{children:["\u6240\u4ee5\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(i.code,{children:"app.UseVirtualPath()"})," \u5305\u88f9 ",(0,s.jsx)(i.code,{children:"app.UseInject()"})," \u548c ",(0,s.jsx)(i.code,{children:"app.MapRouteControllers()"})]}),"\uff1a"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cs",metastring:"showLineNumbers  {1,4}",children:"app.UseVirtualPath(app =>\r\n{\r\n    app.UseInject(String.Empty);  // \u6ce8\u610f String.Empty \u53ea\u662f\u4f8b\u5b50\uff0c\u53ef\u4ee5\u4e0d\u586b\u6216\u586b\u5176\u4ed6\u7684\uff0c\u89c1\u4e00\u5206\u949f\u5165\u95e8\r\n    app.MapRouteControllers();\r\n});\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["\u6ce8\u610f\uff0c",(0,s.jsx)(i.code,{children:"app.MapRouteControllers()"})," \u662f\u66ff\u6362 ",(0,s.jsx)(i.code,{children:"app.MapControllers()"})," \u7684\uff01"]})}),"\n",(0,s.jsx)(i.h2,{id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(i.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(i.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(i.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);