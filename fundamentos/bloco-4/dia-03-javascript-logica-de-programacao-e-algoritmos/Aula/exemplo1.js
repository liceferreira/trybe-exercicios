// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

// let fruits = [3, 4, 10, 1, 12];

// A resolução do problema acontece em 3 etapas:

// Interpretação;
// Criação do algoritmo;
// Codificação do algoritmo.

// Portanto, primeiro vamos interpretar o que está sendo pedido, e essa etapa é crucial para solucionar o problema. Se interpretarmos errado, o algoritmo e consequentemente o código estará errado.

// Analisando o enunciado, sabemos que:

// devemos utilizar o array fruits;
// o termo “percorra“ indica uma estrutura de repetição, ou loop;
// “somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo “caso“ indica uma estrutura condicional, ou if;
// “imprima o valor final“ indica um console.log;
// Pode parecer um pouco bobo, mas, em enunciados complexos, analisar friamente o enunciado nos afasta de cometermos erros e termos que escrever todos os passos seguintes novamente.

// Agora vamos criar o algoritmo, e para isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

// Adicionar o array;
let fruits = [3, 4, 10, 1, 12];
// Criar uma variável com valor 0;
let sum = 0;
// Criar um loop que percorre o array;
for (let i = 0; i < fruits.length; i++) {
// Incrementar a variável com o valor correspondente a cada loop;
  sum += fruits[i];
}
// Criar um if com a condição de a variável ser maior que 15;
if (sum > 15) {
// Caso a variável obedeça à condição:
// Imprimir a variável
console.log(sum);
} 
// Caso não obedeça à condição:
else {
// Imprimir a mensagem “valor menor que 16”.
  console.log("Valor menor que 16");
}
