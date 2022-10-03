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


//  Exercício para fixar 5 // Operadores lógicos

let weekDay = "quarta-feira";

    if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
        console.log("Oba! Mais um dia de aprendizado na Trybe! >:D");
    }
    else if (weekDay === "sábado" || weekDay ==="domingo") {
        console.log("FINALMENTE, descanso merecido! UwU");
    }

//  Exercício para fixar 6 // Switch case

const status = "reprovada";

switch(status) {
    case 'aprovada':
      console.log("Parabéns, você foi aprovada(o)!");
      break;
    case 'lista':
      console.log("Você está na nossa lista de espera");
      break;
    case 'reprovada':
      console.log("Você foi reprovada(o)");
      break;
    default:
      console.log("Informação incorreta");
      break;
  }

  // Exercício 1 // Aritimética básica

  const a = 10;
  const b = 5;
  
  console.log('Soma: ' + (a + b));
  console.log('Subtração: ' + (a - b));
  console.log('Multiplicação: ' + (a * b));
  console.log('Divisão: ' + (a / b));
  console.log('Módulo: ' + (a % b));

// Exercício 2

const maiorNumero = 15;
const menorNumero = 12;

  if (maiorNumero > menorNumero) {
    console.log("15 é maior que 12");
  } else {
    console.log("12 é maior que 15");
  };

// Exercício 3 

const aa = 6;
const bb = 4;
const cc = 2;

if (aa > bb && aa > cc) {
  console.log('O maior número é: ' + aa + ' (a)');
} else if (bb > aa && bb > cc) {
  console.log('O maior número é: ' + bb + ' (b)');
} else {
  console.log('O maior número é: ' + cc + ' (c)');
};

// Exercício 4

const number4 = 100;

if (number4 > 0) {
  console.log("positive");
} else if (number4 < 0) {
  console.log("negative");
} else {
  console.log("zero");
};

// Exercício 5

const angleA = 60;
const angleB = 60;
const angleC = 60;

let sum = angleA + angleB + angleC;

let positiveAngle = angleA > 0 && angleB > 0 && angleC > 0;

  if (positiveAngle) {
    if(sum === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log("ângulo inválido")
  };

// Exercício 6

const chess = 'rei';

switch (chess.toLowerCase()) {
  case 'rei':
    console.log("Rei: uma casa em qualquer direção");
  break;
  case 'rainha':
    console.log("Rainha: quantas casas quiser na diagonal, horizontal e vertical");
  break;
  case 'bispo':
    console.log("Bispo: quantas casas quiser na diagonal");
  break;
  case 'torre':
    console.log("Torre: quantas casas quiser na vertical e horizontal");
  break;
  case 'cavalo':
    console.log("Cavalo: em L");
  break;
  case 'peao':
    console.log("Peão: uma casa para frente, no primeiro movimento pode avançar duas casas");
  default:
    console.log("Erro: peça inválida");
  break;
};

// Exercício 7

let gradePercentage = 100;

  if (gradePercentage < 0 || gradePercentage > 100) {
    console.log("Erro, nota inválida");
  } else if (gradePercentage >= 90) {
    console.log("A");
  } else if (gradePercentage >= 80) {
    console.log("B");
  } else if (gradePercentage >= 70) {
    console.log("C");
  } else if (gradePercentage >= 60) {
    console.log("D");
  } else if (gradePercentage >= 50) {
    console.log("E");
  }else if (gradePercentage < 50) {
    console.log("F");
  };
  