"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4489],{4704:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=s(5893),r=s(1151);const d={id:"friendlyexceptionsettings",title:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e",sidebar_label:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e"},t=void 0,l={id:"settings/friendlyexceptionsettings",title:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/friendlyexceptionsettings.mdx",sourceDirName:"settings",slug:"/settings/friendlyexceptionsettings",permalink:"/docs/settings/friendlyexceptionsettings",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/settings/friendlyexceptionsettings.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"friendlyexceptionsettings",title:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e",sidebar_label:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e"},sidebar:"settings",previous:{title:"5. \u52a8\u6001API\u914d\u7f6e",permalink:"/docs/settings/dynamicapicontrollersettings"},next:{title:"7. \u89c4\u8303\u5316\u6587\u6863\u914d\u7f6e",permalink:"/docs/settings/specificationdocumentsettings"}},c={},o=[{value:"6.1 \u5173\u4e8e\u914d\u7f6e",id:"61-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"6.2 \u914d\u7f6e\u4fe1\u606f",id:"62-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"6.3 \u914d\u7f6e\u793a\u4f8b",id:"63-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"6.4 \u5f02\u5e38\u6d88\u606f\u914d\u7f6e",id:"64-\u5f02\u5e38\u6d88\u606f\u914d\u7f6e",level:2},{value:"6.4.1 \u914d\u7f6e\u4fe1\u606f",id:"641-\u914d\u7f6e\u4fe1\u606f",level:3},{value:"6.4.2 \u914d\u7f6e\u793a\u4f8b",id:"642-\u914d\u7f6e\u793a\u4f8b",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,i.jsx)(n.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,i.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,i.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\r\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\r\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"61-\u5173\u4e8e\u914d\u7f6e",children:"6.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u53cb\u597d\u5f02\u5e38\u914d\u7f6e\u6307\u7684\u662f ",(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u53cb\u597d\u5f02\u5e38\u914d\u7f6e\u9009\u9879\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"62-\u914d\u7f6e\u4fe1\u606f",children:"6.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FriendlyExceptionSettings"}),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HideErrorCode"}),"\uff1a\u9690\u85cf\u9519\u8bef\u7801\uff0c",(0,i.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultErrorCode"}),"\uff1a\u9ed8\u8ba4\u9519\u8bef\u7801\uff0c",(0,i.jsx)(n.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultErrorMessage"}),"\uff1a\u9ed8\u8ba4\u9519\u8bef\u6d88\u606f\uff0c",(0,i.jsx)(n.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ThrowBah"}),"\uff1a\u662f\u5426\u5c06 ",(0,i.jsx)(n.code,{children:"Oops.Oh"})," \u9ed8\u8ba4\u629b\u51fa\u4e3a\u4e1a\u52a1\u5f02\u5e38\uff0c",(0,i.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"}),"\uff0c\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"true"})," \u4e4b\u540e ",(0,i.jsx)(n.code,{children:"Oops.Oh"})," \u9ed8\u8ba4\u8fdb\u5165 ",(0,i.jsx)(n.code,{children:"OnValidateFailed"})," \u5904\u7406\uff0c\u800c\u4e0d\u662f ",(0,i.jsx)(n.code,{children:"OnException"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LogError"}),"\uff1a\u662f\u5426\u8f93\u51fa\u5f02\u5e38\u65e5\u5fd7\uff0c",(0,i.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"63-\u914d\u7f6e\u793a\u4f8b",children:"6.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "FriendlyExceptionSettings": {\r\n    "DefaultErrorMessage": "\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458"\r\n  }\r\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"64-\u5f02\u5e38\u6d88\u606f\u914d\u7f6e",children:"6.4 \u5f02\u5e38\u6d88\u606f\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u8fd8\u4e3a\u53cb\u597d\u5f02\u5e38\u6d88\u606f\u63d0\u4f9b\u5916\u90e8\u914d\u7f6e"]}),"\n",(0,i.jsx)(n.h3,{id:"641-\u914d\u7f6e\u4fe1\u606f",children:"6.4.1 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ErrorCodeMessageSettings"}),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Definitions"}),"\uff1a\u914d\u7f6e\u5f02\u5e38\u9519\u8bef\u7801\u6d88\u606f\u7c7b\u578b\uff0c",(0,i.jsx)(n.code,{children:"[\u9519\u8bef\u72b6\u6001\u7801\uff0c\u9519\u8bef\u6d88\u606f][]"})," \u7c7b\u578b\uff0c\u5982\uff1a",(0,i.jsx)(n.code,{children:'["5000", "{0} \u4e0d\u80fd\u5c0f\u4e8e {1}"]'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"642-\u914d\u7f6e\u793a\u4f8b",children:"6.4.2 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "ErrorCodeMessageSettings": {\r\n    "Definitions": [\r\n      ["5000", "{0} \u4e0d\u80fd\u5c0f\u4e8e {1}"],\r\n      ["5001", "\u6211\u53eb {0} \u540d\u5b57", "\u767e\u5c0f\u50e7"],\r\n      ["5002", "Oops! \u51fa\u9519\u4e86"]\r\n    ]\r\n  }\r\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);