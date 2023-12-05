"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[263],{5788:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var i=n(5893),c=n(1151);const r={id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"},d=void 0,t={id:"settings/corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/corsaccessorsettings.mdx",sourceDirName:"settings",slug:"/settings/corsaccessorsettings",permalink:"/docs/settings/corsaccessorsettings",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/settings/corsaccessorsettings.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"},sidebar:"settings",previous:{title:"1. \u5e94\u7528\u914d\u7f6e",permalink:"/docs/settings/appsettings"},next:{title:"3. \u9a8c\u8bc1\u6d88\u606f\u914d\u7f6e",permalink:"/docs/settings/validationTypemessagesettings"}},o={},l=[{value:"2.1 \u5173\u4e8e\u914d\u7f6e",id:"21-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"2.2 \u914d\u7f6e\u4fe1\u606f",id:"22-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"2.3 \u914d\u7f6e\u793a\u4f8b",id:"23-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"2.4 \u4f7f\u7528 <code>axios</code> \u524d\u7aef\u6ce8\u610f\u4e8b\u9879",id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,i.jsxs)(s.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,i.jsx)(s.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,i.jsxs)(s.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,i.jsx)(s.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\r\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\r\n}\n'})})]}),"\n",(0,i.jsx)(s.h2,{id:"21-\u5173\u4e8e\u914d\u7f6e",children:"2.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,i.jsxs)(s.p,{children:["\u8de8\u57df\u914d\u7f6e\u6307\u7684\u662f ",(0,i.jsx)(s.code,{children:"Furion"})," \u6846\u67b6\u5ba2\u6237\u7aef\u8de8\u57df\u914d\u7f6e\u9009\u9879\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"22-\u914d\u7f6e\u4fe1\u606f",children:"2.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CorsAccessorSettings"}),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"PolicyName"}),"\uff1a\u8de8\u57df\u7b56\u7565\u540d\uff0c",(0,i.jsx)(s.code,{children:"string"})," \u7c7b\u578b\uff0c\u5fc5\u586b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(s.code,{children:"App.Cors.Policy"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WithOrigins"}),"\uff1a\u5141\u8bb8\u8de8\u57df\u7684\u57df\u540d\u5217\u8868\uff0c",(0,i.jsx)(s.code,{children:"string[]"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(s.code,{children:"*"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WithHeaders"}),"\uff1a\u8bf7\u6c42\u8868\u5934\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\u8868\u5934\uff0c",(0,i.jsx)(s.code,{children:"string[]"})," \u7c7b\u578b"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.strong,{children:[(0,i.jsx)(s.code,{children:"WithExposedHeaders"}),"\uff1a\u8bbe\u7f6e\u5ba2\u6237\u7aef\u53ef\u83b7\u53d6\u7684\u54cd\u5e94\u6807\u5934\uff0c",(0,i.jsx)(s.code,{children:"string[]"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(s.code,{children:'["access-token", "x-access-token"]'})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.strong,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u82e5\u540e\u7aef\u8f93\u51fa\u7279\u5b9a\u7684\u54cd\u5e94\u5934 ",(0,i.jsx)(s.code,{children:"Key"}),"\uff0c\u90a3\u4e48\u9700\u5c06\u8be5 ",(0,i.jsx)(s.code,{children:"Key"})," \u914d\u7f6e\u5728\u6570\u7ec4\u4e2d"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WithMethods"}),"\uff1a\u8bbe\u7f6e\u8de8\u57df\u5141\u8bb8\u8bf7\u6c42\u8c13\u8bcd\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\uff0c",(0,i.jsx)(s.code,{children:"string[]"})," \u7c7b\u578b"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"AllowCredentials"}),"\uff1a\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u4e2d\u7684\u51ed\u636e\uff0c",(0,i.jsx)(s.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,i.jsx)(s.code,{children:"true"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SetPreflightMaxAge"}),"\uff1a\u8bbe\u7f6e\u9884\u68c0\u8fc7\u671f\u65f6\u95f4\uff0c",(0,i.jsx)(s.code,{children:"int"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,i.jsx)(s.code,{children:"24\u5c0f\u65f6"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"FixedClientToken"}),"\uff1a\u662f\u5426\u9ed8\u8ba4\u914d\u7f6e ",(0,i.jsx)(s.code,{children:"WithExposedHeaders"}),"\uff0c",(0,i.jsx)(s.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(s.code,{children:"true"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SignalRSupport"}),"\uff1a\u662f\u5426\u542f\u7528 ",(0,i.jsx)(s.code,{children:"SignalR"})," \u8de8\u57df\u652f\u6301\uff0c",(0,i.jsx)(s.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"23-\u914d\u7f6e\u793a\u4f8b",children:"2.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "CorsAccessorSettings": {\r\n    "PolicyName": "MyPolicy",\r\n    "WithOrigins": ["http://localhost:4200", "http://furion.baiqian.ltd"]\r\n  }\r\n}\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879",children:["2.4 \u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"axios"})," \u524d\u7aef\u6ce8\u610f\u4e8b\u9879"]}),"\n",(0,i.jsxs)(s.p,{children:["\u7531\u4e8e ",(0,i.jsx)(s.code,{children:"axios"})," \u5bf9\u8de8\u57df\u6709\u7279\u5b9a\u7684\u9700\u8981\uff0c\u9700\u8981\u54cd\u5e94\u62a5\u6587\u4e2d\u6dfb\u52a0\u7279\u5b9a ",(0,i.jsx)(s.code,{children:"Header"})," \u624d\u80fd\u653e\u884c\uff0c\u5982\uff1a",(0,i.jsx)(s.code,{children:"Access-Control-Expose-Headers: xxxxx"}),"\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u524d\u7aef\u4f7f\u7528\u4e86 ",(0,i.jsx)(s.code,{children:"axios"})," \u8bf7\u6c42\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers",children:'{\r\n  "CorsAccessorSettings": {\r\n    "WithExposedHeaders": ["X-Pagination","access-token","x-access-token"]\r\n  }\r\n}\n'})})]})}function a(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);