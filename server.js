const express = require("express");

const app = express();

app.get("/test", (req, res) => {
	res.setHeader("Content-Type", "text/html;charset=utf-8");
	res.end("如何评价《英雄联盟》S10 主题曲？");
});

app.listen("8000", function (err) {
	if (err) {
		console.log("服务启动失败");
	} else {
		console.log("服务启动成功，8000端口监听中");
	}
});
