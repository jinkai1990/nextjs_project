- [前言](#前言)
- [next创建项目](#next创建项目)

# 前言
+ 学习next.js

# next创建项目
```sh
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```
初始目录结构：
+ /app:包含应用程序的所有路由、组件和逻辑，这是你大部分工作的地方。
+ /app/lib:包含应用程序中使用的函数，例如可重用的实用程序函数和数据获取函数。。 
+ /app/ui:包含应用程序的所有UI组件，例如卡片、表格和表单。为了节省时间，我们为您预先设计了这些组件。。
+ /public:包含应用程序的所有静态资产，例如图像 
+ /scripts:包含一个种子脚本，您将在后面的章节中使用它来填充数据库