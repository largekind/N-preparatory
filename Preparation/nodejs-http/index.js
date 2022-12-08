'use strict';
const http = require('http'); //HTTPモジュール使用
const server = http.createServer((req, res) => { //HTTPサーバー作成
  res.writeHead(200, { //200ステータスを返す
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write(req.headers['user-agent']); //ユーザーエージェントだけレスポンスに記載
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});