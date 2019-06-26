# redux, express, koa 中间件实现对比分析<!-- omit in toc -->
- [说明](#%E8%AF%B4%E6%98%8E)
  - [全局安装nodemon](#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85nodemon)
  - [运行express](#%E8%BF%90%E8%A1%8Cexpress)
  - [运行koa](#%E8%BF%90%E8%A1%8Ckoa)
  - [redux](#redux)

这里是示例代码，简单模拟了 redux, express, koa的执行流程，剥离出了中间件的核心实现，尽量保留原始结构和主流程，去掉异常处理，完整性校验，辅助工具等干扰代码，更方便的帮助理解中间件的执行过程。


## 说明
> 注意: 在chromeDevTool中把 `/favicon.ico`请求block掉, 否则浏览器默认会发起`/favicon.ico`影响测试

`src` 中分别是`express`, `koa`, `redux`的模拟实现

`test` 文件夹中是三者的使用实例


### 全局安装nodemon
`npm i nodemon -g`

### 运行express

运行 `npm run express` 

访问 `http: 127.0.0.1: 3000`

查看控制台输出

`express` test 文件中有部分注释代码，用于演示 `async` 函数作为中间件，可以自行打开注释运行查看

### 运行koa 

运行 `npm run koa` 

访问 `http: 127.0.0.1: 3000`

查看控制台输出

### redux

运行 `npm run redux` 

查看控制台输出

**每个 test 文件里面都可以替换为真正的 `express`, `koa`, `redux` 对比运行效果**
