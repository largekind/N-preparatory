for (let i = 1; i <= 3; i++){
  if(!(i%3)) document.write('サァン！');
  else document.write(i);
  document.write(' ');
}

document.write('<br>');
let age = 16;
let Member = true;
let pay = 0;

document.write('あなたの年齢は');
document.write(age);
document.write('歳かつ');
document.write(Member ? '会員' : '非会員');
document.write('なので、値段は');
if(age < 15) pay = 800;
else if(Member) pay = 1000;
else pay = 1800;

document.write(pay);
document.write("円です");