// Exercício para fixar

const myName = "Alice";
const birthCity = "Curitiba";
let birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// const birthCity = "Poços de Caldas";
// console.log(birthCity);
 // No caso, receberíamos uma mensagem de erro pois a constante foi alterada, o que não é permitido.


// Exercício para fixar 2

const base = 5;
const height = 8;
const area = (base * height);
const perimeter = 5 + 5 + 8 + 8;
//const perimeter = (base + height) * 2;

console.log(area);
console.log(perimeter);

// Exercício para fixar 3

const nota = 83;

    if(nota >= 80) {
        console.log("Parabéns, você foi aprovado(a)!")
    } 
    else if(nota < 80 && nota >= 60) {
        console.log("Você está na nossa lista de espera")
    } 
    else if (nota < 60) {
        console.log("Você foi reprovado(a)")
    }
    // else {
    //     console.log("Você foi reprovado(a)")
    
//  Exercício para fixar 4 

const currentHour = 9;
let message = "";

    if (currentHour >= 22) {
        message = "Não deveríamos comer nada agora, é hora de dormir";
    }
    else if (currentHour >= 18 && currentHour < 22) {
        message = "Rango da noite, vamos jantar :D";
    }
    else if (currentHour >= 14 && currentHour < 18) {
        message = "Vamos fazer um bolo para o café da tarde?";
    }
    else if (currentHour >= 11 && currentHour <= 14) {
        message = "Hora do almoço!!!";
    }
    else if (currentHour >= 4 && currentHour <= 11) {
        message = "Hmmmm, cheiro de café recém passado";
    }

    console.log(message);