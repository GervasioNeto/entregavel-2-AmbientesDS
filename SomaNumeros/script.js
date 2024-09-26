var n = prompt("Informe a quantidade de números:");
var numero;
var soma = 0;
var i = 0;

while (i < n) {
    numero = parseInt(prompt("Informe um número:"));
    soma += numero;
    i++;
}

document.write("A soma dos " + n + " números é " + soma);