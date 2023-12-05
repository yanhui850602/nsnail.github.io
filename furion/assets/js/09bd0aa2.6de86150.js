"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9013],{5371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(5893),i=t(1151);const s={id:"dbcontext-filter",title:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",sidebar_label:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668"},o=void 0,d={id:"dbcontext-filter",title:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",description:"9.24.1 \u67e5\u8be2\u7b5b\u9009\u5668",source:"@site/docs/dbcontext-filter.mdx",sourceDirName:".",slug:"/dbcontext-filter",permalink:"/docs/dbcontext-filter",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-filter.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-filter",title:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",sidebar_label:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668"},sidebar:"docs",previous:{title:"9.23 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)",permalink:"/docs/dbcontext-audit"},next:{title:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",permalink:"/docs/dbcontext-Interceptor"}},l={},c=[{value:"9.24.1 \u67e5\u8be2\u7b5b\u9009\u5668",id:"9241-\u67e5\u8be2\u7b5b\u9009\u5668",level:2},{value:"9.24.2 \u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e",id:"9242-\u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e",level:2},{value:"9.24.2.1 \u5355\u8868\u7b5b\u9009\u5668",id:"92421-\u5355\u8868\u7b5b\u9009\u5668",level:3},{value:"9.24.2.2 \u5168\u5c40\u7b5b\u9009\u5668",id:"92422-\u5168\u5c40\u7b5b\u9009\u5668",level:3},{value:"9.24.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9243-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"9241-\u67e5\u8be2\u7b5b\u9009\u5668",children:"9.24.1 \u67e5\u8be2\u7b5b\u9009\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u6211\u4eec\u7cfb\u7edf\u4e2d\u6709\u4e00\u4e9b\u7ef4\u62a4\u5b57\u6bb5\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"IsDeleted"})," \u5b57\u6bb5\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7528\u6765\u6807\u8bc6\u7528\u6237\u5df2\u7ecf\u5220\u9664\u7684\u6570\u636e\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u6bcf\u6b21\u67e5\u8be2\u6570\u636e\u7684\u65f6\u5019\u5e26\u4e0a\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u907f\u514d\u67e5\u8be2\u51fa\u4e0d\u8be5\u51fa\u73b0\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Furion"})," \u63d0\u4f9b\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668\uff0c\u80fd\u591f\u5e94\u7528\u5230\u6bcf\u4e00\u6b21\u67e5\u8be2\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"9242-\u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e",children:"9.24.2 \u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"92421-\u5355\u8868\u7b5b\u9009\u5668",children:"9.24.2.1 \u5355\u8868\u7b5b\u9009\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u5355\u8868\u7b5b\u9009\u5668\u5c31\u662f\u53ea\u9488\u5bf9\u7279\u5b9a\u5b9e\u4f53\u8fdb\u884c\u7b5b\u9009\u64cd\u4f5c\uff0c\u4f7f\u7528\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u7ee7\u627f ",(0,r.jsx)(n.code,{children:"IEntityTypeBuilder<TEntity>"})," \u63a5\u53e3\u5e76\u5b9e\u73b0\u5373\u53ef\uff0c\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {8,24}",children:"using Furion.DatabaseAccessor;\r\nusing Microsoft.EntityFrameworkCore;\r\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\r\nusing System;\r\n\r\nnamespace Furion.Core\r\n{\r\n    public class Person : Entity, IEntityTypeBuilder<Person>\r\n    {\r\n        public Person()\r\n        {\r\n            CreatedTime = DateTime.Now;\r\n            IsDeleted = false;\r\n        }\r\n\r\n        public string Name { get; set; }\r\n\r\n        public int Age { get; set; }\r\n\r\n        public string Address { get; set; }\r\n\r\n        public void Configure(EntityTypeBuilder<Person> entityBuilder, DbContext dbContext, Type dbContextLocator)\r\n        {\r\n            entityBuilder.HasQueryFilter(u => !u.IsDeleted);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"92422-\u5168\u5c40\u7b5b\u9009\u5668",children:"9.24.2.2 \u5168\u5c40\u7b5b\u9009\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u7b5b\u9009\u5668\u53ef\u4ee5\u914d\u7f6e\u6240\u6709\u5b9e\u4f53\u5e94\u7528\u7b5b\u9009\u5668\u4e2d\uff0c\u65e0\u9700\u4e00\u4e2a\u4e00\u4e2a\u53bb\u914d\u7f6e\u3002\u4f7f\u7528\u65b9\u6cd5\u7a0d\u5fae\u6709\u4e9b\u590d\u6742\uff0c\u9700\u8981\u52a8\u6001\u6784\u5efa ",(0,r.jsx)(n.code,{children:"Lambda"})," \u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9e\u73b0\u5168\u5c40\u7b5b\u9009\u5668\u4f9d\u8d56\u4e8e ",(0,r.jsx)(n.code,{children:"IModelBuilderFilter"})," \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u63d0\u4f9b\u4e24\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"OnCreating"}),"\uff1a\u5b9e\u4f53\u6784\u5efa\u4e4b\u524d"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"OnCreated"}),"\uff1a\u5b9e\u4f53\u6784\u5efa\u4e4b\u540e"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5373\u53ef\u914d\u7f6e\u5168\u5c40\u8fc7\u6ee4\u5668\uff0c\u5982\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {10,18-19,21,24}",children:'using Furion.DatabaseAccessor;\r\nusing Microsoft.EntityFrameworkCore;\r\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\r\nusing System;\r\nusing System.Linq.Expressions;\r\n\r\nnamespace Furion.EntityFramework.Core\r\n{\r\n    [AppDbContext("Sqlite3ConnectionString")]\r\n    public class FurionDbContext : AppDbContext<FurionDbContext>, IModelBuilderFilter\r\n    {\r\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\r\n        {\r\n        }\r\n\r\n        public void OnCreating(ModelBuilder modelBuilder, EntityTypeBuilder entityBuilder, DbContext dbContext, Type dbContextLocator)\r\n        {\r\n            // \u8bbe\u7f6e\u8f6f\u5220\u9664\u8868\u8fbe\u5f0f\r\n            var fakeDeleteQueryFilterExpression = FakeDeleteQueryFilterExpression(entityBuilder, dbContext);\r\n            if (fakeDeleteQueryFilterExpression == null) return;\r\n\r\n            entityBuilder.HasQueryFilter(fakeDeleteQueryFilterExpression);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"\u5c0f\u5efa\u8bae",type:"note",children:(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5bf9\u52a8\u6001\u6784\u5efa ",(0,r.jsx)(n.code,{children:"LambdaExpression"})," \u4e0d\u719f\u6089\u7684\u670b\u53cb\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"System.Linq.Dynamic.Core"})," \u5305 ",(0,r.jsx)(n.a,{href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core",children:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"})]})}),"\n",(0,r.jsx)(n.h2,{id:"9243-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.24.3 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);