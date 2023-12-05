"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7132],{7618:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=r(5893),i=r(1151);const t={id:"dbcontext-view",title:"9.13 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.13 \u89c6\u56fe\u64cd\u4f5c"},o=void 0,a={id:"dbcontext-view",title:"9.13 \u89c6\u56fe\u64cd\u4f5c",description:"9.13.1 \u5173\u4e8e\u89c6\u56fe",source:"@site/docs/dbcontext-view.mdx",sourceDirName:".",slug:"/dbcontext-view",permalink:"/docs/dbcontext-view",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-view.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-view",title:"9.13 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.13 \u89c6\u56fe\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",permalink:"/docs/dbcontext-hight-query"},next:{title:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",permalink:"/docs/dbcontext-proc"}},d={},c=[{value:"9.13.1 \u5173\u4e8e\u89c6\u56fe",id:"9131-\u5173\u4e8e\u89c6\u56fe",level:2},{value:"9.13.2 \u89c6\u56fe\u7684\u4f7f\u7528",id:"9132-\u89c6\u56fe\u7684\u4f7f\u7528",level:2},{value:"9.13.2.1 \u521b\u5efa\u89c6\u56fe <code>SQL</code>",id:"91321-\u521b\u5efa\u89c6\u56fe-sql",level:3},{value:"9.13.2.2 \u89c6\u56fe\u6a21\u578b",id:"91322-\u89c6\u56fe\u6a21\u578b",level:3},{value:"9.13.3 \u89c6\u56fe\u4f7f\u7528",id:"9133-\u89c6\u56fe\u4f7f\u7528",level:2},{value:"9.13.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714",id:"9134-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-",level:2},{value:"9.13.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9135-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"9131-\u5173\u4e8e\u89c6\u56fe",children:"9.13.1 \u5173\u4e8e\u89c6\u56fe"}),"\n",(0,s.jsx)(n.p,{children:"\u89c6\u56fe\u662f\u6570\u636e\u5e93\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u5bf9\u8c61\uff0c\u662f\u4e00\u5f20\u865a\u62df\u8868\uff0c\u901a\u8fc7\u89c6\u56fe\u6211\u4eec\u53ef\u4ee5\u5bf9\u7ed3\u679c\u8fdb\u884c\u7b5b\u9009\u7f13\u5b58\uff0c\u540c\u65f6\u8fd8\u80fd\u5b9e\u73b0\u9897\u7c92\u5316\u6743\u9650\u63a7\u5236\uff0c\u5982\u63a7\u5236\u6307\u5b9a\u884c\uff0c\u6307\u5b9a\u5217\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"9132-\u89c6\u56fe\u7684\u4f7f\u7528",children:"9.13.2 \u89c6\u56fe\u7684\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Furion"})," \u4e2d\u5b9e\u73b0\u89c6\u56fe\u7684\u64cd\u4f5c\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u521b\u5efa\u89c6\u56fe\u6a21\u578b\uff0c\u5e76\u7ee7\u627f ",(0,s.jsx)(n.code,{children:"EntityNotKey"})," \u57fa\u7c7b\u5373\u53ef\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.h3,{id:"91321-\u521b\u5efa\u89c6\u56fe-sql",children:["9.13.2.1 \u521b\u5efa\u89c6\u56fe ",(0,s.jsx)(n.code,{children:"SQL"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:"showLineNumbers",children:"CREATE VIEW V_Person AS\r\nSELECT Id,Name,Age,Address FROM person\n"})}),"\n",(0,s.jsx)(n.h3,{id:"91322-\u89c6\u56fe\u6a21\u578b",children:"9.13.2.2 \u89c6\u56fe\u6a21\u578b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {5,10}",children:'using Furion.DatabaseAccessor;\r\n\r\nnamespace Furion.Core\r\n{\r\n    public class V_Person : EntityNotKey\r\n    {\r\n        /// <summary>\r\n        /// \u914d\u7f6e\u89c6\u56fe\u540d\r\n        /// </summary>\r\n        public V_Person() : base("V_Person")\r\n        {\r\n        }\r\n\r\n        /// <summary>\r\n        /// \u4e3b\u952eId\r\n        /// </summary>\r\n        public int Id { get; set; }\r\n\r\n        /// <summary>\r\n        /// \u59d3\u540d\r\n        /// </summary>\r\n        public string Name { get; set; }\r\n\r\n        /// <summary>\r\n        /// \u5e74\u9f84\r\n        /// </summary>\r\n        public int Age { get; set; }\r\n\r\n        /// <summary>\r\n        /// \u4f4f\u5740\r\n        /// </summary>\r\n        public string Address { get; set; }\r\n    }\r\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"\u89c6\u56fe\u540d\u79f0",type:"important",children:(0,s.jsxs)(n.p,{children:["\u89c6\u56fe\u5b9e\u4f53\u53ea\u9700\u8981\u7ee7\u627f ",(0,s.jsx)(n.code,{children:"EntityNotKey"})," \u57fa\u7c7b\u5e76\u7f16\u5199\u65e0\u53c2\u6784\u9020\u51fd\u6570\u7ee7\u627f ",(0,s.jsx)(n.code,{children:'base("\u89c6\u56fe\u540d\u79f0")'})," \u5373\u53ef\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"9133-\u89c6\u56fe\u4f7f\u7528",children:"9.13.3 \u89c6\u56fe\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u89c6\u56fe\u9664\u4e86\u4e0d\u80fd\u64cd\u4f5c\uff08\u5199\uff09\u4ee5\u5916\uff0c\u5176\u4ed6\u64cd\u4f5c\u548c\u8868\u64cd\u4f5c\u65e0\u5f02\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var vEntities = v_repository.Where(u => u.Id >10).ToList();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9134-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-",children:"9.13.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u89c6\u56fe\u662f\u865a\u62df\u8868\uff0c\u4e0d\u5e94\u8be5\u5bf9\u5176\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u6240\u4ee5\u5e94\u8be5\u91c7\u7528 ",(0,s.jsx)(n.code,{children:"\u53ea\u8bfb\u4ed3\u50a8\u521d\u59cb\u5316\u89c6\u56fe"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {11,13,16}",children:"using Furion.Core;\r\nusing Furion.DatabaseAccessor;\r\nusing Furion.DynamicApiController;\r\nusing System.Collections.Generic;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.Application.Persons\r\n{\r\n    public class FurionService : IDynamicApiController\r\n    {\r\n        private readonly IReadableRepository<V_Person> _readableRepository;\r\n\r\n        public FurionService(IRepository<V_Person> repository)\r\n        {\r\n            // \u521d\u59cb\u5316\u53ea\u8bfb\u4ed3\u50a8\r\n            _readableRepository = repository.Constraint<IReadableRepository<V_Person>>();\r\n        }\r\n\r\n        /// <summary>\r\n        /// \u8bfb\u53d6\u89c6\u56fe\r\n        /// </summary>\r\n        /// <returns></returns>\r\n        public async Task<List<V_Person>> GetVPerson()\r\n        {\r\n            var list = await _readableRepository.AsQueryable().ToListAsync();\r\n            return list;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:".Constraint<TEntity,TDbContextLocator>"})," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u4ed3\u50a8\u7ea6\u675f\u4e3a\u7279\u5b9a\u4ed3\u50a8\uff0c\u5982\u53ea\u8bfb\u4ed3\u50a8\uff0c\u53ef\u8bfb\u53ef\u5199\u4ed3\u50a8\uff0c\u53ea\u65b0\u589e\u4ed3\u50a8\u7b49\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"9135-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.13.5 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);