// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu"));