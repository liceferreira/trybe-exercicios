// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let size = 7;
let symbol = '*';
let input = '';

let mid = (size + 1) / 2;
let left = mid;
let right = mid;


for (let line = 0; line <= mid; line++) {
  for (let column = 1; column <= size; column++) {
    if (column == left || column == right || line == mid) {
      input += symbol;
    } else {
      input += ' ';
    }
  }
  console.log(input);
  input = '';
  right += 1;
  left -= 1;
}
