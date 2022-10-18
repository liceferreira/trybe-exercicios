// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }
  return result;
};
const print = factorial(6);
console.log(`Esse é o fatorial ${print}`);