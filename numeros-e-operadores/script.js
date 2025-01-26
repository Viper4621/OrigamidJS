// var soma = 100 + 50; // 150
// var subtracao = 100 - 50; // 50
// var multiplicacao = 100 * 2; // 200
// var divisao = 100 / 2; // 50
// var expoente = 2 ** 4; // 16 = 2x2x2x2
// var modulo = 14 % 5; // 4 = restante inteiro do numero

var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3872983892 % 3;

var soma = "100" + 50; // 10050
var subtração = "100" - 50; // 50
var multiplicacao = "100" * 2; // 200
var divisao = "comprei 10" / 2; // NaN (Not a Number)

//a ordem importa
var total1 = 20 + 5 * 2; // 30 multiplica 1 depois soma
var total2 = (20 + 5) * 2; // 50 quando desejamos fazer soma ou subtração antes de multiplicação ou divisao temos que isolar
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40 = ele entende 10x2 = 20 20/2 = 10 então 10+20+10 = 40

//Operadores Aritméticos Unários
// var incremento = 5;
// console.log(incremento++); // 5
// console.log(incremento); // 6

// var incremento2 = 5;
// console.log(++incremento2); // 6
// console.log(incremento2); // 6

var x = 5;
console.log(x++); // aqui ele retorna o mesmo valor
console.log(++x); // aqui ele ja retorna com incremento
console.log(x); // quando usamos a var ++ depois temos que chamar novamente para ver o incremento

var idade = "36";
var somaIdade = 5;
console.log(idade + somaIdade); //365
//usando antes da var - Ou + quando usamos + ele tenta transformar em numero se tiver apenas numeros ok texto da NaN
// no caso abaixo que temos idade um numero dentro de string para dar certo fazer a soma e a mudança da soma para ser -5
// precisamos primeiro transformar em +idade e depois + -somaIdade
console.log(+idade + -somaIdade);

// Qual o resultado da seguinte expressão?
var totalExercicio = 10 + (5 * 2) / 2 + 20; // 10+ 10/2 = 5 + 20 // 10 + 5 + 20
console.log(totalExercicio);

// Crie duas expressões que retornem NaN
var numeroExercicio = "é36";
console.log(+numeroExercicio);

var numeroExercicio2 = "teste" * 2;
console.log(-numeroExercicio2);

// Somar a string '200' com o número 50 e retornar 250
var somaString = +"200" + 50;
console.log(somaString);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento5 = 5;
incremento5++;
console.log(incremento5);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // 2; // NaN (Not a Number)

console.log(`o peso é ${pesoPorDois}`);
