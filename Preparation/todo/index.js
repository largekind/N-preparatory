'use strict';
// { name: タスクの名前, isDone: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * タスクを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
}
/**
 * タスクの一覧の配列を取得する
 * @return {array}
 */
function list() {
  return tasks
    .filter(task => !task.isDone) //task.isDoneがtrueになるものだけ列挙
    .map(task => task.name); //配列taskからtask.nameを取得して、その値だけを出力
}
module.exports = { add , list };
