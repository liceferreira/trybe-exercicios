// Você aprendeu a trabalhar com o loop for e agora sabe que ao utilizá-lo você deve informar qual a quantidade de iterações ele deverá realizar mas, já parou para pensar o que acontece quando você não sabe quantas vezes um loop deve se repetir? 🤔

// “Por exemplo, quando precisamos descobrir se duas variáveis possuem o mesmo valor.

// ⚠️ Tenha muito cuidado! É fácil causar loops infinitos utilizando o while!

// Ao contrário do for, o while executa a iteração com apenas uma condição. Enquanto essa condição for verdadeira o conteúdo de escopo do while vai sendo cumprido e ao encontrar uma condição falsa o bloco é então encerrado. Por exemplo:


let counter = 0;

while(counter !== 5) {
  counter += 1;
}

// Neste caso o while irá rodar até que a variável counter alcance o valor 5. Mas e se o valor inicial fosse 6, o que aconteceria?

// Ele entraria em um loop infinito, e provavelmente travaria o computador. Para então não termos esse problema é importante nos certificarmos do valor inicial que será atribuído.