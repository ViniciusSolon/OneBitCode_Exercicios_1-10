const arr = [];
for (let indice = 0; indice < arr.length; indice++) {
  const elemento = arr[indice];
  alert(`${elemento} se encontra na posição ${indice + 1}`);
}
var escolha = window.prompt(
  "\n Escolha entre: " +
    "\n 1)Salvar novo imovel" +
    "\n 2)Mostrar todos os imóveis salvos " +
    "\n 3)Sair "
);

do {
  if (escolha == "1") {
    const imovel = {};
    imovel.nome = prompt("Insira o nome do imóvel.");
    imovel.proprietario = prompt("Insira o nome do proprietário.");
    imovel.quartos = Number(prompt("Insira o número de quartos."));
    imovel.banheiros = Number(prompt("Insira o número de banheiros."));
    imovel.garagem = prompt("O imóvel possui garagem? Sim/Não");

    const confirm = function confirm() {
      let confirmacao = prompt(
        "Nome do imóvel: " +
          imovel.nome +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem +
          "\n\n Deseja cadastrar este imóvel? Sim/Não"
      );
      if (confirmacao === "Sim") {
        arr.unshift(imovel.nome);
        alert("Imóvel salvo!");
      } else {
        alert("Cadastro cancelado.");
      }
    };
    confirm();

    var escolha = window.prompt(
      "\n Escolha entre: " +
        "\n 1)Salvar novo imovel" +
        "\n 2)Mostrar todos os imóveis salvos " +
        "\n 3)Sair "
    );
  } else if (escolha == "2") {
    alert("Imóveis cadastrados: " + arr);

    //Fim padrão
    var escolha = window.prompt(
      "\n Escolha entre: " +
        "\n 1)Salvar novo imovel" +
        "\n 2)Mostrar todos os imóveis salvos " +
        "\n 3)Sair "
    );
  } else if (escolha == "3") {
    alert("programa encerrado.");
    break;
  }
} while (escolha == "1" || escolha == "2" || escolha == "3");
