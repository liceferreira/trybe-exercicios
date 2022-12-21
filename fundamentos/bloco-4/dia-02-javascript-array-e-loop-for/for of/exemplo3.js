// Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

// É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e, no caso, adicionando 1 à soma.

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]