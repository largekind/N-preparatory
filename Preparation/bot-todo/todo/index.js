'use strict';
// { name: タスクの名前, isDone: 完了しているかどうかの真偽値 }
let tasks = [];

const fs = require('fs');
const fileName = './tasks.json';

// 同期的にファイルから復元 例外処理
try {
  const data = fs.readFileSync(fileName, 'utf8');
  tasks = JSON.parse(data);
} catch (err) {
  console.log(`${fileName}から復元できませんでした`);
}
/**
 * タスクをファイルに保存する
 */
function saveTasks() {
  fs.writeFileSync(fileName, JSON.stringify(tasks), 'utf8');
}

/**
 * タスクを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
  saveTasks();
}
/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} task
 * @return {boolean} 完了したかどうか
 */
function isDone(task) {
  return task.isDone;
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
 * @param {object} task
 * @return {boolean} 完了していないかどうか
 */
function isNotDone(task) {
  return !isDone(task);
}

/**
 * タスクの一覧の配列を取得する
 * @return {array}
 */
function list() {
  return tasks
    .filter(task => isNotDone(task)) //task.isDoneがfalseになるものだけ列挙(未完了のリストを列挙)
    .map(task => task.name); //配列taskからtask.nameを取得して、その値だけを出力
}
/**
 * タスクを完了状態にする
 * @param {string} taskName
 */
function done(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName); //doneで与えられたtasknameと一致するtask.nameを検索
  if (indexFound !== -1) { //-1外であれば発見、その要素のisDoneフラグを立てる
    tasks[indexFound].isDone = true;
  }
  saveTasks();
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function donelist() {
  return tasks
    .filter(task => isDone(task)) //isDoneがtureであるリストの名前を列挙
    .map(task => task.name);
}

/**
 * 項目を削除する
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1); //spliceメソッドでindexFoundの箇所の要素を1つ削除
  }
  saveTasks();
}

//外部で使用するモジュールの列挙
module.exports = {
  add,
  list,
  done,
  donelist,
  del
};
