let nameList = ["Joana", "Maria", "Lucas"];

for (let i = 0; i < nameList.length; i++) {
  let msg = "Boas vindas, " + nameList[i] + "!";
  console.log(msg)
}

// Embora seja um recurso da linguagem, o uso do operador de incremento (++) não é recomendado. O maior problema é que, embora seu uso principal esteja na geração de um side effect, esse operador sempre irá retornar algum valor e, pra piorar, as expressões (++x) e (x++), embora sejam facilmente confundidas por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.

// Levando isso em consideração, o uso desse operador pode gerar confusão e causar bugs inesperados. Sendo assim, uma vez que o += 1 substitui completamente o ++, recomenda-se o uso exclusivo de += 1, e é essa a regra que iremos adotar neste conteúdo daqui pra frente!