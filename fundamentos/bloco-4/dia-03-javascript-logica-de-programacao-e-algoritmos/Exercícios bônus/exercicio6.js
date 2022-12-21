// Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let divisor = 1;
let checkNumbers = 11;

for (let number = 2; number <= checkNumbers; number++) {
  if (checkNumbers % number === 0) divisor++;
}
if (divisor === 2) console.log(checkNumbers + ' é um número primo');
else console.log(checkNumbers + ' não é um número primo')