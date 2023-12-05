"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2994],{8963:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=r(5893),i=r(1151),c=r(4996);const d={id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",sidebar_label:"5.6 Vue/React/Angular \u8bf7\u6c42\u4ee3\u7406",description:"\u539f\u6765 Ajax \u4e5f\u53ef\u4ee5\u4e0d\u7528\u5199\u7684"},o=void 0,l={id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",description:"\u539f\u6765 Ajax \u4e5f\u53ef\u4ee5\u4e0d\u7528\u5199\u7684",source:"@site/docs/clientapi.mdx",sourceDirName:".",slug:"/clientapi",permalink:"/docs/clientapi",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/clientapi.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",sidebar_label:"5.6 Vue/React/Angular \u8bf7\u6c42\u4ee3\u7406",description:"\u539f\u6765 Ajax \u4e5f\u53ef\u4ee5\u4e0d\u7528\u5199\u7684"},sidebar:"docs",previous:{title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",permalink:"/docs/middleware"},next:{title:"6. \u89c4\u8303\u5316\u63a5\u53e3\u6587\u6863 (Swagger)",permalink:"/docs/specification-document"}},t={},a=[{value:"5.6.1 \u5386\u53f2\u80cc\u666f",id:"561-\u5386\u53f2\u80cc\u666f",level:2},{value:"5.6.2 \u5982\u4f55\u89e3\u51b3\uff1f",id:"562-\u5982\u4f55\u89e3\u51b3",level:2},{value:"5.6.3 \u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801",id:"563-\u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801",level:2},{value:"5.3.3.1 \u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801",id:"5331-\u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801",level:3},{value:"5.6.3.2 <code>Vue/React</code> \u914d\u7f6e",id:"5632-vuereact-\u914d\u7f6e",level:3},{value:"5.6.3.3 <code>Angular</code> \u914d\u7f6e",id:"5633-angular-\u914d\u7f6e",level:3},{value:"5.6.4 \u521d\u59cb\u914d\u7f6e",id:"564-\u521d\u59cb\u914d\u7f6e",level:2},{value:"5.6.4.1 <code>Vue/React</code> \u914d\u7f6e",id:"5641-vuereact-\u914d\u7f6e",level:3},{value:"5.6.4.2 <code>Angular</code> \u914d\u7f6e",id:"5642-angular-\u914d\u7f6e",level:3},{value:"5.6.5 \u57fa\u672c\u4f7f\u7528",id:"565-\u57fa\u672c\u4f7f\u7528",level:2},{value:"5.6.5.1 <code>Vue/React</code> \u4e2d\u4f7f\u7528",id:"5651-vuereact-\u4e2d\u4f7f\u7528",level:3},{value:"5.6.5.2 <code>Angular</code> \u4e2d\u4f7f\u7528",id:"5652-angular-\u4e2d\u4f7f\u7528",level:3},{value:"5.6.6 \u91cd\u65b0\u751f\u6210\u4ee3\u7801",id:"566-\u91cd\u65b0\u751f\u6210\u4ee3\u7801",level:2},{value:"5.6.7 <code>Swagger</code> \u591a\u5206\u7ec4\u751f\u6210",id:"567-swagger-\u591a\u5206\u7ec4\u751f\u6210",level:2},{value:"5.6.8 \u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d",id:"568-\u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d",level:2},{value:"5.6.9 \u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd",id:"569-\u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd",level:2},{value:"5.6.10 \u65e0\u6cd5\u8fde\u63a5\u5916\u7f51/\u5185\u7f51\u60c5\u51b5/\u79bb\u7ebf\u5305",id:"5610-\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u5185\u7f51\u60c5\u51b5\u79bb\u7ebf\u5305",level:2},{value:"5.6.11 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"5611-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"\u89c6\u9891\u6559\u7a0b",type:"tip",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1EW4y1C71D",children:"https://www.bilibili.com/video/BV1EW4y1C71D"})})}),"\n",(0,s.jsx)(n.h2,{id:"561-\u5386\u53f2\u80cc\u666f",children:"5.6.1 \u5386\u53f2\u80cc\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u73b0\u5728\u4e3b\u6d41\u7684 Web \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u9009\u62e9\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Vue/React/Angular"})," \u4e09\u5927\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\uff0c\u8fd9\u4e09\u5927\u6846\u67b6\u548c\u4f20\u7edf\u5f00\u53d1\u6a21\u5f0f\u6700\u5927\u7684\u4e0d\u540c\u662f\u524d\u8005\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u7684\u65b9\u5f0f\uff0c\u800c\u540e\u8005\u7edf\u4e00\u7531\u540e\u7aef\u7a0b\u5e8f\u5458\u7f16\u5199\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u524d\u540e\u7aef\u5206\u79bb\u7684\u6a21\u5f0f\u4e2d\uff0c\u524d\u540e\u7aef\u7a0b\u5e8f\u5458\u5404\u53f8\u5176\u804c\uff0c\u540e\u7aef\u7a0b\u5e8f\u8d1f\u8d23\u7f16\u5199\u63a5\u53e3\uff08API\uff09\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u8d1f\u8d23\u7f16\u5199\u5ba2\u6237\u7aef\u8bf7\u6c42\u540e\u7aef\u63a5\u53e3\uff08API\uff09\u5e76\u8fdb\u884c\u6570\u636e\u7ed1\u5b9a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u4f46\u8fd9\u91cc\u66b4\u9732\u51fa\u4e86\u4e00\u4e2a\u5de5\u4f5c\u6548\u7387\u6781\u4f4e\u4e14\u6613\u51fa\u9519\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u524d\u7aef\u7a0b\u5e8f\u9700\u8981\u5c06\u540e\u7aef\u51e0\u767e\u4e2a\u751a\u81f3\u4e0a\u5343\u4e2a\u63a5\u53e3\u8fdb\u884c\u4e00\u4e00\u5bf9\u5e94\u7f16\u5199\uff0c\u5927\u591a\u90fd\u662f\u91c7\u7528 ",(0,s.jsx)(n.code,{children:"$.ajax"})," \u6216 ",(0,s.jsx)(n.code,{children:"axios"})," \u7684\u65b9\u5f0f\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u65e6\u540e\u7aef\u63a5\u53e3\u53c2\u6570\u6216\u8fd4\u56de\u503c\u53d1\u751f\u6539\u53d8\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u9700\u8981\u4e00\u4e00\u8fdb\u884c\u52d8\u6b63\uff0c\u4e00\u65e6\u51fa\u73b0\u7ea0\u6b63\u4e0d\u5b8c\u5168\u5c31\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u65e0\u6cd5\u54cd\u5e94\u6216\u63a5\u6536\u9519\u8bef\u7684\u7528\u6237\u6d88\u606f\u4ece\u800c\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u7ef4\u62a4\u5de5\u4f5c\u548c\u6210\u672c\u6d6a\u8d39\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"562-\u5982\u4f55\u89e3\u51b3",children:"5.6.2 \u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u7f16\u5199\u7684\u6240\u6709\u540e\u7aef\u63a5\u53e3\u90fd\u4f1a\u751f\u6210\u89c4\u8303\u5316\u7684 ",(0,s.jsx)(n.code,{children:"swagger.json"})," \u6587\u4ef6\uff0c\u4f7f\u7528\u8be5\u6587\u4ef6\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://editor.swagger.io",children:"https://editor.swagger.io"})})," \u751f\u6210\u4efb\u4f55\u652f\u6301\u6807\u51c6 ",(0,s.jsx)(n.code,{children:"swagger"})," \u7684\u754c\u9762\u6216\u5ba2\u6237\u7aef\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u81ea\u6b64\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u518d\u4e5f\u65e0\u9700\u81ea\u5df1\u624b\u5199 ",(0,s.jsx)(n.code,{children:"$.ajax"})," \u548c ",(0,s.jsx)(n.code,{children:"axios"})," \u4ee3\u7801\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u5168\u90e8\u81ea\u52a8\u751f\u6210\uff0c\u4ee5\u540e\u5f00\u53d1\u6548\u7387\u81f3\u5c11\u63d0\u9ad8\u4e00\u534a\u4ee5\u4e0a\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"563-\u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801",children:"5.6.3 \u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"TypeScript"})," \u548c ",(0,s.jsx)(n.code,{children:"JavaScript"})]}),(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u6559\u7a0b\u4ec5\u9002\u7528\u4e8e ",(0,s.jsx)(n.code,{children:"Vue/React/Angular"})," \u7684 ",(0,s.jsx)(n.code,{children:"TypeScript"})," \u7c7b\u578b\u9879\u76ee\uff0c\u6682\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u3002"]}),(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u9879\u76ee\u826f\u597d\u7684\u53d1\u5c55\u548c\u7ef4\u62a4\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"TypeScript"})," \u8fdb\u884c\u7f16\u5199\u3002"]})]}),"\n",(0,s.jsx)(n.h3,{id:"5331-\u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801",children:"5.3.3.1 \u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u6253\u5f00\u89c4\u8303\u5316\u6587\u6863\uff08Swagger\uff09\u9996\u9875\uff0c\u5e76\u70b9\u51fb\u9876\u90e8 ",(0,s.jsx)(n.code,{children:"/swagger/xxxx/swagger.json"})," \u5230\u65b0\u7a97\u53e3\u6253\u5f00\u3002"]})}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg1.png")}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u63a5\u7740\u5168\u9009\u5e76\u590d\u5236\u5168\u90e8\u5185\u5bb9"})}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg2.png")}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u6253\u5f00 ",(0,s.jsx)(n.a,{href:"https://editor.swagger.io/",children:"https://editor.swagger.io"})," \u5b98\u7f51\u5e76\u7c98\u8d34\u8fdb\u53bb"]})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u65e0\u6cd5\u8054\u7f51",type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u4e5f\u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/blob/v4/clients/Swagger-Editor.rar",children:"Swagger-Editor.rar"})})," \u79bb\u7ebf\u5305\uff0c\u53ef\u76f4\u63a5\u4e0b\u8f7d\u89e3\u538b\u5e76\u53cc\u51fb ",(0,s.jsx)(n.code,{children:"index.html"})," \u5373\u53ef\u3002"]})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg3.png")}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u6700\u540e\u70b9\u51fb\u9876\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"Generate Client"})," \u9009\u62e9\u5bf9\u5e94\u7684\u8bed\u8a00/\u6846\u67b6\u8fdb\u884c\u751f\u6210\u5373\u53ef\u3002"]})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"5632-vuereact-\u914d\u7f6e",children:["5.6.3.2 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u914d\u7f6e"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u70b9\u51fb ",(0,s.jsx)(n.code,{children:"Generate Client"})," \u9876\u90e8\u83dc\u5355\u5e76\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"typescript-axios"})," \u8fdb\u884c\u4e0b\u8f7d\u3002"]})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg4.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4e0b\u8f7d\u6210\u529f\u4e4b\u540e\u62f7\u8d1d\u4e0b\u56fe\u9009\u62e9\u7684\u76ee\u5f55\u548c\u6587\u4ef6\uff1a"})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg5.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u63a5\u7740\u6253\u5f00\u4f60\u7684 ",(0,s.jsx)(n.code,{children:"Vue"})," \u6216 ",(0,s.jsx)(n.code,{children:"React"})," \u9879\u76ee\uff0c\u5e76\u5728 ",(0,s.jsx)(n.code,{children:"src"})," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,s.jsx)(n.code,{children:"api-services"})," \u76ee\u5f55\u5e76\u5c06\u521a\u521a\u590d\u5236\u7684\u76ee\u5f55\u6587\u4ef6\u653e\u5728\u91cc\u9762\u3002"]})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg6.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u63a5\u4e0b\u6765\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"npm"})," \u6216 ",(0,s.jsx)(n.code,{children:"yarn"})," \u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"axios"})," \u5305"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"# npm \u65b9\u5f0f\r\nnpm i axios@0.21.4\r\n\r\n# yarn \u65b9\u5f0f\r\nyarn add axios@0.21.4\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"axios"})," \u7248\u672c\u8bf4\u660e"]}),(0,s.jsxs)(n.p,{children:["\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"axios"})," \u7248\u672c\u5fc5\u987b\u662f ",(0,s.jsx)(n.code,{children:"0.21.4"})," \u7248\u672c\uff0c\u5982\u679c\u5b89\u88c5\u5176\u4ed6\u7248\u672c\u53ef\u80fd\u4f1a\u51fa\u73b0\u65e0\u6cd5\u7f16\u8bd1\u7684\u60c5\u51b5\u3002"]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u63a5\u7740\u4e0b\u8f7d ",(0,s.jsx)(n.code,{children:"Furion"})," \u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u5de5\u5177\u5e93 ",(0,s.jsx)(n.code,{children:"axios-utils.ts"})," \u5e76\u62f7\u8d1d\u5230\u548c ",(0,s.jsx)(n.code,{children:"api-services"})," \u540c\u7ea7\u76ee\u5f55\u4e0b\uff1a"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/blob/v4/clients/axios_vue_react/axios-utils.ts",children:"axios-utils.ts \u4e0b\u8f7d\u5730\u5740"})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg7.png")}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"Vue3"})," \u9879\u76ee\u4e0d\u80fd\u7f16\u8bd1\u95ee\u9898"]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5728 ",(0,s.jsx)(n.code,{children:"Vue3"})," \u9879\u76ee\u4e2d\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\uff0c\u5219\u9700\u8981\u4fee\u6539\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"tsconfig.app.json"})," \u548c ",(0,s.jsx)(n.code,{children:"tsconfig.vite-config.json"})," \u548c ",(0,s.jsx)(n.code,{children:"tsconfig.vitest.json"})," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {1-3}",children:'"compilerOptions": {\r\n    "importsNotUsedAsValues": "remove", // TypeScript 5.0 - \u4f7f\u7528\r\n    "preserveValueImports": false,    // TypeScript 5.0 - \u4f7f\u7528\r\n    // "verbatimModuleSyntax": false  // TypeScript 5.0 + \u4f7f\u7528\r\n}\n'})}),(0,s.jsx)("img",{src:(0,c.Z)("img/sg8.png")})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"5633-angular-\u914d\u7f6e",children:["5.6.3.3 ",(0,s.jsx)(n.code,{children:"Angular"})," \u914d\u7f6e"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u70b9\u51fb ",(0,s.jsx)(n.code,{children:"Generate Client"})," \u9876\u90e8\u83dc\u5355\u5e76\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"typescript-angular"})," \u8fdb\u884c\u4e0b\u8f7d\u3002"]})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg9.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4e0b\u8f7d\u6210\u529f\u4e4b\u540e\u62f7\u8d1d\u4e0b\u56fe\u9009\u62e9\u7684\u76ee\u5f55\u548c\u6587\u4ef6\uff1a"})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg10.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u63a5\u7740\u6253\u5f00\u4f60\u7684 ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\uff0c\u5e76\u5728 ",(0,s.jsx)(n.code,{children:"src"})," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,s.jsx)(n.code,{children:"api-services"})," \u76ee\u5f55\u5e76\u5c06\u521a\u521a\u590d\u5236\u7684\u76ee\u5f55\u6587\u4ef6\u653e\u5728\u91cc\u9762\u3002"]})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg11.png")}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u63a5\u7740\u4e0b\u8f7d ",(0,s.jsx)(n.code,{children:"Furion"})," \u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"Angular"})," \u5de5\u5177\u5e93 ",(0,s.jsx)(n.code,{children:"angular-utils.ts"})," \u5e76\u62f7\u8d1d\u5230\u548c ",(0,s.jsx)(n.code,{children:"api-services"})," \u540c\u7ea7\u76ee\u5f55\u4e0b\uff1a"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/blob/v4/clients/angular/angular-utils.ts",children:"angular-utils.ts \u4e0b\u8f7d\u5730\u5740"})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg12.png")}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:[(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\u4e0d\u80fd\u7f16\u8bd1\u95ee\u9898"]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5728 ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\u4e2d\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\uff0c\u5219\u9700\u8981\u4fee\u6539\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"api-services/encoder.ts"})," \u6587\u4ef6\uff0c\u5e76\u5728 ",(0,s.jsx)(n.code,{children:"encodeKey"})," \u548c ",(0,s.jsx)(n.code,{children:"encodeValue"})," \u524d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"override"})," \u5373\u53ef\uff0c\u5982\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'showLineNumbers {2,6} title="api-services/encoder.ts"',children:'export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {\r\n  override encodeKey(k: string): string {\r\n    k = super.encodeKey(k);\r\n    return k.replace(/\\+/gi, "%2B");\r\n  }\r\n  override encodeValue(v: string): string {\r\n    v = super.encodeValue(v);\r\n    return v.replace(/\\+/gi, "%2B");\r\n  }\r\n}\n'})}),(0,s.jsx)("img",{src:(0,c.Z)("img/sg13.png")})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u6700\u540e\u5728 ",(0,s.jsx)(n.code,{children:"src/app/app.module.ts"})," \u4e2d\u6ce8\u518c ",(0,s.jsx)(n.code,{children:"ServeModule"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'showLineNumbers {7,14} title="src/app/app.module.ts"',children:'import { NgModule } from "@angular/core";\r\nimport { BrowserModule } from "@angular/platform-browser";\r\n\r\nimport { AppRoutingModule } from "./app-routing.module";\r\nimport { AppComponent } from "./app.component";\r\n\r\nimport { ServeModule } from "src/angular-utils";\r\n\r\n@NgModule({\r\n  declarations: [AppComponent],\r\n  imports: [\r\n    BrowserModule,\r\n    AppRoutingModule,\r\n    ServeModule, // \u6ce8\u518c\u4ee3\u7406\u670d\u52a1\u6a21\u5757\r\n  ],\r\n  providers: [],\r\n  bootstrap: [AppComponent],\r\n})\r\nexport class AppModule {}\n'})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg14.png")}),"\n",(0,s.jsx)(n.h2,{id:"564-\u521d\u59cb\u914d\u7f6e",children:"5.6.4 \u521d\u59cb\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u9762\u6b65\u9aa4\u4e4b\u540e\u8fd8\u9700\u8981\u6700\u540e\u4e00\u6b65\uff0c\u90a3\u5c31\u4fee\u6539\u670d\u52a1\u7aef\uff08\u540e\u7aef\uff09\u63a5\u53e3\uff08API\uff09\u5730\u5740\u3002"}),"\n",(0,s.jsxs)(n.h3,{id:"5641-vuereact-\u914d\u7f6e",children:["5.6.4.1 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u9879\u76ee\u4e2d\u7f16\u8f91 ",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"axios-utils.ts"})," \u6587\u4ef6\uff0c\u5e76\u5c06 ",(0,s.jsx)(n.code,{children:"serveConfig"})," \u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u540e\u7aef\u5730\u5740\u5373\u53ef\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {21-24}",children:'/**\r\n * \u5f53\u524d\u7248\u672c\uff1av1.0.3\r\n * \u4f7f\u7528\u63cf\u8ff0\uff1ahttps://editor.swagger.io \u4ee3\u7801\u751f\u6210 typescript-axios \u8f85\u7ec4\u5de5\u5177\u5e93\r\n * \u4f9d\u8d56\u8bf4\u660e\uff1a\u9002\u914d axios \u7248\u672c\uff1av0.21.1\r\n * \u89c6\u9891\u6559\u7a0b\uff1ahttps://www.bilibili.com/video/BV1EW4y1C71D\r\n */\r\n\r\nimport globalAxios, { AxiosInstance } from "axios";\r\nimport { Configuration } from "./api-services";\r\nimport { BaseAPI, BASE_PATH } from "./api-services/base";\r\n\r\n// \u5982\u679c\u662f Angular \u9879\u76ee\uff0c\u5219\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca\u5373\u53ef\r\n// import { environment } from \'./environments/environment\';\r\n\r\n/**\r\n * \u63a5\u53e3\u670d\u52a1\u5668\u914d\u7f6e\r\n */\r\nexport const serveConfig = new Configuration({\r\n  // \u5982\u679c\u662f Angular \u9879\u76ee\uff0c\u5219\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca\uff0c\u5e76\u5220\u9664 process.env.NODE_ENV !== "production"\r\n  // basePath: !environment.production\r\n  basePath:\r\n    process.env.NODE_ENV !== "production"\r\n      ? "https://localhost:44342" // \u5f00\u53d1\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\r\n      : "http://furion.baiqian.ltd", // \u751f\u4ea7\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\r\n});\r\n\r\n// ......\n'})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg15.png")}),"\n",(0,s.jsxs)(n.h3,{id:"5642-angular-\u914d\u7f6e",children:["5.6.4.2 ",(0,s.jsx)(n.code,{children:"Angular"})," \u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\u5219\u7f16\u8f91 ",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"angular-utils.ts"})," \u6587\u4ef6\uff0c\u5e76\u5c06 ",(0,s.jsx)(n.code,{children:"serveConfig"})," \u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u540e\u7aef\u5730\u5740\u5373\u53ef\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {25-27}",children:'/**\r\n * \u5f53\u524d\u7248\u672c\uff1av1.0.3\r\n * \u4f7f\u7528\u63cf\u8ff0\uff1ahttps://editor.swagger.io \u4ee3\u7801\u751f\u6210 typescript-angular \u8f85\u7ec4\u5de5\u5177\u5e93\r\n */\r\n\r\nimport {\r\n  HttpClientModule,\r\n  HttpEvent,\r\n  HttpHandler,\r\n  HttpHeaders,\r\n  HttpInterceptor,\r\n  HttpRequest,\r\n  HttpResponse,\r\n  HTTP_INTERCEPTORS,\r\n} from "@angular/common/http";\r\nimport { Injectable, NgModule } from "@angular/core";\r\nimport { finalize, Observable, tap } from "rxjs";\r\nimport { ApiModule, Configuration } from "./api-services";\r\nimport { environment } from "./environments/environment";\r\n\r\n/**\r\n * \u63a5\u53e3\u670d\u52a1\u5668\u914d\u7f6e\r\n */\r\nexport const serveConfig = new Configuration({\r\n  basePath: !environment.production\r\n    ? "https://localhost:44316" // \u5f00\u53d1\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\r\n    : "http://furion.baiqian.ltd", // \u751f\u4ea7\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\r\n});\r\n\r\n// ......\n'})}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg16.png")}),"\n",(0,s.jsx)(n.h2,{id:"565-\u57fa\u672c\u4f7f\u7528",children:"5.6.5 \u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.h3,{id:"5651-vuereact-\u4e2d\u4f7f\u7528",children:["5.6.5.1 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Vue/React"})," \u4e2d\u4f7f\u7528\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f ",(0,s.jsx)(n.code,{children:"Promise"}),"\uff0c\u53e6\u5916\u4e00\u79cd\u5c31\u662f ",(0,s.jsx)(n.code,{children:"async/await"}),"\uff0c\u63a8\u8350\u4f7f\u7528\u540e\u8005\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Promise"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {1,3}",children:'import { getAPI } from "../axios-utils"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\r\n\r\ngetAPI(SystemAPI) // SystemAPI \u5bf9\u5e94\u7684\u662f Swagger \u5206\u7ec4\u6807\u7b7e\u540d\u79f0 + API\r\n  .apiGetXXXX()\r\n  .then((res) => {\r\n    var data = res.data.data!;\r\n  })\r\n  .catch((err) => {\r\n    console.log(err);\r\n  })\r\n  .finally(() => {\r\n    console.log("api request completed.");\r\n  });\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async/await"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {1,3}",children:'import { getAPI, feature } from "../axios-utils"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\r\n\r\nconst [err, res] = await feature(getAPI(SystemAPI).apiGetXXX());\r\n\r\nif (err) {\r\n  console.log(err);\r\n} else {\r\n  var data = res.data.data!;\r\n}\r\n\r\nconsole.log("api request completed.");\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"\u5173\u4e8e\u6587\u4ef6\u6d41\u4e0b\u8f7d"})]}),(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6587\u4ef6\u6d41\u4e0b\u8f7d\u53ef\u80fd\u5b58\u5728\u4e0b\u8f7d\u6587\u4ef6\u8fc7\u5927\u7684\u60c5\u51b5\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"options"})," \u53c2\u6570 ",(0,s.jsx)(n.code,{children:'responseType: "blob"'})," \u89e3\u51b3\uff0c\u5982\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {1}",children:'getAPI(SystemAPI, { responseType: "blob" }).apiGetXXX();\n'})})]}),"\n",(0,s.jsxs)(n.h3,{id:"5652-angular-\u4e2d\u4f7f\u7528",children:["5.6.5.2 ",(0,s.jsx)(n.code,{children:"Angular"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\u4e2d\uff0c\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u5bf9\u5e94\u7684\u670d\u52a1\u5373\u53ef"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers {2,12-13,16-28}",children:'import { Component } from "@angular/core";\r\nimport { PersonService } from "src/api-services"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\r\n\r\n@Component({\r\n  selector: "app-root",\r\n  templateUrl: "./app.component.html",\r\n  styleUrls: ["./app.component.css"],\r\n})\r\nexport class AppComponent {\r\n  title = "angulars";\r\n\r\n  // \u6ce8\u5165 PersonService\r\n  constructor(private personService: PersonService) {}\r\n\r\n  ngOnInit(): void {\r\n    // \u4f7f\u7528 personService\r\n    this.personService.apiPersonAllGet().subscribe({\r\n      next: (res) => {\r\n        // \u8bf7\u6c42\u6210\u529f\r\n        console.log(res);\r\n      },\r\n      error: (err) => {\r\n        // \u8bf7\u6c42\u5931\u8d25\r\n      },\r\n      complete: () => {\r\n        // \u8bf7\u6c42\u5b8c\u6210\r\n      },\r\n    });\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"566-\u91cd\u65b0\u751f\u6210\u4ee3\u7801",children:"5.6.6 \u91cd\u65b0\u751f\u6210\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u540e\u7aef\u63a5\u53e3\uff08API\uff09\u53d1\u751f\u6539\u53d8\uff0c\u53ea\u9700\u8981\u5220\u9664 ",(0,s.jsx)(n.code,{children:"api-services"})," \u4e0b\u6240\u6709\u76ee\u5f55\u6587\u4ef6\u5e76\u91cd\u65b0\u751f\u6210\u590d\u5236\u8fdb\u53bb\u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee"]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f ",(0,s.jsx)(n.code,{children:"Angular"})," \u9879\u76ee\uff0c\u53ef\u4ee5\u4fdd\u7559 ",(0,s.jsx)(n.code,{children:"api-services/encoder.ts"})," \u6587\u4ef6\u5e76\u5220\u9664\u5176\u4ed6\u76ee\u5f55\u6587\u4ef6\uff0c\u65b0\u751f\u6210\u7684\u76ee\u5f55\u6587\u4ef6\u65e0\u9700\u590d\u5236 ",(0,s.jsx)(n.code,{children:"encoder.ts"}),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6bcf\u6b21\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"encoder.ts"})," \u6587\u4ef6\u3002"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"567-swagger-\u591a\u5206\u7ec4\u751f\u6210",children:["5.6.7 ",(0,s.jsx)(n.code,{children:"Swagger"})," \u591a\u5206\u7ec4\u751f\u6210"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5f88\u591a\u5927\u578b\u7cfb\u7edf\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5bf9\u63a5\u53e3\u8fdb\u884c\u5f52\u7c7b\uff0c\u5f80\u5f80\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"Swagger"})," \u591a\u5206\u7ec4\u529f\u80fd\uff0c\u8fd9\u6837\u4f1a\u4f7f\u7cfb\u7edf\u7684\u63a5\u53e3\u6563\u843d\u5728\u591a\u4e2a ",(0,s.jsx)(n.code,{children:"swagger.json"})," \u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u65f6\u5019\uff0c\u9700\u8981\u5728\u540e\u7aef\u89c4\u8303\u5316\u6587\u6863\u4e2d\u542f\u7528\u591a\u5206\u7ec4\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2,3}",children:'{\r\n  "SpecificationDocumentSettings": {\r\n    "EnableAllGroups": true\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u542f\u7528\u914d\u7f6e\u4e4b\u540e\u5728 ",(0,s.jsx)(n.code,{children:"Swagger"})," \u5bfc\u822a\u680f\u9876\u90e8\u4e0b\u62c9\u5206\u7ec4\u5c06\u51fa\u73b0 ",(0,s.jsx)(n.code,{children:"All Groups"})," \u9009\u9879\uff0c\u8fd9\u65f6\u5019\u4f7f\u7528\u8fd9\u4e2a ",(0,s.jsx)(n.code,{children:"All Groups"})," \u7684 ",(0,s.jsx)(n.code,{children:"swagger.json"})," \u8fdb\u884c\u751f\u6210\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"568-\u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d",children:"5.6.8 \u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d"}),"\n",(0,s.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,s.jsx)(n.code,{children:"Furion 4.1.7+"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u6211\u4eec\u6839\u636e ",(0,s.jsx)(n.code,{children:"swagger.json"})," \u751f\u6210\u524d\u7aef\u4ee3\u7801\u65f6\uff0c",(0,s.jsx)(n.code,{children:"Swagger"})," \u4f1a\u81ea\u52a8\u6839\u636e\u8def\u7531\u5730\u5740\u751f\u6210\u8c03\u7528\u7684 ",(0,s.jsx)(n.code,{children:"api"})," \u540d\u79f0\uff0c\u4f46\u8fd9\u6837\u7684\u540d\u79f0\u5f80\u5f80\u4e0d\u6613\u8bfb\uff0c\u8fd9\u65f6\u5019\u53ef\u81ea\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:"[OperationId]"})," \u6765\u914d\u7f6e\u751f\u6210\u7684\u524d\u7aef\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {5}",children:"using Furion.SpecificationDocument;\r\n\r\npublic class PersonDto\r\n{\r\n  [OperationId(nameof(TestMethod))]\r\n  public string TestMethod()\r\n  {\r\n    // ...\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"569-\u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd",children:"5.6.9 \u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"axios-utils.ts"})," \u548c ",(0,s.jsx)(n.code,{children:"angular-utils.ts"})," \u662f ",(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4e13\u95e8\u9488\u5bf9 ",(0,s.jsx)(n.code,{children:"Furion"})," \u5f00\u53d1\u7684 ",(0,s.jsx)(n.code,{children:"WebAPI"})," \u9879\u76ee\u7f16\u5199\u7684\u5ba2\u6237\u7aef\u4ee3\u7406\u5e93\uff0c\u5728\u8fd9\u4e2a\u4ee3\u7406\u5e93\u4e2d\u5df2\u7ecf\u5904\u7406\u4e86\u8de8\u57df\uff0c\u6388\u6743\uff0c\u81ea\u52a8\u5237\u65b0 ",(0,s.jsx)(n.code,{children:"token"})," \u4ee5\u53ca\u89e3\u5bc6\u5ba2\u6237\u7aef ",(0,s.jsx)(n.code,{children:"JWT token"})," \u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\u63d0\u4f9b\u4e86\u975e\u5e38\u65b9\u4fbf\u7684 ",(0,s.jsx)(n.code,{children:"feature"})," \u65b9\u6cd5\uff0c\u53ef\u5c06\u5f02\u6b65\u65b9\u6cd5\u8fdb\u884c\u540c\u6b65\u5316\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"5610-\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u5185\u7f51\u60c5\u51b5\u79bb\u7ebf\u5305",children:"5.6.10 \u65e0\u6cd5\u8fde\u63a5\u5916\u7f51/\u5185\u7f51\u60c5\u51b5/\u79bb\u7ebf\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e00\u4e9b\u6bd4\u8f83\u6ce8\u91cd\u4ee3\u7801\u5b89\u5168\u7684\u7ec4\u7ec7\u6216\u516c\u53f8\u4e2d\uff0c\u53ef\u80fd\u4e0d\u80fd\u8fde\u63a5\u5916\u7f51\u8fdb\u884c\u751f\u6210\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u4e0b\u8f7d ",(0,s.jsx)(n.a,{href:"https://github.com/swagger-api/swagger-editor",children:"https://github.com/swagger-api/swagger-editor"})," \u4ee3\u7801\u5728\u672c\u5730\u90e8\u7f72\u5373\u53ef\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u5b98\u7f51\u4e5f\u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"Swagger-Editor.rar"})," \u79bb\u7ebf\u5305\u4e0b\u8f7d\uff1a",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/blob/v4/clients/Swagger-Editor.rar",children:"https://gitee.com/dotnetchina/Furion/blob/v4/clients/Swagger-Editor.rar"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f7d\u79bb\u7ebf\u5305\u540e\u76f4\u63a5\u53cc\u51fb ",(0,s.jsx)(n.code,{children:"index.html"})," \u542f\u52a8\u5373\u53ef"]}),"\n",(0,s.jsx)("img",{src:(0,c.Z)("img/sg17.png")}),"\n",(0,s.jsx)(n.h2,{id:"5611-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"5.6.11 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);