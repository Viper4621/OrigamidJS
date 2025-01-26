var idade = 36;
console.log(typeof idade);

var nome = "erick";
var sobreNome = "luciano";

var nomeCompleto = nome + " " + sobreNome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "romario fez " + gols + " gols";
console.log(typeof frase);

var ano = "2018";
var mes = 8;

console.log(ano + mes);
var melhor = "teste";
var frase1 = "esse é o " + melhor + " jogo";
console.log(frase1);

// template string

var frase3 = `romario fez ${gols * 3} gols`;
console.log(frase3);

//exercicios

// Declare uma variável contendo uma string
var exercicio = "string";

// Declare uma variável contendo um número dentro de uma string
var exercicio2 = "120";
// Declare uma variável com a sua idade
var exercicioIdade = 36;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var exercicioNome = "erick";
var exercicioSobreNome = "Luciano";
var exercicioSoma = `${exercicioNome} + ${exercicioSobreNome}`;

// Coloque a seguinte frase em uma variável: It's time
var exercicioItsTime = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof exercicioNome);
