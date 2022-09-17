let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for (let i = 0; i < scores.length ; i++) {
  if (maxScore < scores[i]) {
    maxScore = scores[i];
  }
}
console.log('最高得点は' + maxScore + '点 です！');

let chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (let i=0; i < chars.length; i++){
  for (let j=0; j < chars.length; j++){
    document.write(chars[i] + chars[j]);
    document.write('<br>');
  }
  document.write('<br>');
}
