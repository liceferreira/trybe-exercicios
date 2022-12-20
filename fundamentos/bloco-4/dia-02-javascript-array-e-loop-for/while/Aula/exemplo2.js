// Para o exemplo que falamos anteriormente, a solução utilizando while, seria a seguinte.


function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}
