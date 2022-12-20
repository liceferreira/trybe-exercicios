// Até aqui, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens.
// Você pode estar se perguntando: “Ok. Agora, como faço para remover?”
// Para responder essa pergunta, veja o seguinte exemplo:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

// O método .pop() nos permite remover o último item do array. Mas se precisarmos remover o primeiro item da lista, podemos usar o .shift(). Faça em seu console e veja o resultado.

tasksList.shift();
console.log(tasksList);

// [ 'Reunião, 'Brincar com o cachorro' ]