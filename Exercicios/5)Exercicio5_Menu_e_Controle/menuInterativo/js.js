var comeco = window.prompt(
  "Escolha alguma opção" +
    "\n 1- " +
    "\n 2- " +
    "\n 3- " +
    "\n 4- " +
    "\n 5- Encerrar"
);

do {
  alert("Opção escolhida " + comeco);
  var comeco = window.prompt(
    "Escolha alguma opção" +
      "\n 1- " +
      "\n 2- " +
      "\n 3- " +
      "\n 4- " +
      "\n 5- Encerrar"
  );
} while (comeco == "1" || comeco == "2" || comeco == "3" || comeco == "4");

alert("programa encerrado");
