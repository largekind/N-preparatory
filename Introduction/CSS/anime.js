let header = document.getElementById('header');
let degree = 0;//角度
//回転
function rotateHeader(){
  //角度計算
  degree += 6;
  degree %= 360;
  //表面が見える0～90 / 270～360どの場合は色切り替え
  if((0 <= degree && degree <= 90)||(270 <= degree && degree <= 360)){
    header.setAttribute('class','face');
  }else{
    header.setAttribute('class','back');
  }

  header.style.transform = 'rotateX('+degree+'deg)';
}

//20msで呼び出し処理
setInterval(rotateHeader,20);