const arr = ["Vini", "DG", "Jota"];
for (let indice = 0; indice < arr.length; indice++) {
  const elemento = arr[indice];
  alert(`${elemento} se encontra na posição ${indice + 1}`);
}
var escolha = window.prompt(
  "\n Escolha entre: " +
    "\n 1)Novo paciente" +
    "\n 2)Atender o paciente " +
    "\n 3)Sair "
);

do {
  if (escolha == "1") {
    var novoPaciente = window.prompt("Agora diga o nome do novo paciente: ");
    var adicionado = arr.push(novoPaciente);
    alert(
      "Paciente " +
        novoPaciente +
        " adicionado na fila" +
        "\n a fila está a seguinte: "
    );
    for (let indice = 0; indice < arr.length; indice++) {
      const elemento = arr[indice];
      alert(`${elemento} se encontra na posição ${indice + 1}`);
    }

    //Fim padrão
    var escolha = window.prompt(
      "\n Escolha entre: " +
        "\n 1)Novo paciente" +
        "\n 2)Atender o paciente " +
        "\n 3)Atender o paciente "
    );
  } else if (escolha == "2") {
    var pacienteAtendido = arr.shift();
    if (pacienteAtendido == undefined) {
      alert("Não há pacientes");
      var escolha = window.prompt(
        "\n Escolha entre: " +
          "\n 1)Novo paciente" +
          "\n 2)Atender o paciente " +
          "\n 3)Sair "
      );
    } else {
      alert(
        "Paciente " +
          pacienteAtendido +
          " foi atendido." +
          "\n A fila está a seguinte: "
      );

      for (let indice = 0; indice < arr.length; indice++) {
        const elemento = arr[indice];
        alert(`${elemento} se encontra na posição ${indice + 1}`);
      }

      //Fim padrão
      var escolha = window.prompt(
        "\n Escolha entre: " +
          "\n 1)Novo paciente" +
          "\n 2)Atender o paciente " +
          "\n 3)Sair "
      );
    }
  } else if (escolha == "3") {
    alert("programa encerrado.");
    break;
  }
} while (escolha == "1" || escolha == "2" || escolha == "3");
