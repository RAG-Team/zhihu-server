const express = require("express");

const app = express();

app.listen("8000", function (err) {
	if (err) {
		console.log("服务启动失败");
	} else {
		console.log("服务启动成功，8000端口监听中");
	}
});
