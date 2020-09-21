// const express = require("express");
const Koa = require('koa')
const KoaRouter = require('koa-router')
// const app = express();
const app = new Koa()
const router = new KoaRouter()
app.use(router.routes())
	.use(router.allowedMethods())
router.get("/test", (ctx, next) => {
	// res.setHeader("Content-Type", "text/html;charset=utf-8");
	// res.end("如何评价《英雄联盟》S10 主题曲？");
	const string = "如何评价《英雄联盟》S10 主题曲？"
	ctx.body = string
});

// 等你来答数据请求
const questionDatas = require('./datas/WaitYou.json')
router.get("/question", (ctx, next) => {
	// res.setHeader("Content-Type", "text/html;charset=utf-8");
	// res.end(questionDatas);
	ctx.body = questionDatas
})
// 我的主页数据
const myHomeDatas = require('./datas/MyHome.json')
router.get("/myhome", (ctx, next) => {
	// res.setHeader("Content-Type", "text/html;charset=utf-8");
	// res.end(questionDatas);
	ctx.body = myHomeDatas
})

app.listen("6666", function (err) {
	if (err) {
		console.log("服务启动失败");
	} else {
		console.log("服务启动成功，6666端口监听中");
	}
});
