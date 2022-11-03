var nome = window.prompt("Olá, vamos começar, diga o seu 1° nome: ");
var sobrenome = window.prompt("Agora, diga o seu sobrenome: ");
var areaEstudo = window.prompt(
  "Bom, " + nome + " " + sobrenome + " Diga sua área de estudo: "
);
var ano = window.prompt("Diga o seu ano de nascimento: ");
var anoAtual = window.prompt("Diga o ano atual");
parseInt(ano);
parseInt(anoAtual);

var idade = anoAtual - ano;

console.log(
  "Olá " +
    nome +
    " " +
    sobrenome +
    " o seu campo de estudo é " +
    areaEstudo +
    ", e sua idade é " +
    idade
);
