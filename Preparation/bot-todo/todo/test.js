'use strict';
const todo = require('./index.js');
const assert = require('assert');

// add と list のテスト
todo.add('ノートを買う'); //index.js内にあるtaskに対して要素追加
todo.add('鉛筆を買う');
assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']); //要素の追加が問題ないか確認

// done と donelist のテスト
todo.done('鉛筆を買う'); //'鉛筆買う'を有効化
assert.deepStrictEqual(todo.list(), ['ノートを買う']); //リストの比較
assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);

// del のテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');