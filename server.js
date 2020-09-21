// const express = require("express");
const Koa = require('koa')
const KoaRouter = require('koa-router')
// const app = express();
const app = new Koa()
const router = new KoaRouter()
// 使用中间件
app.use(router.routes())
  .use(router.allowedMethods())
  // 测试接口
router.get("/test", (ctx,next) => {
	// res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.end("如何评价《英雄联盟》S10 主题曲？");
  const string = "如何评价《英雄联盟》S10 主题曲？"
  ctx.body=string
});

// 等你来答数据请求
const  questionDatas = require('./datas/WaitYou.json')
router.get("/question",(ctx,next)=>{
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.end(questionDatas);
  ctx.body = questionDatas
})
// 手机号登录数据请求
const loginInfoList = require('./datas/login.json')
router.post("/login",(ctx,next)=>{
  ctx.body = loginInfoList
})

app.listen("6666", function (err) {
	if (err) {
		console.log("服务启动失败");
	} else {
		console.log("服务启动成功，6666端口监听中");
	}
});
