for(let i = 1; i < 100000; i++){
  let s = "";
  if(i%3 === 0) s = 'Fizz';
  if(i%5 === 0) s += 'Buzz'
  if(s === "") s = i
  document.write(s + ' ');
}