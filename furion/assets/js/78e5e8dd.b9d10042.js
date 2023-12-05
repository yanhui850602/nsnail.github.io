"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5713],{5310:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var s=r(5893),i=r(1151);const t={id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",sidebar_label:"3.1 AppStartup \u542f\u52a8",description:"\u5408\u7406\u7684\u914d\u7f6e\u6bcf\u4e00\u4e2a\u9879\u76ee\u5c42\u7684\u670d\u52a1\u4f9d\u8d56"},c=void 0,o={id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",description:"\u5408\u7406\u7684\u914d\u7f6e\u6bcf\u4e00\u4e2a\u9879\u76ee\u5c42\u7684\u670d\u52a1\u4f9d\u8d56",source:"@site/docs/appstartup.mdx",sourceDirName:".",slug:"/appstartup",permalink:"/docs/appstartup",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/appstartup.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",sidebar_label:"3.1 AppStartup \u542f\u52a8",description:"\u5408\u7406\u7684\u914d\u7f6e\u6bcf\u4e00\u4e2a\u9879\u76ee\u5c42\u7684\u670d\u52a1\u4f9d\u8d56"},sidebar:"docs",previous:{title:"3. \u5e94\u7528\u542f\u52a8",permalink:"/docs/category/appstart"},next:{title:"3.2 \u7ec4\u4ef6\u5316\u542f\u52a8",permalink:"/docs/component"}},d={},p=[{value:"3.1.1 <code>Startup</code> \u7c7b",id:"311-startup-\u7c7b",level:2},{value:"3.1.1.1 <code>Startup</code> \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",id:"3111-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",level:3},{value:"3.1.2 <code>AppStartup</code>",id:"312-appstartup",level:2},{value:"3.1.2.1 \u5982\u4f55\u914d\u7f6e <code>AppStartup</code>",id:"3121-\u5982\u4f55\u914d\u7f6e-appstartup",level:3},{value:"3.1.2.2 <code>AppStartup</code> \u7ea6\u5b9a",id:"3122-appstartup-\u7ea6\u5b9a",level:3},{value:"3.1.2.3 <code>AppStartup</code> \u914d\u7f6e\u987a\u5e8f",id:"3123-appstartup-\u914d\u7f6e\u987a\u5e8f",level:3},{value:"3.1.2.4 <code>AppStartup</code> \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",id:"3124-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",level:3},{value:"3.1.3 <code>Startup</code> \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",id:"313-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",level:2},{value:"3.1.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",id:"314-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",level:2},{value:"3.1.5 \u5173\u4e8e <code>appsettings.json</code>",id:"315-\u5173\u4e8e-appsettingsjson",level:2},{value:"3.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"311-startup-\u7c7b",children:["3.1.1 ",(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u662f ",(0,s.jsx)(n.code,{children:"ASP.NET Core"})," \u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u9ed8\u8ba4\u8c03\u7528\u7684\u7c7b\uff0c\u8be5\u7c7b\u662f\u5728 ",(0,s.jsx)(n.code,{children:"Program.cs"})," \u4e2d\u914d\u7f6e\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".NET5"})," \u65b9\u5f0f"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:'showLineNumbers  {18} title="Furion.Web.Entry\\Program.cs"',children:"using Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.Hosting;\r\n\r\nnamespace Furion.Web.Entry\r\n{\r\n    public class Program\r\n    {\r\n        public static void Main(string[] args)\r\n        {\r\n            CreateHostBuilder(args).Build().Run();\r\n        }\r\n\r\n        public static IHostBuilder CreateHostBuilder(string[] args)\r\n        {\r\n            return Host.CreateDefaultBuilder(args)\r\n                .ConfigureWebHostDefaults(webBuilder =>\r\n                {\r\n                    webBuilder.UseStartup<Startup>();\r\n                });\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:".NET6 \u65b9\u5f0f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:".NET6"})," \u4e2d\u5fae\u8f6f\u5df2\u4e0d\u518d\u63a8\u8350 ",(0,s.jsx)(n.code,{children:"UseStartup<TStarup>()"})," \u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"3111-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",children:["3.1.1.1 ",(0,s.jsx)(n.code,{children:"Startup"})," \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Startup"})," \u9ed8\u8ba4\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ConfigureServices"}),"\uff1a\u914d\u7f6e\u5e94\u7528\u6240\u9700\u670d\u52a1\uff0c\u5728\u8be5\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u5e94\u7528\u6240\u9700\u8981\u7684\u529f\u80fd\u6216\u670d\u52a1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Configure"}),"\uff1a\u914d\u7f6e\u5e94\u7528\u8bf7\u6c42\u5904\u7406\u7ba1\u9053"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9ed8\u8ba4\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:'showLineNumbers  {9,13} title="Furion.Web.Entry\\Startup.cs"',children:"using Microsoft.AspNetCore.Builder;\r\nusing Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.DependencyInjection;\r\n\r\nnamespace Furion.Web.Entry\r\n{\r\n    public class Startup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u4e0d\u6253\u7b97\u8be6\u7ec6\u8bb2 ",(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u7684\u5177\u4f53\u529f\u80fd\u548c\u4f5c\u7528\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e86\u89e3\u66f4\u591a",type:"note",children:(0,s.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a ",(0,s.jsx)(n.code,{children:"Startup"})," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/startup?view=aspnetcore-3.1",children:"ASP.NET Core - Startup \u7c7b"})," \u7ae0\u8282\u3002"]})}),"\n",(0,s.jsxs)(n.h2,{id:"312-appstartup",children:["3.1.2 ",(0,s.jsx)(n.code,{children:"AppStartup"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u66f4\u4e3a\u7075\u6d3b\u7684 ",(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u914d\u7f6e\u65b9\u5f0f\uff0c",(0,s.jsxs)(n.strong,{children:["\u65e0\u9700\u5728 ",(0,s.jsx)(n.code,{children:"Web \u542f\u7528\u5c42"})," \u4e2d\u914d\u7f6e\uff0c\u53ef\u5c06\u914d\u7f6e\u653e\u5230\u4efb\u4f55\u9879\u76ee\u5c42\u3002"]})]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u80fd\u4f1a\u6709\u8bfb\u8005\u6709\u7591\u95ee\uff0c\u4e3a\u4ec0\u4e48\u8981\u591a\u6b64\u4e00\u4e3e\u5462\uff1f\u539f\u56e0\u6709\u51e0\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u9ed8\u8ba4\u548c ",(0,s.jsx)(n.code,{children:"Web \u5e94\u7528\u5c42"})," \u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u5982\u679c\u6211\u521b\u5efa\u4e86\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"Web \u5e94\u7528\u5c42"}),"\uff0c",(0,s.jsx)(n.code,{children:"Startup"})," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.li,{children:["\u968f\u7740\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u9700\u8981\u96c6\u6210\u8d8a\u6765\u8d8a\u591a\u7684\u7b2c\u4e09\u65b9\u670d\u52a1\uff0c\u8fd9\u65f6\u5019 ",(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u5c31\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u96be\u4ee5\u7ef4\u62a4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Startup"})," \u7c7b\u65e0\u6cd5\u4e0e\u5176\u4ed6\u9879\u76ee\u7c7b\u578b\u8fdb\u884c\u5171\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c",(0,s.jsx)(n.code,{children:"Furion"})," \u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\uff1a",(0,s.jsx)(n.code,{children:"AppStartup"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u7684\u6d3e\u751f\u7c7b\u6240\u5728\u7684\u9879\u76ee\u5c42\u6ca1\u6709\u88ab\u542f\u52a8\u5c42\u76f4\u63a5\u6216\u95f4\u63a5\u6dfb\u52a0\u5f15\u7528\uff0c\u90a3\u4e48\u8fd9\u4e2a ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u5c31\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f1a\u81ea\u52a8\u8f7d\u5165\u6ce8\u518c\u3002"]})}),"\n",(0,s.jsxs)(n.h3,{id:"3121-\u5982\u4f55\u914d\u7f6e-appstartup",children:["3.1.2.1 \u5982\u4f55\u914d\u7f6e ",(0,s.jsx)(n.code,{children:"AppStartup"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AppStartup"})," \u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u7a7a\u7c7b\uff0c\u6ca1\u6709\u4efb\u4f55\u5b9a\u4e49\u6210\u5458\u3002\u6b63\u662f\u56e0\u4e3a\u8fd9\u6837\uff0c\u624d\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"3122-appstartup-\u7ea6\u5b9a",children:["3.1.2.2 ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u7ea6\u5b9a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AppStartup"})," \u6d3e\u751f\u7c7b\u53ea\u6709\u4e24\u4e2a\u5c0f\u7ea6\u5b9a\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"void"})," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"IServiceCollection"})," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"ConfigureServices"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"void"})," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"IApplicationBuilder"})," \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"IWebHostEnvironment"})," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Configure"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u53ea\u8981\u9075\u5faa\u7ea6\u5b9a\u5373\u53ef\uff0c\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {5,7,12,18,23}",children:"using Microsoft.Extensions.DependencyInjection;\r\n\r\nnamespace Furion.EntityFramework.Core\r\n{\r\n    public class MyStartup : AppStartup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n            services.AddDataValidation();\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n            app.UseSwagger();\r\n        }\r\n\r\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\r\n        public void XXXXName(IServiceCollection services)\r\n        {\r\n        }\r\n\r\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\r\n        public void ZZZName(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"3123-appstartup-\u914d\u7f6e\u987a\u5e8f",children:["3.1.2.3 ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u914d\u7f6e\u987a\u5e8f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"AppStartup"})," \u914d\u7f6e\u987a\u5e8f\u7531\u6240\u5728\u7a0b\u5e8f\u96c6\u7684\u540d\u79f0\u8fdb\u884c\u6b63\u5e8f\u8c03\u7528\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u6267\u884c\u987a\u5e8f\uff0c\u53ea\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u6d3e\u751f\u7c7b\u4e2d\u8d34 ",(0,s.jsx)(n.code,{children:"[AppStartup(order)]"})," \u7279\u6027\u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"order"})," \u6570\u503c\u8d8a\u5927\uff0c\u8d8a\u5728\u524d\u9762\u8c03\u7528\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {5}",children:"using Microsoft.Extensions.DependencyInjection;\r\n\r\nnamespace Furion.EntityFramework.Core\r\n{\r\n    [AppStartup(10)]\r\n    public class FirstStartup : AppStartup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {5}",children:"using Microsoft.Extensions.DependencyInjection;\r\n\r\nnamespace Furion.EntityFramework.Core\r\n{\r\n    [AppStartup(9)]\r\n    public class SecondStartup : AppStartup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FirstStartup"})," \u4f1a\u5728 ",(0,s.jsx)(n.code,{children:"SecondStartup"})," \u4e4b\u524d\u8c03\u7528\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"3124-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",children:["3.1.2.4 ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AppStartup"})," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f\u548c\u65b9\u6cd5\u7684\u4e66\u5199\u5148\u540e\u6709\u5173\uff0c\u8d8a\u5728\u524d\u9762\u7684\u65b9\u6cd5\u8d8a\u5148\u8c03\u7528\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"313-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",children:["3.1.3 ",(0,s.jsx)(n.code,{children:"Startup"})," \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"v3.6.3+"})," \u8bf4\u660e"]}),(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Furion v3.6.3+"})," \u7248\u672c\u4e4b\u540e\u65e0\u9700\u521b\u5efa\u7a7a ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u7c7b\uff0c\u5185\u90e8\u5df2\u5b9e\u73b0 ",(0,s.jsx)(n.code,{children:"FakeStartup"})," \u6a21\u5f0f\u3002"]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5efa\u8bae ",(0,s.jsx)(n.code,{children:"Web"})," \u542f\u52a8\u5c42\u7684 ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u4fdd\u6301\u4e3a\u7a7a\u65b9\u6cd5\u4f53\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:'showLineNumbers {9-11,13-15} title="Furion.Web.Entry\\Startup.cs"',children:"using Microsoft.AspNetCore.Builder;\r\nusing Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.DependencyInjection;\r\n\r\nnamespace Furion.Web.Entry\r\n{\r\n    public class Startup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u6240\u6709 ",(0,s.jsx)(n.code,{children:"Web \u5e94\u7528\u5c42"})," \u914d\u7f6e\u8fc1\u79fb\u5230 ",(0,s.jsx)(n.code,{children:"Furion.Web.Core.Startup.cs"})," \u4e2d\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:'showLineNumbers  title="Furion.Web.Core\\Startup.cs"',children:"using Microsoft.AspNetCore.Builder;\r\nusing Microsoft.AspNetCore.Hosting;\r\nusing Microsoft.Extensions.DependencyInjection;\r\nusing Microsoft.Extensions.Hosting;\r\n\r\nnamespace Furion.Web.Core\r\n{\r\n    public sealed class FurWebCoreStartup : AppStartup\r\n    {\r\n        public void ConfigureServices(IServiceCollection services)\r\n        {\r\n            services.AddCorsAccessor();\r\n\r\n            services.AddControllers().AddInject();\r\n        }\r\n\r\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n        {\r\n            if (env.IsDevelopment())\r\n            {\r\n                app.UseDeveloperExceptionPage();\r\n            }\r\n\r\n            app.UseHttpsRedirection();\r\n\r\n            app.UseRouting();\r\n\r\n            app.UseCorsAccessor();\r\n\r\n            app.UseAuthentication();\r\n            app.UseAuthorization();\r\n\r\n            app.UseInject();\r\n\r\n            app.UseEndpoints(endpoints =>\r\n            {\r\n                endpoints.MapControllers();\r\n            });\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u6837\uff0c\u540e\u7eed\u66f4\u6362 ",(0,s.jsx)(n.code,{children:"Web \u5e94\u7528\u5c42"})," \u4e5f\u65e0\u9700\u91cd\u65b0\u914d\u7f6e ",(0,s.jsx)(n.code,{children:"Startup.cs"})]}),"\n",(0,s.jsx)(n.h2,{id:"314-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",children:"3.1.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"AppStartup"})," \u7684\u6d3e\u751f\u7c7b\u5e76\u672a\u63d0\u4f9b\u4f9d\u8d56\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u4e5f\u5373\u662f\u65e0\u6cd5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u8fdb\u884c\u6ce8\u5165\u670d\u52a1"]}),"\u3002\u539f\u56e0\u662f ",(0,s.jsx)(n.code,{children:"AppStartup"})," \u662f\u4e2a\u7a7a\u7c7b\uff0c\u76ee\u7684\u662f\u7528\u6765\u67e5\u627e ",(0,s.jsx)(n.code,{children:"Startup"})," \u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u90a3\u5982\u4f55\u50cf ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u4e00\u6837\u4f7f\u7528\u670d\u52a1\u5462\uff1f"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u83b7\u53d6\u914d\u7f6e ",(0,s.jsx)(n.code,{children:"IConfiguration"})," \u5b9e\u4f8b\uff1a\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"App.Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6790\u670d\u52a1\uff1a\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"App.GetService<TService>()"})," \u6216 ",(0,s.jsx)(n.code,{children:"app.ApplicationServices.GetService<TService>()"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"Configure"})," \u65b9\u6cd5\u6ce8\u5165"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AppStartup"})," \u9488\u5bf9 ",(0,s.jsx)(n.code,{children:"Configure"})," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u53c2\u6570\u89e3\u6790\u6ce8\u5165\u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u53ea\u8981\u5728\u65b9\u6cd5\u4e2d\u58f0\u660e\u63a5\u53e3\u53c2\u6570\u5373\u53ef\u81ea\u52a8\u6ce8\u5165\uff0c\u5982\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1,2}",children:"// app \u548c env \u4f1a\u81ea\u52a8\u6ce8\u5165\r\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n{\r\n}\n"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"315-\u5173\u4e8e-appsettingsjson",children:["3.1.5 \u5173\u4e8e ",(0,s.jsx)(n.code,{children:"appsettings.json"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"ASP.NET Core"})," \u914d\u7f6e\u653e\u5728 ",(0,s.jsx)(n.code,{children:"appsettings.json"})," \u4e2d\u914d\u7f6e\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u65b9\u5f0f\u548c ",(0,s.jsx)(n.code,{children:"Startup.cs"})," \u914d\u7f6e\u4e00\u6837\u7684\u9053\u7406\uff0c\u4e00\u65e6\u6211\u4eec\u66f4\u6362\u4e86 ",(0,s.jsx)(n.code,{children:"Web \u5e94\u7528\u5c42"}),"\uff0c\u90a3\u4e48 ",(0,s.jsx)(n.code,{children:"appsettings.json"})," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e\u4e00\u6b21\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u65b9\u5f0f\u914d\u7f6e ",(0,s.jsx)(n.code,{children:"appsettings.json"}),"\uff0c",(0,s.jsxs)(n.strong,{children:["\u53ea\u9700\u8981\u5728\u4efb\u4f55\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,s.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5373\u53ef\u3002",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u6700\u540e\u4f1a\u81ea\u52a8\u5408\u5e76\u6240\u6709\u5206\u6563\u7684\u914d\u7f6e\u6587\u4ef6\u3002"]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u6211\u4eec\u5728 ",(0,s.jsx)(n.code,{children:"Furion.EntityFramework.Core"})," \u5c42\u521b\u5efa ",(0,s.jsx)(n.code,{children:"dbsettings.json"})," \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'showLineNumbers  title="Furion.EntityFramework.Core\\dbsettings.json"',children:'{\r\n  "ConnectionStrings": {\r\n    "DbConnectionString": "Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;",\r\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["\u65e0\u9700\u5728 ",(0,s.jsx)(n.code,{children:"appsettings.json"})," \u4e2d\u914d\u7f6e"]}),"\uff0c\u4e0b\u9762\u662f ",(0,s.jsx)(n.code,{children:"appsettings.json"})," \u9ed8\u8ba4\u4ee3\u7801:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\r\n  "Logging": {\r\n    "LogLevel": {\r\n      "Default": "Information",\r\n      "Microsoft": "Warning",\r\n      "Microsoft.Hosting.Lifetime": "Information",\r\n      "Microsoft.EntityFrameworkCore": "Information"\r\n    }\r\n  },\r\n  "AllowedHosts": "*"\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6837\u6211\u4eec\u628a\u914d\u7f6e\u6587\u4ef6\u5206\u6563\u5728\u4e0d\u540c\u9879\u76ee\u5c42\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5171\u7528\u548c\u5171\u4eab\u4e86\u3002"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"caution",children:[(0,s.jsxs)(n.p,{children:["\u5176\u4ed6\u5c42\u7684\u914d\u7f6e\u6587\u4ef6\u4e0d\u80fd\u4ee5 ",(0,s.jsx)(n.code,{children:"appsettings.json"})," \u547d\u540d\uff0c\u4f1a\u5bfc\u81f4\u8986\u76d6\u542f\u52a8\u5c42\u7684\u914d\u7f6e\u3002"]}),(0,s.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u5728\u5176\u4ed6\u5c42\u521b\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"*.json"})," \u6587\u4ef6\u5fc5\u987b\u8bbe\u7f6e\u6587\u4ef6\u5c5e\u6027\u4e3a ",(0,s.jsx)(n.code,{children:"\u59cb\u7ec8\u590d\u5236\u6216\u8f83\u65b0\u590d\u5236"}),"\u3002"]})]}),"\n",(0,s.jsx)(n.h2,{id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"3.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);