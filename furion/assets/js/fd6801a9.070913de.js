"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6615],{3502:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=r(5893),s=r(1151),l=r(4996);const i={id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",sidebar_label:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",description:"\u76d1\u542c\u6216\u63a7\u5236\u8bf7\u6c42\u548c\u54cd\u5e94\u5c31\u7528\u5b83"},d=void 0,a={id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",description:"\u76d1\u542c\u6216\u63a7\u5236\u8bf7\u6c42\u548c\u54cd\u5e94\u5c31\u7528\u5b83",source:"@site/docs/middleware.mdx",sourceDirName:".",slug:"/middleware",permalink:"/docs/middleware",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/middleware.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"middleware",title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",sidebar_label:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",description:"\u76d1\u542c\u6216\u63a7\u5236\u8bf7\u6c42\u548c\u54cd\u5e94\u5c31\u7528\u5b83"},sidebar:"docs",previous:{title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)",permalink:"/docs/audit"},next:{title:"5.6 Vue/React/Angular \u8bf7\u6c42\u4ee3\u7406",permalink:"/docs/clientapi"}},c={},u=[{value:"5.5.1 \u5173\u4e8e\u4e2d\u95f4\u4ef6",id:"551-\u5173\u4e8e\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.2 \u5e38\u89c1\u4e2d\u95f4\u4ef6",id:"552-\u5e38\u89c1\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.2.1 \u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c",id:"5521-\u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c",level:3},{value:"5.5.2.2 \u62e6\u622a\u6240\u6709\u8bf7\u6c42\uff08\u53ef\u591a\u4e2a\uff09",id:"5522-\u62e6\u622a\u6240\u6709\u8bf7\u6c42\u53ef\u591a\u4e2a",level:3},{value:"5.5.2.3 \u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09",id:"5523-\u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",level:3},{value:"5.5.2.4 \u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09",id:"5524-\u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",level:3},{value:"5.5.3 \u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"553-\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",level:2},{value:"5.5.3.1 <code>app.Use</code> \u65b9\u5f0f (\u4e0d\u63a8\u8350)",id:"5531-appuse-\u65b9\u5f0f-\u4e0d\u63a8\u8350",level:3},{value:"5.5.3.2 <code>\u72ec\u7acb\u7c7b</code> \u65b9\u5f0f\uff08\u63a8\u8350\uff09",id:"5532-\u72ec\u7acb\u7c7b-\u65b9\u5f0f\u63a8\u8350",level:3},{value:"5.5.3.3 \u914d\u7f6e\u66f4\u591a\u53c2\u6570",id:"5533-\u914d\u7f6e\u66f4\u591a\u53c2\u6570",level:3},{value:"5.5.4 \u4e2d\u95f4\u4ef6\u987a\u5e8f",id:"554-\u4e2d\u95f4\u4ef6\u987a\u5e8f",level:2},{value:"5.5.5 \u4f9d\u8d56\u6ce8\u5165/\u89e3\u6790\u670d\u52a1",id:"555-\u4f9d\u8d56\u6ce8\u5165\u89e3\u6790\u670d\u52a1",level:2},{value:"5.5.5.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f",id:"5551-\u6784\u9020\u51fd\u6570\u65b9\u5f0f",level:3},{value:"5.5.5.2 <code>httpContext.RequestServices</code> \u65b9\u5f0f",id:"5552-httpcontextrequestservices-\u65b9\u5f0f",level:3},{value:"5.5.6 \u5e38\u89c1\u95ee\u9898",id:"556-\u5e38\u89c1\u95ee\u9898",level:2},{value:"5.5.7 \u4e86\u89e3\u66f4\u591a",id:"557-\u4e86\u89e3\u66f4\u591a",level:2},{value:"5.5.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"558-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"551-\u5173\u4e8e\u4e2d\u95f4\u4ef6",children:"5.5.1 \u5173\u4e8e\u4e2d\u95f4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u4e2d\u95f4\u4ef6\u662f\u4e00\u79cd\u88c5\u914d\u5230\u5e94\u7528\u7ba1\u9053\u4ee5\u5904\u7406\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u8f6f\u4ef6\u3002 \u6bcf\u4e2a\u7ec4\u4ef6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u9009\u62e9\u662f\u5426\u5c06\u8bf7\u6c42\u4f20\u9012\u5230\u7ba1\u9053\u4e2d\u7684\u4e0b\u4e00\u4e2a\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u53ef\u5728\u7ba1\u9053\u4e2d\u7684\u4e0b\u4e00\u4e2a\u7ec4\u4ef6\u524d\u540e\u6267\u884c\u5de5\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u8bf7\u6c42\u59d4\u6258\u7528\u4e8e\u751f\u6210\u8bf7\u6c42\u7ba1\u9053\u3002 \u8bf7\u6c42\u59d4\u6258\u5904\u7406\u6bcf\u4e2a ",(0,t.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u4e2d\u95f4\u4ef6\u662f\u6bd4\u7b5b\u9009\u5668\u66f4\u5e95\u5c42\uff0c\u66f4\u4e0a\u6e38\u7684\u9762\u5411\u5207\u9762\u6280\u672f\uff0c\u5176\u6027\u80fd\u6700\u9ad8\uff0c\u53ef\u5904\u7406\u7684\u5e94\u7528\u8303\u56f4\u8fdc\u6bd4\u8fc7\u6ee4\u5668\u5e7f\uff0c\u5982\u5b9e\u73b0\u7f51\u5173\uff0c",(0,t.jsx)(n.code,{children:"URL"})," \u8f6c\u53d1\uff0c\u9650\u6d41\u7b49\u7b49\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{title:"\u4e2d\u95f4\u4ef6\u66f4\u591a\u5185\u5bb9",type:"tip",children:(0,t.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u6682\u4e0d\u8003\u8651\u5c06\u4e2d\u95f4\u4ef6\u5c55\u5f00\u8bb2\uff0c\u60f3\u4e86\u89e3\u66f4\u591a\u77e5\u8bc6\u53ef\u9605\u8bfb\u5b98\u65b9\u6587\u6863 \u3010",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0",children:"ASP.NET Core - \u4e2d\u95f4\u4ef6"}),"\u3011"]})}),"\n",(0,t.jsx)(n.h2,{id:"552-\u5e38\u89c1\u4e2d\u95f4\u4ef6",children:"5.5.2 \u5e38\u89c1\u4e2d\u95f4\u4ef6"}),"\n",(0,t.jsx)(n.h3,{id:"5521-\u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c",children:"5.5.2.1 \u6240\u6709\u8bf7\u6c42\u8fd4\u56de\u540c\u4e00\u4e2a\u7ed3\u679c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1}",children:'app.Run(async context =>\r\n{\r\n    await context.Response.WriteAsync("Hello world!");\r\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5522-\u62e6\u622a\u6240\u6709\u8bf7\u6c42\u53ef\u591a\u4e2a",children:"5.5.2.2 \u62e6\u622a\u6240\u6709\u8bf7\u6c42\uff08\u53ef\u591a\u4e2a\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,7}",children:'app.Use(async (context, next) =>\r\n{\r\n    // \u6bd4\u5982\u8bbe\u7f6e\u7edf\u4e00\u5934\r\n    context.Response.Headers["framework"] = "Furion";\r\n\r\n    // \u6267\u884c\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n    await next.Invoke();\r\n});\r\n\r\n// \u591a\u4e2a\r\napp.Use(...);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5523-\u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",children:"5.5.2.3 \u7279\u5b9a\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,2,8}",children:'app.Map("/hello", app => {\r\n    app.Run(async context =>\r\n    {\r\n        await context.Response.WriteAsync("Map Test 1");\r\n    });\r\n});\r\n\r\napp.Map("/hello/say", app => {\r\n    // ....\r\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5524-\u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\u53ef\u591a\u4e2a",children:"5.5.2.4 \u5d4c\u5957\u8def\u7531\u4e2d\u95f4\u4ef6\uff08\u53ef\u591a\u4e2a\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,2,5}",children:'app.Map("/level1", level1App => {\r\n    level1App.Map("/level2a", level2AApp => {\r\n        // "/level1/level2a" processing\r\n    });\r\n    level1App.Map("/level2b", level2BApp => {\r\n        // "/level1/level2b" processing\r\n    });\r\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u4f8b\u5b50\u67e5\u770b\u5b98\u65b9\u6587\u6863 ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0",children:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"})]}),"\n",(0,t.jsx)(n.h2,{id:"553-\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",children:"5.5.3 \u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u6709\u591a\u79cd\u65b9\u5f0f\uff0c\u6700\u7b80\u5355\u7684\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"app.Use"})," \u65b9\u5f0f\uff0c\u53e6\u5916\u8fd8\u652f\u6301\u72ec\u7acb\u7c7b\u5b9a\u4e49\u65b9\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"5531-appuse-\u65b9\u5f0f-\u4e0d\u63a8\u8350",children:["5.5.3.1 ",(0,t.jsx)(n.code,{children:"app.Use"})," \u65b9\u5f0f (\u4e0d\u63a8\u8350)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:'showLineNumbers {1,12-13} title="Starup.cs"',children:'app.Use(async (context, next) =>\r\n{\r\n    var cultureQuery = context.Request.Query["culture"];\r\n    if (!string.IsNullOrWhiteSpace(cultureQuery))\r\n    {\r\n        var culture = new CultureInfo(cultureQuery);\r\n\r\n        CultureInfo.CurrentCulture = culture;\r\n        CultureInfo.CurrentUICulture = culture;\r\n    }\r\n\r\n    // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n    await next(context);\r\n});\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"5532-\u72ec\u7acb\u7c7b-\u65b9\u5f0f\u63a8\u8350",children:["5.5.3.2 ",(0,t.jsx)(n.code,{children:"\u72ec\u7acb\u7c7b"})," \u65b9\u5f0f\uff08\u63a8\u8350\uff09"]}),"\n",(0,t.jsx)(n.p,{children:"\u72ec\u7acb\u7c7b\u7684\u65b9\u5f0f\u662f\u76ee\u524d\u6700\u4e3a\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u62d3\u5c55\u6027\u5f3a\uff0c\u7ef4\u62a4\u6027\u9ad8\uff0c\u5982\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u5efa\u8bae\u4ee5 ",(0,t.jsx)(n.code,{children:"Middleware"})," \u7ed3\u5c3e\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {5,7,9-12,14,25-26}",children:'using System.Globalization;\r\n\r\nnamespace Middleware.Example;\r\n\r\npublic class RequestCultureMiddleware\r\n{\r\n    private readonly RequestDelegate _next;\r\n\r\n    public RequestCultureMiddleware(RequestDelegate next)\r\n    {\r\n        _next = next;\r\n    }\r\n\r\n    public async Task InvokeAsync(HttpContext context)\r\n    {\r\n        var cultureQuery = context.Request.Query["culture"];\r\n        if (!string.IsNullOrWhiteSpace(cultureQuery))\r\n        {\r\n            var culture = new CultureInfo(cultureQuery);\r\n\r\n            CultureInfo.CurrentCulture = culture;\r\n            CultureInfo.CurrentUICulture = culture;\r\n        }\r\n\r\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n        await _next(context);\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u62d3\u5c55\u7c7b"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b9a\u4e49\u4e86\u4e2d\u95f4\u4ef6\u4e4b\u540e\uff0c\u9700\u8981\u521b\u5efa\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7684\u62d3\u5c55\u7c7b\uff0c\u4e2d\u95f4\u4ef6\u62d3\u5c55\u65b9\u6cd5\u5efa\u8bae\u4ee5 ",(0,t.jsx)(n.code,{children:"Use"})," \u5f00\u5934\uff0c\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,3,5}",children:"public static class RequestCultureMiddlewareExtensions\r\n{\r\n    public static IApplicationBuilder UseRequestCulture(this IApplicationBuilder builder)\r\n    {\r\n        return builder.UseMiddleware<RequestCultureMiddleware>();\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"Startup.cs"})," \u4e2d\u4f7f\u7528"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,4}",children:"public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\r\n{\r\n    // ... \u5176\u4ed6\u4e2d\u95f4\u4ef6\r\n    app.UseRequestCulture();\r\n    // ... \u5176\u4ed6\u4e2d\u95f4\u4ef6\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"5533-\u914d\u7f6e\u66f4\u591a\u53c2\u6570",children:"5.5.3.3 \u914d\u7f6e\u66f4\u591a\u53c2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49\u72ec\u7acb\u7c7b\u4e2d\u95f4\u4ef6\u6784\u9020\u51fd\u6570\u53ea\u6709\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"RequestDelegate"})," \u53c2\u6570\uff0c\u9664\u6b64\u4e4b\u540e\uff0c\u8fd8\u53ef\u4ee5\u6ce8\u5165\u670d\u52a1\u63a5\u53e3/\u7c7b\uff0c\u53e6\u5916\u8fd8\u652f\u6301\u4f20\u5165\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u670d\u52a1\u7c7b\u578b\u53c2\u6570"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {8,11}",children:'using System.Globalization;\r\n\r\nnamespace Middleware.Example;\r\n\r\npublic class RequestCultureMiddleware\r\n{\r\n    private readonly RequestDelegate _next;\r\n    private readonly ILogger<RequestCultureMiddleware> _logger;\r\n\r\n    public RequestCultureMiddleware(RequestDelegate next\r\n        , ILogger<RequestCultureMiddleware> logger)\r\n    {\r\n        _next = next;\r\n        _logger = logger;\r\n    }\r\n\r\n    public async Task InvokeAsync(HttpContext context)\r\n    {\r\n        // \u5176\u4ed6\u4ee3\u7801\r\n\r\n        _logger.LogInformation("...");\r\n\r\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n        await _next(context);\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u975e\u670d\u52a1\u7c7b\u578b\u53c2\u6570"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"\u975e\u670d\u52a1\u53c2\u6570"})," \u53c2\u6570\uff0c",(0,t.jsx)(n.strong,{children:"\u4f46\u5fc5\u987b\u662f\u58f0\u660e\u5728\u670d\u52a1\u53c2\u6570\u540e\u3002"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {12,13}",children:'using System.Globalization;\r\n\r\nnamespace Middleware.Example;\r\n\r\npublic class RequestCultureMiddleware\r\n{\r\n    private readonly RequestDelegate _next;\r\n    private readonly ILogger<RequestCultureMiddleware> _logger;\r\n\r\n    public RequestCultureMiddleware(RequestDelegate next\r\n        , ILogger<RequestCultureMiddleware> logger\r\n        , int age\r\n        , string name)\r\n    {\r\n        _next = next;\r\n        _logger = logger;\r\n    }\r\n\r\n    public async Task InvokeAsync(HttpContext context)\r\n    {\r\n        // \u5176\u4ed6\u4ee3\u7801\r\n\r\n        _logger.LogInformation("...");\r\n\r\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n        await _next(context);\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e4b\u540e\u8fd8\u9700\u8981\u4fee\u6539\u4e2d\u95f4\u4ef6\u62d3\u5c55\u7c7b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {3,5}",children:"public static class RequestCultureMiddlewareExtensions\r\n{\r\n    public static IApplicationBuilder UseRequestCulture(this IApplicationBuilder builder, int age, string name)\r\n    {\r\n        return builder.UseMiddleware<RequestCultureMiddleware>(new object[] {age, name });\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'app.UseRequestCulture(30, "\u767e\u5c0f\u50e7");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"554-\u4e2d\u95f4\u4ef6\u987a\u5e8f",children:"5.5.4 \u4e2d\u95f4\u4ef6\u987a\u5e8f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u662f\u6709\u6267\u884c\u987a\u5e8f\u7684\uff0c\u800c\u4e14\u662f",(0,t.jsx)(n.strong,{children:"\u5148\u6ce8\u518c\u7684\u5148\u6267\u884c\uff0c\u65e0\u6cd5\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u66f4\u6539"}),"\uff0c\u53c2\u8003\u4e0b\u56fe\uff1a"]}),"\n",(0,t.jsx)("img",{src:(0,l.Z)("img/zjj1.png")}),"\n",(0,t.jsx)(n.h2,{id:"555-\u4f9d\u8d56\u6ce8\u5165\u89e3\u6790\u670d\u52a1",children:"5.5.5 \u4f9d\u8d56\u6ce8\u5165/\u89e3\u6790\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u6709\u4e24\u79cd\u65b9\u5f0f\u6ce8\u5165\u670d\u52a1\uff0c\u4e00\u79cd\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"httpContext.RequestServices"})," \u65b9\u5f0f\u89e3\u6790\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"5551-\u6784\u9020\u51fd\u6570\u65b9\u5f0f",children:"5.5.5.1 \u6784\u9020\u51fd\u6570\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {8,11-12}",children:"using System.Globalization;\r\n\r\nnamespace Middleware.Example;\r\n\r\npublic class RequestCultureMiddleware\r\n{\r\n    private readonly RequestDelegate _next;\r\n    private readonly ILogger<RequestCultureMiddleware> _logger;\r\n\r\n    public RequestCultureMiddleware(RequestDelegate next\r\n        , ILogger<RequestCultureMiddleware> logger\r\n        , IHostEnvironment hostEnvironment)\r\n    {\r\n        _next = next;\r\n        _logger = logger;\r\n    }\r\n\r\n    public async Task InvokeAsync(HttpContext context)\r\n    {\r\n        // \u5176\u4ed6\u4ee3\u7801\r\n\r\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n        await _next(context);\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"5552-httpcontextrequestservices-\u65b9\u5f0f",children:["5.5.5.2 ",(0,t.jsx)(n.code,{children:"httpContext.RequestServices"})," \u65b9\u5f0f"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HttpContext"})," \u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"RequestServices"})," \u5c5e\u6027\u65b9\u4fbf\u89e3\u6790\u670d\u52a1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {10-13,21-22}",children:"using System.Globalization;\r\n\r\nnamespace Middleware.Example;\r\n\r\npublic class RequestCultureMiddleware\r\n{\r\n    private readonly RequestDelegate _next;\r\n    private readonly ILogger<RequestCultureMiddleware> _logger;\r\n\r\n    // \u6784\u9020\u51fd\u6570\u6ce8\u518c\r\n    public RequestCultureMiddleware(RequestDelegate next\r\n        , ILogger<RequestCultureMiddleware> logger\r\n        , IHostEnvironment hostEnvironment)\r\n    {\r\n        _next = next;\r\n        _logger = logger;\r\n    }\r\n\r\n    public async Task InvokeAsync(HttpContext context)\r\n    {\r\n        // \u901a\u8fc7 context.RequestServices \u89e3\u6790\r\n        var repository = context.RequestServices.GetService<IRepository>();\r\n\r\n        // \u8c03\u7528\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\r\n        await _next(context);\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"556-\u5e38\u89c1\u95ee\u9898",children:"5.5.6 \u5e38\u89c1\u95ee\u9898"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u4e2d\u95f4\u4ef6\u662f\u6bd4\u8f83\u539f\u59cb\u7684\u5207\u9762\u65b9\u5f0f\uff0c\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u83b7\u53d6",(0,t.jsx)(n.strong,{children:"\u7ec8\u70b9\u8def\u7531\u7684\u7279\u6027"}),"\u6216\u8005\u5176\u4ed6\u4fe1\u606f\uff0c\u5219\u9700\u8981\u4e00\u70b9\u6280\u5de7\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u83b7\u53d6\u7ec8\u70b9\u8def\u7531\u7279\u6027\r\nvar endpointFeature = context.Features.Get<IEndpointFeature>();\r\n\r\n// \u83b7\u53d6\u662f\u5426\u5b9a\u4e49\u4e86\u7279\u6027\r\nvar attribute = endpointFeature?.Endpoint?.Metadata?.GetMetadata<YourAttribute>()\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"important",children:[(0,t.jsxs)(n.p,{children:["\u8981\u60f3\u4e0a\u9762\u64cd\u4f5c\u6709\u6548\uff0c\u4e5f\u5c31\u662f\u4e0d\u4e3a ",(0,t.jsx)(n.code,{children:"null"}),"\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff0c\u5426\u5219 ",(0,t.jsx)(n.code,{children:"endpointFeature"})," \u8fd4\u56de ",(0,t.jsx)(n.code,{children:"null"}),"\u3002"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u542f\u7528\u7aef\u70b9\u8def\u7531 ",(0,t.jsx)(n.code,{children:"AddControllers()"})," \u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"AddMvc()"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UseRouting()"})," \u548c ",(0,t.jsx)(n.code,{children:"UseEndpoints()"})," \u4e4b\u95f4\u8c03\u7528\u4f60\u7684\u4e2d\u95f4\u4ef6"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"557-\u4e86\u89e3\u66f4\u591a",children:"5.5.7 \u4e86\u89e3\u66f4\u591a"}),"\n",(0,t.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a\u4e2d\u95f4\u4ef6\u77e5\u8bc6\u53ef\u9605\u8bfb\u5b98\u65b9\u6587\u6863 \u3010",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0",children:"ASP.NET Core - \u4e2d\u95f4\u4ef6"}),"\u3011"]}),"\n",(0,t.jsx)(n.h2,{id:"558-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"5.5.8 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,t.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,t.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,t.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);