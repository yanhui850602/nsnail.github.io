"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4415],{2635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var d=n(5893),o=n(1151),r=n(4996);const s={id:"net6-to-net7",title:"2.10 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.10 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7"},i=void 0,c={id:"net6-to-net7",title:"2.10 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7",source:"@site/docs/net6-to-net7.mdx",sourceDirName:".",slug:"/net6-to-net7",permalink:"/docs/net6-to-net7",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/net6-to-net7.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"net6-to-net7",title:"2.10 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.10 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7"},sidebar:"docs",previous:{title:"2.9 .NET5 \u5347\u7ea7 .NET6",permalink:"/docs/net5-to-net6"},next:{title:"2.11 .NET7 \u5347\u7ea7 .NET8 \u2728",permalink:"/docs/net7-to-net8"}},l={},a=[{value:"2.10.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"2101-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2.10.1.1 \u5b89\u88c5 <code>.NET7 SDK</code>",id:"21011-\u5b89\u88c5-net7-sdk",level:3},{value:"2.10.1.2 \u7f16\u8f91 <code>.csproj</code> \u6587\u4ef6",id:"21012-\u7f16\u8f91-csproj-\u6587\u4ef6",level:3},{value:"2.10.1.3 \u5347\u7ea7 <code>NuGet</code> \u5305",id:"21013-\u5347\u7ea7-nuget-\u5305",level:3},{value:"2.10.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",id:"21014-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.admonition,{title:".NET7 \u53d1\u5e03",type:"caution",children:(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:"\ud83d\ude80\ud83c\udf89\ud83d\udd25 2022 \u5e74 11 \u6708 08 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET7 \u9996\u4e2a\u6b63\u5f0f\u7248\u3002"})})}),"\n",(0,d.jsx)(t.h2,{id:"2101-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",children:"2.10.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsxs)(t.strong,{children:["\u76ee\u524d\u4f7f\u7528 ",(0,d.jsx)(t.code,{children:"Furion"})," \u6240\u6709\u7248\u672c\uff080.x-3.x\uff09\u7684\u7528\u6237\u5747\u53ef\u4ee5\u5feb\u901f\u65e0\u7f1d\u5347\u7ea7\u81f3 ",(0,d.jsx)(t.code,{children:"Furion v4.x"})," \u7248\u672c\uff0c\u53ea\u9700\u8981\u505a\u5c11\u91cf\u66f4\u6539\u5373\u53ef\u3002"]})}),"\n",(0,d.jsxs)(t.h3,{id:"21011-\u5b89\u88c5-net7-sdk",children:["2.10.1.1 \u5b89\u88c5 ",(0,d.jsx)(t.code,{children:".NET7 SDK"})]}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://dotnet.microsoft.com/download/dotnet/7.0",children:"https://dotnet.microsoft.com/download/dotnet/7.0"})}),"\n",(0,d.jsxs)(t.h3,{id:"21012-\u7f16\u8f91-csproj-\u6587\u4ef6",children:["2.10.1.2 \u7f16\u8f91 ",(0,d.jsx)(t.code,{children:".csproj"})," \u6587\u4ef6"]}),"\n",(0,d.jsxs)(t.p,{children:["\u7f16\u8f91\u89e3\u51b3\u65b9\u6848\u6240\u6709\u9879\u76ee\u7684 ",(0,d.jsx)(t.code,{children:".csproj"})," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",(0,d.jsx)(t.code,{children:"<TargetFramework>net6.0</TargetFramework>"})," \u4e3a ",(0,d.jsx)(t.code,{children:"<TargetFramework>net7.0</TargetFramework>"}),"\uff0c\u5982\uff1a"]}),"\n",(0,d.jsx)("img",{src:(0,r.Z)("img/net73.png")}),"\n",(0,d.jsxs)(t.p,{children:["\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(t.code,{children:"Ctrl + F"})," \u5168\u5c40\u66ff\u6362"]}),"\n",(0,d.jsx)("img",{src:(0,r.Z)("img/net74.png")}),"\n",(0,d.jsxs)(t.h3,{id:"21013-\u5347\u7ea7-nuget-\u5305",children:["2.10.1.3 \u5347\u7ea7 ",(0,d.jsx)(t.code,{children:"NuGet"})," \u5305"]}),"\n",(0,d.jsxs)(t.p,{children:["\u5c06 ",(0,d.jsx)(t.code,{children:"Furion"})," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,d.jsx)(t.code,{children:"v4.9.1.7"})," \u7248\u672c\uff0c\u540c\u65f6 ",(0,d.jsx)(t.code,{children:"Microsoft"})," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,d.jsx)(t.code,{children:"v7.0.14"})," \u7248\u672c\uff0c\u5982\uff1a"]}),"\n",(0,d.jsx)("img",{src:(0,r.Z)("img/net75.png")}),"\n",(0,d.jsx)(t.h3,{id:"21014-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",children:"2.10.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"}),"\n",(0,d.jsx)(t.p,{children:"\u5347\u7ea7\u5b8c\u6210\uff01\uff01\uff01"})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}}}]);