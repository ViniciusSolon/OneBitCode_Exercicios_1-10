//Variaveis
var palavra = window.prompt(
  "Olá diga a sua palavra para verificarmos se é um palíndromo: "
);
var palavra2 = palavra;
var palavra3 = palavra.split("").reverse().join("");
alert("A palavra escolhida foi: " + palavra2);
alert("O Inverso dessa palavra é: " + palavra3);

//Lógica
if (palavra2 == palavra3) {
  alert("A palavra " + palavra2 + " é um palíndromo");
} else {
  alert(
    "A palavra escolhida foi: " +
      palavra2 +
      ", e o inverso dela é: " +
      palavra3 +
      ", por isso não é um palíndromo"
  );
}
