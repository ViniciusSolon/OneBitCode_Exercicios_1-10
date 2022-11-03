var valorM = window.prompt("Olá, diga o seu valor em Metros(m): ");

var medida = window.prompt(
  "Muito bom! o seu valor é " +
    valorM +
    ` em metros, agora escolha para qual medida você quer converter: a) milimetro | b) centimetro | c) decimetro | d) decametro | e) hectometro | f)Quilometro`
);

switch (medida) {
  case "a":
    var conversor = valorM * 1000;
    alert("O valor foi convertido para " + conversor + " Milimetros");
    break;
  case "b":
    var conversor = valorM * 100;
    alert("O valor foi convertido para " + conversor + " Centimetros");
    break;
  case "c":
    var conversor = valorM / 10;
    alert("O valor foi convertido para " + conversor + " Decimetros");
    break;
  case "d":
    var conversor = valorM * 10;
    alert("O valor foi convertido para " + conversor + " Decametros");
    break;
  case "e":
    var conversor = valorM / 100;
    alert("O valor foi convertido para " + conversor + " hectometros");
    break;
  case "f":
    var conversor = valorM / 1000;
    alert("O valor foi convertido para " + conversor + " quilometros");
    break;
}
