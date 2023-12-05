"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2205],{7571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var r=s(5893),i=s(1151),d=s(4996);const l={id:"pm2",title:"34.6 pm2 \u90e8\u7f72",sidebar_label:"34.6 pm2 \u90e8\u7f72"},c=void 0,t={id:"pm2",title:"34.6 pm2 \u90e8\u7f72",description:"34.6.1 \u5173\u4e8e pm2",source:"@site/docs/pm2.mdx",sourceDirName:".",slug:"/pm2",permalink:"/docs/pm2",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/pm2.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701737955,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"pm2",title:"34.6 pm2 \u90e8\u7f72",sidebar_label:"34.6 pm2 \u90e8\u7f72"},sidebar:"docs",previous:{title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",permalink:"/docs/singlefile"},next:{title:"34.7 \u53d1\u5e03\u684c\u9762\u7a0b\u5e8f\uff08WinForm/WPF\uff09",permalink:"/docs/bs-to-cs"}},a={},o=[{value:"34.6.1 \u5173\u4e8e <code>pm2</code>",id:"3461-\u5173\u4e8e-pm2",level:2},{value:"34.6.2 \u5982\u4f55\u5b89\u88c5",id:"3462-\u5982\u4f55\u5b89\u88c5",level:2},{value:"34.6.3 \u6258\u7ba1 <code>.NET5/6</code> \u5e94\u7528\u7a0b\u5e8f",id:"3463-\u6258\u7ba1-net56-\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"34.6.3.1 \u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",id:"34631-\u975e\u5355\u6587\u4ef6\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",level:3},{value:"34.6.3.2 \u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",id:"34632-\u5355\u6587\u4ef6\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",level:3},{value:"34.6.3.3 \u542f\u7528\u5e94\u7528\u7a0b\u5e8f",id:"34633-\u542f\u7528\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"34.6.3.4 <code>json</code> \u914d\u7f6e/\u542f\u52a8\u65b9\u5f0f",id:"34634-json-\u914d\u7f6e\u542f\u52a8\u65b9\u5f0f",level:3},{value:"34.6.4 <code>pm2</code> \u5e38\u89c1\u64cd\u4f5c",id:"3464-pm2-\u5e38\u89c1\u64cd\u4f5c",level:2},{value:"34.6.4.1 \u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001",id:"34641-\u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001",level:3},{value:"34.6.4.2 \u663e\u793a\u8fd0\u884c\u65e5\u5fd7",id:"34642-\u663e\u793a\u8fd0\u884c\u65e5\u5fd7",level:3},{value:"34.6.4.3 \u67e5\u770b\u5e94\u7528\u4fe1\u606f",id:"34643-\u67e5\u770b\u5e94\u7528\u4fe1\u606f",level:3},{value:"34.6.4.4 \u968f\u673a\u542f\u52a8",id:"34644-\u968f\u673a\u542f\u52a8",level:3},{value:"34.6.4.5 \u96c6\u7fa4\u6a21\u5f0f\uff08\u8d1f\u8f7d\u5747\u8861\uff09",id:"34645-\u96c6\u7fa4\u6a21\u5f0f\u8d1f\u8f7d\u5747\u8861",level:3},{value:"34.6.4.6 \u5176\u4ed6\u64cd\u4f5c",id:"34646-\u5176\u4ed6\u64cd\u4f5c",level:3},{value:"34.6.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3465-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"3461-\u5173\u4e8e-pm2",children:["34.6.1 \u5173\u4e8e ",(0,r.jsx)(n.code,{children:"pm2"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pm2"})," \u662f ",(0,r.jsx)(n.code,{children:"NodeJS"})," \u5e73\u53f0\u9ad8\u7ea7\u751f\u4ea7\u6d41\u7a0b\u7ba1\u7406\u5668\uff0c\u4e5f\u662f\u4e00\u4e2a\u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\u5668\uff0c\u5b83\u80fd\u591f\u7ba1\u7406\u548c\u4fdd\u6301\u5e94\u7528\u7a0b\u5e8f 7*24 \u5c0f\u65f6\u5728\u7ebf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pm2"})," \u4f18\u70b9:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7b80\u5355\u6613\u7528"}),"\n",(0,r.jsx)(n.li,{children:"\u8de8\u5e73\u53f0"}),"\n",(0,r.jsx)(n.li,{children:"\u5bb9\u5668\u96c6\u6210"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u7f6e\u96c6\u7fa4\u3001\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u6a21\u5757\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5b9e\u65f6\u76d1\u6d4b"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u65e5\u5fd7\u7ba1\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5173\u952e\u6307\u6807\u76d1\u63a7\r\n...."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.jsx)(n.code,{children:"pm2"})," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://pm2.keymetrics.io/",children:"https://pm2.keymetrics.io/"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"3462-\u5982\u4f55\u5b89\u88c5",children:"34.6.2 \u5982\u4f55\u5b89\u88c5"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["\u7cfb\u7edf\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"NodeJS"})," \u73af\u5883 ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/",children:"https://nodejs.org/en/"})]})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u76f8\u4fe1\u5927\u90e8\u5206\u4eba\u7535\u8111\u90fd\u5df2\u7ecf\u5b89\u88c5\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"npm"})," \u6216 ",(0,r.jsx)(n.code,{children:"yarn"})," \u5168\u5c40\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"pm2"})," \u5de5\u5177"]})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"npm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"npm install pm2@latest -g\n"})}),"\n",(0,r.jsx)(n.p,{children:"yarn:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"yarn global add pm2\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"3463-\u6258\u7ba1-net56-\u5e94\u7528\u7a0b\u5e8f",children:["34.6.3 \u6258\u7ba1 ",(0,r.jsx)(n.code,{children:".NET5/6"})," \u5e94\u7528\u7a0b\u5e8f"]}),"\n",(0,r.jsx)(n.h3,{id:"34631-\u975e\u5355\u6587\u4ef6\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",children:"34.6.3.1 \u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u79cd\u6a21\u5f0f\u7684\u7279\u70b9\u5c31\u662f\u9700\u8981\u670d\u52a1\u5668\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:".NET5/6"})," \u7684\u73af\u5883"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start --name xxx dotnet -- xxx.dll\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u6307\u5b9a\u7aef\u53e3",type:"important",children:[(0,r.jsx)(n.p,{children:"\u5982\u9700\u6307\u5b9a\u7aef\u53e3\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start --name xxx dotnet -- PMS.Web.Entry.dll --urls=https://localhost:8089\n"})}),(0,r.jsxs)(n.p,{children:["\u6ce8\u610f ",(0,r.jsx)(n.code,{children:"--"})," \u540e\u9762\u53ef\u4ee5\u5199\u5b8c\u6574\u7684 ",(0,r.jsx)(n.code,{children:"dotnet"})," \u547d\u4ee4\u3002"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"\u547d\u4ee4\u8bf4\u660e",type:"tip",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"xxx.dll"})," \u4e3a\u9879\u76ee\u53d1\u5e03\u540e\u7684\u542f\u52a8\u5c42\u540d\u79f0\u3002"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--name"})," \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5728 ",(0,r.jsx)(n.code,{children:"pm2"})," \u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u3002"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"\u7ec8\u7aef\u8bf4\u660e",type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"--"})," \u4f20\u9012\u53c2\u6570\u5728 ",(0,r.jsx)(n.code,{children:"powershell"})," \u7ec8\u7aef\u4e0b\u65e0\u6548\uff0c\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"cmd"})," \u7ec8\u7aef\u4e0b\u624d\u884c\u3002\u6bd4\u5982\u51fa\u73b0\u8fd9\u6837\u7684\u9519\u8bef\uff1a"]}),(0,r.jsx)("img",{src:(0,d.Z)("img/pm2err.png")})]}),"\n",(0,r.jsx)(n.h3,{id:"34632-\u5355\u6587\u4ef6\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f",children:"34.6.3.2 \u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u79cd\u6a21\u5f0f\u7684\u7279\u70b9\u5c31\u662f\u65e0\u9700\u670d\u52a1\u5668\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:".NET"})," \u4efb\u4f55\u73af\u5883\uff0c\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"/docs/singlefile",children:"\u5355\u6587\u4ef6\u53d1\u5e03\u6587\u6863"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start --name xxx PMS.Web.Entry.exe\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u6307\u5b9a\u7aef\u53e3",type:"important",children:[(0,r.jsx)(n.p,{children:"\u5982\u9700\u6307\u5b9a\u7aef\u53e3\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start --name xxx PMS.Web.Entry.exe -- --urls=https://localhost:8089\n"})}),(0,r.jsxs)(n.p,{children:["\u6ce8\u610f ",(0,r.jsx)(n.code,{children:"--"})," \u540e\u9762\u53ef\u4ee5\u5199\u5b8c\u6574\u7684 ",(0,r.jsx)(n.code,{children:"dotnet"})," \u547d\u4ee4\u3002"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"\u547d\u4ee4\u8bf4\u660e",type:"tip",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"xxx.exe"})," \u4e3a\u9879\u76ee\u53d1\u5e03\u540e\u7684\u542f\u52a8\u5c42\u540d\u79f0\uff0c\u5982\u679c\u540d\u79f0\u5305\u542b ",(0,r.jsx)(n.code,{children:"\u7a7a\u683c"}),"\uff0c\u5219\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u88f9\uff0c\u5982 ",(0,r.jsx)(n.code,{children:'"x xx.exe"'}),"\u3002"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--name"})," \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5728 ",(0,r.jsx)(n.code,{children:"pm2"})," \u4e2d\u7684\u552f\u4e00\u6807\u8bc6\u3002"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"\u7ec8\u7aef\u8bf4\u660e",type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"--"})," \u4f20\u9012\u53c2\u6570\u5728 ",(0,r.jsx)(n.code,{children:"powershell"})," \u7ec8\u7aef\u4e0b\u65e0\u6548\uff0c\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"cmd"})," \u7ec8\u7aef\u4e0b\u624d\u884c\u3002"]}),(0,r.jsx)("img",{src:(0,d.Z)("img/pm2err.png")})]}),"\n",(0,r.jsx)(n.h3,{id:"34633-\u542f\u7528\u5e94\u7528\u7a0b\u5e8f",children:"34.6.3.3 \u542f\u7528\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\u4f1a\u663e\u793a\u542f\u52a8\u6210\u529f\u65e5\u5fd7\uff0c\u5982\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"PS C:\\Users\\bqrjsoft\\Desktop\\pms> pm2 start --name pms PMS.Web.Entry.exe\r\n[PM2] Starting C:\\Users\\bqrjsoft\\Desktop\\pms\\PMS.Web.Entry.exe in fork_mode (1 instance)\r\n[PM2] Done.\r\n\u250c\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\r\n\u2502 id  \u2502 name   \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21ba    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502\r\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\r\n\u2502 0   \u2502 pms    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 41764    \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 85.0mb   \u2502 bqrjsoft \u2502 disabled \u2502\r\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\r\nPS C:\\Users\\bqrjsoft\\Desktop\\pms>\n"})}),"\n",(0,r.jsx)("img",{src:(0,d.Z)("img/sf30.png")}),"\n",(0,r.jsx)(n.admonition,{title:"\u5173\u4e8e\u7aef\u53e3",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ASP.NET Core"})," \u7a0b\u5e8f\u9ed8\u8ba4\u7aef\u53e3\u90fd\u662f ",(0,r.jsx)(n.code,{children:"5000"}),"\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"http://localhost:5000"}),"\u3002"]})}),"\n",(0,r.jsxs)(n.h3,{id:"34634-json-\u914d\u7f6e\u542f\u52a8\u65b9\u5f0f",children:["34.6.3.4 ",(0,r.jsx)(n.code,{children:"json"})," \u914d\u7f6e/\u542f\u52a8\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pm2"})," \u90e8\u7f72\u4e5f\u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u5355\u7684 ",(0,r.jsx)(n.code,{children:"json"})," \u914d\u7f6e\u65b9\u5f0f\uff0c\u90e8\u7f72\u66f4\u7b80\u5355\uff0c\u62d3\u5c55\u6027\u66f4\u5f3a\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u91cd\u590d\u8f93\u5165\u547d\u4ee4\uff0c\u5982\u5728\u9879\u76ee\u542f\u52a8\u9879\u76ee\u4e0b\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"pm2.json"}),"\uff0c\u5e76\u8bbe\u7f6e\u6587\u4ef6\u5c5e\u6027 ",(0,r.jsx)(n.code,{children:"\u5185\u5bb9"})," \u4e3a ",(0,r.jsx)(n.code,{children:"\u59cb\u7ec8\u590d\u5236"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'showLineNumbers {3,15,16,19} title="PMS/Web.Entry/pm2.json"',children:'{\r\n  "apps": {\r\n    "name": "\u552f\u4e00\u6807\u8bc6",\r\n    "script": "dotnet",\r\n    "exec_mode": "fork",\r\n    "error_file": "logs/err.log",\r\n    "out_file": "logs/out.log",\r\n    "merge_logs": true,\r\n    "log_date_format": "YYYY-MM-DD HH:mm:ss",\r\n    "min_uptime": "60s",\r\n    "max_restarts": 30,\r\n    "autorestart": true,\r\n    "restart_delay": "60",\r\n    "args": [\r\n      "PMS.Web.Entry.dll",\r\n      "--urls=http://*:5001"\r\n    ],\r\n    "env": {\r\n      "ASPNETCORE_ENVIRONMENT": "Production"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u53d1\u5e03\u540e\u7684\u6587\u4ef6\u76ee\u5f55\u4e0b\u6253\u5f00\u7ec8\u7aef\u6267\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start pm2.json\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"3464-pm2-\u5e38\u89c1\u64cd\u4f5c",children:["34.6.4 ",(0,r.jsx)(n.code,{children:"pm2"})," \u5e38\u89c1\u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.h3,{id:"34641-\u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001",children:"34.6.4.1 \u5b9e\u65f6\u76d1\u542c\u8fd0\u884c\u72b6\u6001"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 monit\n"})}),"\n",(0,r.jsx)("img",{src:(0,d.Z)("img/sf4.png")}),"\n",(0,r.jsx)(n.h3,{id:"34642-\u663e\u793a\u8fd0\u884c\u65e5\u5fd7",children:"34.6.4.2 \u663e\u793a\u8fd0\u884c\u65e5\u5fd7"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 logs\n"})}),"\n",(0,r.jsx)("img",{src:(0,d.Z)("img/sf5.png")}),"\n",(0,r.jsx)(n.h3,{id:"34643-\u67e5\u770b\u5e94\u7528\u4fe1\u606f",children:"34.6.4.3 \u67e5\u770b\u5e94\u7528\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 info pms\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c",(0,r.jsx)(n.code,{children:"pms"})," \u4e3a\u60a8\u914d\u7f6e\u7684 ",(0,r.jsx)(n.code,{children:"--name"})," \u540d\u79f0\u3002"]}),"\n",(0,r.jsx)("img",{src:(0,d.Z)("img/sf6.png")}),"\n",(0,r.jsx)(n.h3,{id:"34644-\u968f\u673a\u542f\u52a8",children:"34.6.4.4 \u968f\u673a\u542f\u52a8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 startup\r\npm2 save\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.code,{children:"Windows"})," \u4e0b\u968f\u673a\u542f\u52a8"]}),(0,r.jsxs)(n.p,{children:["\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/pm2-windows-startup",children:"pm2-windows-startup"}),"\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"npm install pm2-windows-startup -g\r\npm2-startup install\r\npm2 save\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"34645-\u96c6\u7fa4\u6a21\u5f0f\u8d1f\u8f7d\u5747\u8861",children:"34.6.4.5 \u96c6\u7fa4\u6a21\u5f0f\uff08\u8d1f\u8f7d\u5747\u8861\uff09"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u975e\u5355\u6587\u4ef6/\u975e\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:'pm2 start "xxx.dll" -i max\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5355\u6587\u4ef6/\u72ec\u7acb\u53d1\u5e03\u6a21\u5f0f"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"pm2 start xxx.exe -i max\n"})}),"\n",(0,r.jsx)(n.h3,{id:"34646-\u5176\u4ed6\u64cd\u4f5c",children:"34.6.4.6 \u5176\u4ed6\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"// \u91cd\u542f\u5e94\u7528\r\npm2 restart app_name\r\n\r\n// \u91cd\u8f7d\u5e94\u7528\r\npm2 reload app_name\r\n\r\n// \u505c\u6b62\u5e94\u7528\r\npm2 stop app_name\r\n\r\n// \u5220\u9664\u5e94\u7528\r\npm2 delete app_name\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a ",(0,r.jsx)(n.code,{children:"pm2"})," \u6587\u6863\u53ef\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",children:"https://pm2.keymetrics.io/docs/usage/quick-start/"})]}),"\n",(0,r.jsx)(n.h2,{id:"3465-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"34.6.5 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);