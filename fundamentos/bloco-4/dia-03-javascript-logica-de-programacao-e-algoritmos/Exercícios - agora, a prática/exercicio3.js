// Considere o array de strings abaixo 

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let higherWord = array[0];
let smallWord = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > higherWord.length) {
    higherWord = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if(array[i].length < smallWord.length) {
    smallWord = array[i]
  }
}

console.log(higherWord);
console.log(smallWord);