function areaTriangulo(base, altura) {
  alert("A área do Triangulo é: " + (base * altura) / 2 + "m³");
}

function areaRetangulo(base, altura) {
  alert("A área do Retangulo é: " + base * altura + "m³");
}

function areaQuadrado(lado) {
  alert("A área do Quadrado é: " + lado * lado + "m³");
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  alert(
    "A área do Trapezio é: " + ((baseMaior + baseMenor) * altura) / 2 + "m³"
  );
}

function areaCirculo(pi, raio) {
  alert("A área do Circulo é: " + pi * (raio * raio) + "m³");
}

do {
  var menu = window.prompt(
    `Escolha as áreas da formas geometricas \n 1) Triangulo \n 2) Retângulo \n 3) Quadrado \n 4) Trapézio \n 5) Círculo \n 6) Encerrar `
  );
  switch (menu) {
    case "1":
      var base = window.prompt("diga a base");
      var altura = window.prompt("diga a altura");
      areaTriangulo(base, altura);
      break;
    case "2":
      var base = window.prompt("diga a base");
      var altura = window.prompt("diga a altura");
      areaRetangulo(base, altura);
      break;
    case "3":
      var lado = window.prompt("diga o lado do Quadrado: ");
      areaQuadrado(lado);
      break;
    case "4":
      var baseMaior = window.prompt("diga a base maior");
      var baseMenor = window.prompt("diga a base menor");
      var altura = window.prompt("diga a altura");
      areaTrapezio(baseMaior, baseMenor, altura);
      break;
    case "5":
      var raio = window.prompt("diga o raio do circulo: ");
      areaCirculo(raio, (pi = 3.14));
      break;
    case "6":
      alert("Você escolheu encerrar, adeus");
      break;
  }
} while (menu !== "6");
