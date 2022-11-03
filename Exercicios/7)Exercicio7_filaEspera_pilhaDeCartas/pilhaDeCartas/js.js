const arr = [
  "as de paus",
  "2 de copas",
  "3 de ouros",
  "4 de espadas",
  "5 de ouros",
  "6 de ouros",
];

for (let indice = 0; indice < arr.length; indice++) {
  const elemento = arr[indice];
  alert(
    `As cartas do baralho começando pelo topo, fica ${elemento} em ${
      indice + 1
    } lugar  `
  );
}

var escolha = window.prompt(
  "\n Escolha entre: " +
    "\n 1)Adicionar Carta" +
    "\n 2)Puxar Carta " +
    "\n 3)Sair "
);

do {
  if (escolha == "1") {
    var novaCarta = window.prompt("Agora diga o nome da nova carta ");
    var adicionado = arr.unshift(novaCarta);
    alert(
      "Carta " +
        novaCarta +
        " adicionado ao topo" +
        "\n a ordem esta a seguinte: "
    );
    for (let indice = 0; indice < arr.length; indice++) {
      const elemento = arr[indice];
      alert(
        `As cartas do baralho começando pelo topo, fica ${elemento} em ${
          indice + 1
        } lugar  `
      );
    }

    //Fim padrão
    var escolha = window.prompt(
      "\n Escolha entre: " +
        "\n 1)Adicionar Carta" +
        "\n 2)Puxar Carta " +
        "\n 3)Sair "
    );
  } else if (escolha == "2") {
    var cartaPuxada = arr.shift();
    if (cartaPuxada == undefined) {
      alert("Não há carta indefinida");
      var escolha = window.prompt(
        "\n Escolha entre: " +
          "\n 1)Adicionar Carta" +
          "\n 2)Puxar Carta " +
          "\n 3)Sair "
      );
    } else {
      alert(
        "A carta " +
          cartaPuxada +
          " foi puxada do topo" +
          "\n A ordem esta a seguinte: "
      );

      for (let indice = 0; indice < arr.length; indice++) {
        const elemento = arr[indice];
        alert(
          `As cartas do baralho começando pelo topo, fica ${elemento} em ${
            indice + 1
          } lugar  `
        );
      }

      //Fim padrão
      var escolha = window.prompt(
        "\n Escolha entre: " +
          "\n 1)Adicionar Carta" +
          "\n 2)Puxar Carta " +
          "\n 3)Sair "
      );
    }
  } else if (escolha == "3") {
    alert("programa encerrado.");
    break;
  }
} while (escolha == "1" || escolha == "2" || escolha == "3");
