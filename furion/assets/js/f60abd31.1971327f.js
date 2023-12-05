"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6193],{6227:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151);const o={id:"dbcontext-Interceptor",title:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar_label:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668"},c=void 0,i={id:"dbcontext-Interceptor",title:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",description:"9.25.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",source:"@site/docs/dbcontext-Interceptor.mdx",sourceDirName:".",slug:"/dbcontext-Interceptor",permalink:"/furion/docs/dbcontext-Interceptor",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-Interceptor.mdx",tags:[],version:"current",lastUpdatedBy:"tk",lastUpdatedAt:1701741731,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"dbcontext-Interceptor",title:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar_label:"9.25 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668"},sidebar:"docs",previous:{title:"9.24 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/furion/docs/dbcontext-filter"},next:{title:"9.26 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",permalink:"/furion/docs/dbcontext-entitytrigger"}},s={},d=[{value:"9.25.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",id:"9251-\u6570\u636e\u5e93\u62e6\u622a\u5668",level:2},{value:"9.25.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b",id:"9252-\u652f\u6301\u62e6\u622a\u7c7b\u578b",level:2},{value:"9.25.2.1 <code>DbConnectionInterceptor</code>",id:"92521-dbconnectioninterceptor",level:3},{value:"9.25.2.2 <code>DbCommandInterceptor</code>",id:"92522-dbcommandinterceptor",level:3},{value:"9.25.2.3 <code>SaveChangesInterceptor</code>",id:"92523-savechangesinterceptor",level:3},{value:"9.25.2.4 <code>SavedChangesEvent</code> \u62e6\u622a",id:"92524-savedchangesevent-\u62e6\u622a",level:3},{value:"9.25.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u7b5b\u9009\u5668",id:"9253-\u6ce8\u518c\u81ea\u5b9a\u4e49\u7b5b\u9009\u5668",level:2},{value:"9.25.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9254-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"9251-\u6570\u636e\u5e93\u62e6\u622a\u5668",children:"9.25.1 \u6570\u636e\u5e93\u62e6\u622a\u5668"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u56db\u79cd\u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u62e6\u622a\u5668\u52a8\u6001\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u52a8\u6001\u4fee\u6539 sql\uff0c\u52a8\u6001\u66f4\u6539\u53c2\u6570\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Furion"})," \u652f\u6301\u8fd9\u56db\u79cd\u62e6\u622a\u5668\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"DbConnectionInterceptor"}),"\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u62e6\u622a\u5668"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"DbCommandInterceptor"}),"\uff1a\u6570\u636e\u5e93\u6267\u884c ",(0,r.jsx)(e.code,{children:"Sql"})," \u62e6\u622a\u5668"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SaveChangesInterceptor"}),"\uff1a\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u62e6\u622a\u5668"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u91cd\u5199 ",(0,r.jsx)(e.code,{children:"SavedChangesEvent"})," \u76f8\u5173\u4e8b\u4ef6"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"9252-\u652f\u6301\u62e6\u622a\u7c7b\u578b",children:"9.25.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b"}),"\n",(0,r.jsxs)(e.h3,{id:"92521-dbconnectioninterceptor",children:["9.25.2.1 ",(0,r.jsx)(e.code,{children:"DbConnectionInterceptor"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"using Microsoft.EntityFrameworkCore.Diagnostics;\r\nusing System.Data.Common;\r\nusing System.Threading;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.DatabaseAccessor.Interceptors\r\n{\r\n    public class SqlConnectionInterceptor : DbConnectionInterceptor\r\n    {\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\r\n        public override InterceptionResult ConnectionOpening(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\r\n        {\r\n            return base.ConnectionOpening(connection, eventData, result);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult> ConnectionOpeningAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ConnectionOpeningAsync(connection, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\r\n        public override void ConnectionOpened(DbConnection connection, ConnectionEndEventData eventData)\r\n        {\r\n            base.ConnectionOpened(connection, eventData);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\uff08\u5f02\u6b65\uff09\r\n        public override Task ConnectionOpenedAsync(DbConnection connection, ConnectionEndEventData eventData, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ConnectionOpenedAsync(connection, eventData, cancellationToken);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\r\n        public override InterceptionResult ConnectionClosing(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\r\n        {\r\n            return base.ConnectionClosing(connection, eventData, result);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult> ConnectionClosingAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\r\n        {\r\n            return base.ConnectionClosingAsync(connection, eventData, result);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\r\n        public override void ConnectionClosed(DbConnection connection, ConnectionEndEventData eventData)\r\n        {\r\n            base.ConnectionClosed(connection, eventData);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\uff08\u5f02\u6b65\uff09\r\n        public override Task ConnectionClosedAsync(DbConnection connection, ConnectionEndEventData eventData)\r\n        {\r\n            return base.ConnectionClosedAsync(connection, eventData);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\r\n        public override void ConnectionFailed(DbConnection connection, ConnectionErrorEventData eventData)\r\n        {\r\n            base.ConnectionFailed(connection, eventData);\r\n        }\r\n\r\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\uff08\u5f02\u6b65\uff09\r\n        public override Task ConnectionFailedAsync(DbConnection connection, ConnectionErrorEventData eventData, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ConnectionFailedAsync(connection, eventData, cancellationToken);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"92522-dbcommandinterceptor",children:["9.25.2.2 ",(0,r.jsx)(e.code,{children:"DbCommandInterceptor"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"using Microsoft.EntityFrameworkCore.Diagnostics;\r\nusing System.Data.Common;\r\nusing System.Threading;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.DatabaseAccessor\r\n{\r\n    internal sealed class SqlCommandProfilerInterceptor : DbCommandInterceptor\r\n    {\r\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u524d\r\n        public override InterceptionResult<DbCommand> CommandCreating(CommandCorrelatedEventData eventData, InterceptionResult<DbCommand> result)\r\n        {\r\n            return base.CommandCreating(eventData, result);\r\n        }\r\n\r\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u540e\r\n        public override DbCommand CommandCreated(CommandEndEventData eventData, DbCommand result)\r\n        {\r\n            return base.CommandCreated(eventData, result);\r\n        }\r\n\r\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\r\n        public override void CommandFailed(DbCommand command, CommandErrorEventData eventData)\r\n        {\r\n            base.CommandFailed(command, eventData);\r\n        }\r\n\r\n         // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\uff08\u5f02\u6b65\uff09\r\n        public override Task CommandFailedAsync(DbCommand command, CommandErrorEventData eventData, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.CommandFailedAsync(command, eventData, cancellationToken);\r\n        }\r\n\r\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\r\n        public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result)\r\n        {\r\n            return base.ReaderExecuting(command, eventData, result);\r\n        }\r\n\r\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult<DbDataReader>> ReaderExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ReaderExecutingAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\r\n        public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)\r\n        {\r\n            return base.ReaderExecuted(command, eventData, result);\r\n        }\r\n\r\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<DbDataReader> ReaderExecutedAsync(DbCommand command, CommandExecutedEventData eventData, DbDataReader result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ReaderExecutedAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // DataReader \u5bf9\u8c61\u91ca\u653e\u4e4b\u524d\r\n        public override InterceptionResult DataReaderDisposing(DbCommand command, DataReaderDisposingEventData eventData, InterceptionResult result)\r\n        {\r\n            return base.DataReaderDisposing(command, eventData, result);\r\n        }\r\n\r\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\r\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\r\n        {\r\n            return base.NonQueryExecuting(command, eventData, result);\r\n        }\r\n\r\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\r\n        public override int NonQueryExecuted(DbCommand command, CommandExecutedEventData eventData, int result)\r\n        {\r\n            return base.NonQueryExecuted(command, eventData, result);\r\n        }\r\n\r\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<int> NonQueryExecutedAsync(DbCommand command, CommandExecutedEventData eventData, int result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.NonQueryExecutedAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\r\n        public override InterceptionResult<object> ScalarExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<object> result)\r\n        {\r\n            return base.ScalarExecuting(command, eventData, result);\r\n        }\r\n\r\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult<object>> ScalarExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<object> result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ScalarExecutingAsync(command, eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\r\n        public override object ScalarExecuted(DbCommand command, CommandExecutedEventData eventData, object result)\r\n        {\r\n            return base.ScalarExecuted(command, eventData, result);\r\n        }\r\n\r\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<object> ScalarExecutedAsync(DbCommand command, CommandExecutedEventData eventData, object result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.ScalarExecutedAsync(command, eventData, result, cancellationToken);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"92523-savechangesinterceptor",children:["9.25.2.3 ",(0,r.jsx)(e.code,{children:"SaveChangesInterceptor"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"using Microsoft.EntityFrameworkCore.Diagnostics;\r\nusing System.Threading;\r\nusing System.Threading.Tasks;\r\n\r\nnamespace Furion.DatabaseAccessor\r\n{\r\n    public class DbContextSaveChangesInterceptor : SaveChangesInterceptor\r\n    {\r\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\r\n        public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)\r\n        {\r\n            return base.SavingChanges(eventData, result);\r\n        }\r\n\r\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.SavingChangesAsync(eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\r\n        public override int SavedChanges(SaveChangesCompletedEventData eventData, int result)\r\n        {\r\n            return base.SavedChanges(eventData, result);\r\n        }\r\n\r\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\uff08\u5f02\u6b65\uff09\r\n        public override ValueTask<int> SavedChangesAsync(SaveChangesCompletedEventData eventData, int result, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.SavedChangesAsync(eventData, result, cancellationToken);\r\n        }\r\n\r\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\r\n        public override void SaveChangesFailed(DbContextErrorEventData eventData)\r\n        {\r\n            base.SaveChangesFailed(eventData);\r\n        }\r\n\r\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\uff08\u5f02\u6b65\uff09\r\n        public override Task SaveChangesFailedAsync(DbContextErrorEventData eventData, CancellationToken cancellationToken = default)\r\n        {\r\n            return base.SaveChangesFailedAsync(eventData, cancellationToken);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"92524-savedchangesevent-\u62e6\u622a",children:["9.25.2.4 ",(0,r.jsx)(e.code,{children:"SavedChangesEvent"})," \u62e6\u622a"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Furion"})," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",(0,r.jsx)(e.code,{children:"AppDbContext"})," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,r.jsx)(e.code,{children:"void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)"})," \u65b9\u6cd5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,r.jsx)(e.code,{children:"void SavedChangesEvent(SaveChangesCompletedEventData eventData, int result)"})," \u65b9\u6cd5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"}),"\uff1a\u89e6\u53d1 ",(0,r.jsx)(e.code,{children:"void SaveChangesFailedEvent(DbContextErrorEventData eventData)"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u53ef\u4ee5",(0,r.jsx)(e.strong,{children:"\u5728\u6570\u636e\u5e93\u505a\u589e\u3001\u5220\u3001\u6539\u65f6\u5019\u505a\u62e6\u622a\uff0c\u6bd4\u5982\u8bbe\u7f6e\u521b\u5efa\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u6216\u5176\u4ed6\u9ed8\u8ba4\u64cd\u4f5c"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u81ea\u52a8\u6dfb\u52a0\u79df\u6237 Id\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"protected override void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)\r\n{\r\n    // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\r\n    var dbContext = eventData.Context;\r\n\r\n    // \u83b7\u53d6\u6240\u6709\u65b0\u589e\u548c\u66f4\u65b0\u7684\u5b9e\u4f53\r\n    var entities = dbContext.ChangeTracker.Entries()\r\n                .Where(u => u.State == EntityState.Added || u.State == EntityState.Modified);\r\n\r\n    foreach (var entity in entities)\r\n    {\r\n        switch (entity.State)\r\n        {\r\n            // \u81ea\u52a8\u8bbe\u7f6e\u79df\u6237Id\r\n            case EntityState.Added:\r\n                entity.Property(nameof(Entity.TenantId)).CurrentValue = GetTenantId();\r\n                break;\r\n            // \u6392\u9664\u79df\u6237Id\r\n            case EntityState.Modified:\r\n                entity.Property(nameof(Entity.TenantId)).IsModified = false;\r\n                break;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"9253-\u6ce8\u518c\u81ea\u5b9a\u4e49\u7b5b\u9009\u5668",children:"9.25.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u7b5b\u9009\u5668"}),"\n",(0,r.jsx)(e.p,{children:"\u5b9a\u4e49\u597d\u8fc7\u6ee4\u5668\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"// services.AddDb \u4e5f\u662f\u4e00\u6837\u7528\u6cd5\r\nservices.AddDbPool<FurionDbContext>(interceptors: new IInterceptor[] {\r\n    new YourSqlConnectionProfilerInterceptor(),\r\n    new YourDbContextSaveChangesInterceptor(),\r\n    new YourSqlCommandProfilerInterceptor()\r\n});\n"})}),"\n",(0,r.jsx)(e.h2,{id:"9254-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.25.4 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,r.jsx)(e.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,r.jsxs)(e.p,{children:["\u7ed9 Furion \u63d0 ",(0,r.jsx)(e.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var r=t(7294);const a={},o=r.createContext(a);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);