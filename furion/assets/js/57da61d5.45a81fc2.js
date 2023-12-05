"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7043],{5049:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(5893),s=n(1151);const o={id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",sidebar_label:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784"},c=void 0,d={id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784",source:"@site/docs/reference.mdx",sourceDirName:".",slug:"/reference",permalink:"/docs/reference",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/reference.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"reference",title:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",sidebar_label:"2.7 \u624b\u52a8\u642d\u5efa\u5206\u5c42",description:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u9879\u76ee\u5206\u5c42\u7ed3\u6784"},sidebar:"docs",previous:{title:"2.6 \u5b98\u65b9\u811a\u624b\u67b6",permalink:"/docs/template"},next:{title:"2.8 \u795e\u5947\u7684 Inject",permalink:"/docs/inject"}},t={},l=[{value:"2.7.1 \u63a8\u8350\u5206\u5c42\u8bbe\u8ba1",id:"271-\u63a8\u8350\u5206\u5c42\u8bbe\u8ba1",level:2},{value:"2.7.2 \u96c6\u6210 <code>Furion</code> \u529f\u80fd",id:"272-\u96c6\u6210-furion-\u529f\u80fd",level:2},{value:"2.7.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"273-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.admonition,{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip",children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Furion"})," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"]}),(0,i.jsxs)(r.p,{children:["\u63a8\u8350\u4f7f\u7528 \u300a",(0,i.jsx)(r.a,{href:"/docs/template",children:"2.6 \u5b98\u65b9\u811a\u624b\u67b6"}),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002"]})]}),"\n",(0,i.jsx)(r.h2,{id:"271-\u63a8\u8350\u5206\u5c42\u8bbe\u8ba1",children:"2.7.1 \u63a8\u8350\u5206\u5c42\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Furion"})," \u63a8\u8350\u91c7\u7528\u591a\u5c42\u9879\u76ee\u8bbe\u8ba1\u67b6\u6784\uff0c\u6bcf\u4e00\u4e2a\u9879\u76ee\u5c42\u7684\u4f9d\u8d56\u5206\u522b\u662f\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"YourName.Application"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"YourName.Core"})," \u5f15\u7528"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"YourName.Core"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"Furion"})," \u5f15\u7528"]}),"\uff0c",(0,i.jsxs)(r.strong,{children:["SqlSugar \u7248\u672c\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"Furion.Pure"})]})," \ud83c\udf97"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"YourName.Database.Migrations"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"YourName.EntityFramework.Core"})," \u5f15\u7528"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"YourName.EntityFramework.Core"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"YourName.Core"})," \u5f15\u7528"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"YourName.Web.Core"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"YourName.Application"}),"\uff0c",(0,i.jsx)(r.code,{children:"YourName.Database.Migrations"})," \u5f15\u7528"]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"YourName.Web.Entry"}),"\uff1a\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"YourName.Web.Core"})," \u5f15\u7528 \u548c ",(0,i.jsx)(r.code,{children:"Microsoft.EntityFrameworkCore.Tools"})," \u5305"]})}),"\n"]}),"\n",(0,i.jsxs)(r.admonition,{title:"\u7279\u522b\u8bf4\u660e",type:"important",children:[(0,i.jsxs)(r.p,{children:["\u5982\u679c\u91c7\u7528 ",(0,i.jsx)(r.code,{children:"EFCore"})," \u4ee5\u5916\u7684 ",(0,i.jsx)(r.code,{children:"ORM"})," \u6846\u67b6\uff0c\u5982 ",(0,i.jsx)(r.code,{children:"SqlSugar"}),"\uff0c\u90a3\u4e48\u65e0\u9700\u521b\u5efa ",(0,i.jsx)(r.code,{children:"YourName.Database.Migrations"})," \u548c ",(0,i.jsx)(r.code,{children:"YourName.EntityFramework.Core"})," \u5c42\u3002"]}),(0,i.jsxs)(r.p,{children:["\u53e6\u5916 ",(0,i.jsx)(r.code,{children:"YourName.Web.Entry"})," \u65e0\u9700\u5f15\u7528 ",(0,i.jsx)(r.code,{children:"Microsoft.EntityFrameworkCore.Tools"})," \u5305\u3002"]})]}),"\n",(0,i.jsxs)(r.h2,{id:"272-\u96c6\u6210-furion-\u529f\u80fd",children:["2.7.2 \u96c6\u6210 ",(0,i.jsx)(r.code,{children:"Furion"})," \u529f\u80fd"]}),"\n",(0,i.jsxs)(r.p,{children:["\u9879\u76ee\u642d\u5efa\u597d\u4e4b\u540e\uff0c\u96c6\u6210 ",(0,i.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u53ea\u9700\u8981\u5728 ",(0,i.jsx)(r.code,{children:"Program.cs"})," \u4e2d \u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"Inject()"})," \u65b9\u6cd5\u5373\u53ef\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:".NET5"})," \u7248\u672c\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers  {18}",children:"using Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.Hosting;\r\n\r\nnamespace YourName.Web.Entry\r\n{\r\n    public class Program\r\n    {\r\n        public static void Main(string[] args)\r\n        {\r\n            CreateHostBuilder(args).Build().Run();\r\n        }\r\n\r\n        public static IHostBuilder CreateHostBuilder(string[] args)\r\n        {\r\n            return Host.CreateDefaultBuilder(args)\r\n                .ConfigureWebHostDefaults(webBuilder =>\r\n                {\r\n                    webBuilder.Inject()\r\n                              .UseStartup<Startup>();\r\n                });\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:".NET6"})," \u7248\u672c"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers {1,3,11}",children:"var builder = WebApplication.CreateBuilder(args).Inject();\r\n\r\nbuilder.Services.AddControllers().AddInject();\r\n\r\nvar app = builder.Build();\r\n\r\napp.UseHttpsRedirection();\r\n\r\napp.UseAuthorization();\r\n\r\napp.UseInject();\r\n\r\napp.MapControllers();\r\n\r\napp.Run();\n"})}),"\n",(0,i.jsx)(r.h2,{id:"273-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"2.7.3 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,i.jsx)(r.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,i.jsxs)(r.p,{children:["\u7ed9 Furion \u63d0 ",(0,i.jsx)(r.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);