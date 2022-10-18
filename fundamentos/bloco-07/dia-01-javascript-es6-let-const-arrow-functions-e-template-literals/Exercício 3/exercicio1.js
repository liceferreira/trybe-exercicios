// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
const longestWord = text => {
  const wArray = text.split(' ');
  let max = 0;
  let result = ' ';

  for (const word of wArray) {
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  }
  return result;
}


  console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'