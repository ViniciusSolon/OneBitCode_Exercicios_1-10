var quantInicial = parseInt(window.prompt("Olá, Qual é o valor inicial? "));
var opcao = window.prompt("Para escolher alguma opção digite: começar");

do {
  var opcao = window.prompt(
    "Escolha alguma opção" +
      "\n 1- Depositar " +
      "\n 2- Sacar " +
      "\n 3- Encerrar "
  );
  if (opcao == "1") {
    var quantDeposito = parseInt(
      window.prompt(
        "O seu saldo é " + quantInicial + ", gostaria de depositar quanto?"
      )
    );
    var quantInicial = quantInicial + quantDeposito;
    alert("O novo valor é: " + quantInicial);
  } else if (opcao == "2") {
    var quantSaque = parseInt(
      window.prompt(
        "O seu saldo é " + quantInicial + ", gostaria de sacar quanto?"
      )
    );
    var quantInicial = quantInicial - quantSaque;
    alert("O novo valor é: " + quantInicial);
  } else if (opcao == "3") {
    alert("Operação encerrada");
  }
  var opcao = window.prompt("Quer continuar a transação? (sim/não)");
} while (opcao == "começar" || opcao == "sim");
