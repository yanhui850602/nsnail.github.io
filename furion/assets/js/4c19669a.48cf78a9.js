"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6078],{5935:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=n(5893),r=n(1151);const t={id:"l",title:"8. L \u9759\u6001\u7c7b",sidebar_label:"8. L \u9759\u6001\u7c7b"},i=void 0,a={id:"global/l",title:"8. L \u9759\u6001\u7c7b",description:"8.1 \u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00",source:"@site/docs/global/l.mdx",sourceDirName:"global",slug:"/global/l",permalink:"/furion/docs/global/l",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/l.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"l",title:"8. L \u9759\u6001\u7c7b",sidebar_label:"8. L \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"7. JsonSerializerUtility \u9759\u6001\u7c7b",permalink:"/furion/docs/global/jsonserializer"},next:{title:"9. MessageCenter \u9759\u6001\u7c7b",permalink:"/furion/docs/global/messagecenter"}},d={},c=[{value:"8.1 \u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00",id:"81-\u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00",level:2},{value:"8.2 \u8f6c\u6362 Html \u591a\u8bed\u8a00",id:"82-\u8f6c\u6362-html-\u591a\u8bed\u8a00",level:2},{value:"8.3 \u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00",id:"83-\u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00",level:2},{value:"8.4 \u83b7\u53d6\u7cfb\u7edf\u8bed\u8a00\u5217\u8868",id:"84-\u83b7\u53d6\u7cfb\u7edf\u8bed\u8a00\u5217\u8868",level:2},{value:"8.5 \u83b7\u53d6\u5f53\u524d\u9009\u4e2d\u8bed\u8a00",id:"85-\u83b7\u53d6\u5f53\u524d\u9009\u4e2d\u8bed\u8a00",level:2},{value:"8.6 \u8bbe\u7f6e\u5f53\u524d\u7ebf\u7a0b UI \u533a\u57df\u6027",id:"86-\u8bbe\u7f6e\u5f53\u524d\u7ebf\u7a0b-ui-\u533a\u57df\u6027",level:2},{value:"8.7 \u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b UI \u533a\u57df\u6027",id:"87-\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b-ui-\u533a\u57df\u6027",level:2}];function o(e){const l={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h2,{id:"81-\u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00",children:"8.1 \u8f6c\u6362\u6587\u672c\u591a\u8bed\u8a00"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:'var apiInterface = L.Text["API \u63a5\u53e3"];\n'})}),"\n",(0,s.jsx)(l.h2,{id:"82-\u8f6c\u6362-html-\u591a\u8bed\u8a00",children:"8.2 \u8f6c\u6362 Html \u591a\u8bed\u8a00"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:'var name = L.Html["<b>Hello</b><i> {0}</i>", name];\n'})}),"\n",(0,s.jsx)(l.h2,{id:"83-\u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00",children:"8.3 \u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:'L.SetCulture("en-US");  // \u9ed8\u8ba4\u53ea\u5bf9\u4e0b\u4e00\u6b21\u8bf7\u6c42\u6709\u6548\r\n\r\nL.SetCulture("en-US");  // \u7acb\u5373\u6709\u6548\n'})}),"\n",(0,s.jsx)(l.h2,{id:"84-\u83b7\u53d6\u7cfb\u7edf\u8bed\u8a00\u5217\u8868",children:"8.4 \u83b7\u53d6\u7cfb\u7edf\u8bed\u8a00\u5217\u8868"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:"var list = L.GetCultures();\n"})}),"\n",(0,s.jsx)(l.h2,{id:"85-\u83b7\u53d6\u5f53\u524d\u9009\u4e2d\u8bed\u8a00",children:"8.5 \u83b7\u53d6\u5f53\u524d\u9009\u4e2d\u8bed\u8a00"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:"var list = L.GetSelectCulture();\n"})}),"\n",(0,s.jsx)(l.h2,{id:"86-\u8bbe\u7f6e\u5f53\u524d\u7ebf\u7a0b-ui-\u533a\u57df\u6027",children:"8.6 \u8bbe\u7f6e\u5f53\u524d\u7ebf\u7a0b UI \u533a\u57df\u6027"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:'L.SetCurrentUICulture("en-US");\n'})}),"\n",(0,s.jsx)(l.h2,{id:"87-\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b-ui-\u533a\u57df\u6027",children:"8.7 \u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b UI \u533a\u57df\u6027"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cs",metastring:"showLineNumbers",children:"var culture = L.GetCurrentUICulture();\n"})})]})}function u(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);