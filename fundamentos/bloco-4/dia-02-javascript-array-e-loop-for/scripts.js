// Exercício para fixar 1, 2 e 3 // Arrays

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Porfifólio')

menu.push('Contato');


console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);

// Exercícios para fixar // For

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

    for (let i = 0; i < groceryList.length; i++) {
        const elements = groceryList[i];
        console.log(elements)
    };

// Exercício para fixar // for/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
 
for (let i of names) {
    console.log(i);
};

// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
for(let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    console.log(indexNumbers);
}
// Exercício 2

let result = 0;

for (resultNumber = 0; resultNumber <numbers.length; resultNumber += 1) {
    result += numbers[resultNumber];
};

console.log(result);
//Exercício 3

let sum = 0;

for (sumNumbers = 0; sumNumbers < numbers.length; sumNumbers += 1);
    sum += numbers[sumNumbers];

let average = sum / numbers.length;

console.log(average);
