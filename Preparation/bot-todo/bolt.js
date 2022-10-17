// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 add      - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const bolt = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();
const todo = require('todo');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

//TODO操作の処理
app.message(/add (.+)/i, ({context, say}) => { //最後のi : 小文字大文字どちらでもok
  //(.+)にマッチする情報をtaskNameに入れて、todoに追加
  const taskName = context.matches[1].trim(); //trim()で不要な空白削除
  todo.add(taskName);
  say(`追加しました: ${taskName}`);
});

app.message(/done (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim();
  todo.done(taskName);
  say(`完了にしました: ${taskName}`);
});

app.message(/del (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim();
  todo.del(taskName);
  say(`削除しました: ${taskName}`);
});

app.message(/^list/i, ({context, say}) => {
  say(todo.list().join('\n'));
});

app.message(/donelist/i, ({context, say}) => {
  say(todo.donelist().join('\n'));
});

app.start();