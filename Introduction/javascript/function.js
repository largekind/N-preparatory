let myBirthTime = new Date('1982-12-17 12:30');
function updateParagraph() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText =
    '生まれてから' + seconds + '秒経過。';
}
setInterval(updateParagraph, 50); //50msでupdateParagraphをコールバック
/************* 半径求める *****************/
function areaOfCircle(r){
  let area = r * r * 3.14
  return area;
}

document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');

/************* コラッツ問題 *****************/
function collatz(n){
  document.write("collatz :"+ n + "<br>");

  if(n === 1) return;
  if (n%2 === 0){
    collatz(n / 2);
  }else{
    collatz(n*3 + 1);
  }
}

let n = 100;
collatz(1000);