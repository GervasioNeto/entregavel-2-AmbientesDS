function contarNumerosInteiros() {
    const n = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(n)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let numeros = [];

    for(let i = 0; i < n; i++) {
        let numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
        numeros.push(numero);
    }

    let count = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(Number.isInteger(numeros[i])) {
            count++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Foram digitados ${count} números inteiros.`;
    resultDiv.classList.remove("hidden");
}

document.getElementById("startButton").addEventListener("click", contarNumerosInteiros);