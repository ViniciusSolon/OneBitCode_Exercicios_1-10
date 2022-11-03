var nome = window.prompt("Olá, qual é seu nome?");
var cidades = "";
var contagem = 0;
var visitCidade;

let continuar = prompt("Você visitou alguma cidade ?(Sim/Não)");

while (continuar === "sim") {
  var cidade = prompt("Qual é o nome da cidade visitada? ");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = window.prompt("voce visitou alguma outra cidade?");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas: " +
    cidades
);
