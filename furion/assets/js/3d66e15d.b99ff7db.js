"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4012],{5592:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(5893),a=n(1151);const r={id:"messagecenter",title:"9. MessageCenter \u9759\u6001\u7c7b",sidebar_label:"9. MessageCenter \u9759\u6001\u7c7b"},l=void 0,i={id:"global/messagecenter",title:"9. MessageCenter \u9759\u6001\u7c7b",description:"9.1 \u52a8\u6001\u8ba2\u9605\u6d88\u606f",source:"@site/docs/global/messagecenter.mdx",sourceDirName:"global",slug:"/global/messagecenter",permalink:"/docs/global/messagecenter",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/messagecenter.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"messagecenter",title:"9. MessageCenter \u9759\u6001\u7c7b",sidebar_label:"9. MessageCenter \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"8. L \u9759\u6001\u7c7b",permalink:"/docs/global/l"},next:{title:"10. JSON \u9759\u6001\u7c7b",permalink:"/docs/global/json"}},c={},d=[{value:"9.1 \u52a8\u6001\u8ba2\u9605\u6d88\u606f",id:"91-\u52a8\u6001\u8ba2\u9605\u6d88\u606f",level:2},{value:"9.2 \u53d1\u9001\u6d88\u606f",id:"92-\u53d1\u9001\u6d88\u606f",level:2},{value:"9.3 \u53d6\u6d88\u8ba2\u9605",id:"93-\u53d6\u6d88\u8ba2\u9605",level:2}];function o(e){const s={code:"code",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"91-\u52a8\u6001\u8ba2\u9605\u6d88\u606f",children:"9.1 \u52a8\u6001\u8ba2\u9605\u6d88\u606f"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers ",children:'MessageCenter.Subscribe("messageId", async (ctx) => {\r\n    Console.WriteLine("\u6211\u662f\u52a8\u6001\u7684");\r\n    await Task.CompletedTask;\r\n});\n'})}),"\n",(0,t.jsx)(s.h2,{id:"92-\u53d1\u9001\u6d88\u606f",children:"9.2 \u53d1\u9001\u6d88\u606f"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers ",children:'await MessageCenter.PublishAsync("messageId", new {});\r\n\r\n// \u8bf8\u591a\u91cd\u8f7d\n'})}),"\n",(0,t.jsx)(s.h2,{id:"93-\u53d6\u6d88\u8ba2\u9605",children:"9.3 \u53d6\u6d88\u8ba2\u9605"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers ",children:'MessageCenter.Unsubscribe("messageId");\n'})})]})}function g(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);