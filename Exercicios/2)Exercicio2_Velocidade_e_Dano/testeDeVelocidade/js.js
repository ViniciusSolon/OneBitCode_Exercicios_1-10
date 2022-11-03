var vei1 = window.prompt("Qual o nome do 1° carro?: ");
var vel1 = window.prompt("Qual a velocidade do " + vei1 + " ?");
var vei2 = window.prompt("Qual o nome do 2° carro?: ");
var vel2 = window.prompt("Qual a velocidade do " + vei1 + " ?");

if (vel1 == vel2) {
  alert("A velocidad é a mesma para os dois carros");
} else if (vel1 > vel2) {
  alert("O " + vei1 + " é mais rápido");
} else if (vel1 < vel2) {
  alert("O " + vei2 + " é mais rápido");
}
