// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestNumber = 0;

for (let number = 2; number <= 50; number++) {
  let isPrime = true;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestNumber = number;
  }
} 

console.log(biggestNumber);