// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let size = 5;
let symbol = '*';
let input = '';
let position = size;

for (let i = 0; i <= size; i++) {
  for (let column = 0; column <= size; column++) {
    if (column < position) {
      input = input + ' ';
    } else {
      input = input + symbol;
    }
  }
  console.log(input);
  input = '';
  position -= 1;
}
