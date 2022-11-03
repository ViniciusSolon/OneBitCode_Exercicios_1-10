var num1 = window.prompt("Diga o o número da tabuada:");

var num1 = parseInt(num1);

var num2 = 0;

for (var num2; num2 <= 20; num2++) {
  index = num1 * num2;
  console.log(num1 + " * " + num2 + " = " + index);
}
