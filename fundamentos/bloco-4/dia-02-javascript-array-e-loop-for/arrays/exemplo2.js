// Como posso adicionar e remover itens de um Array? Veja e pratique com o exemplo a seguir:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado.

tasksList.unshift("Escovar os dentes");
console.log(tasksList);