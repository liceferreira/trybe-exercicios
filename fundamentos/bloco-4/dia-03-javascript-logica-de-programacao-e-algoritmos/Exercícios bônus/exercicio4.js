// epois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let size = 5;
let symbol = '*';
let input = '';

let mid = (size + 1) / 2;
let left = mid;
let right = mid;


for (let i = 0; i <= mid; i++) {
  for (let column = 0; column <= size; column++) {
    if (column > left && column < right) {
      input = input + symbol;
    } else {
      input = input + ' ';
    }
  }
  console.log(input);
  input = '';
  right += 1;
  left -= 1;
}
