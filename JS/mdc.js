function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

document.getElementById("calculateButton").addEventListener("click", function() {
    let numero1 = parseInt(document.getElementById("inputNumber1").value);
    let numero2 = parseInt(document.getElementById("inputNumber2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let mdc = calcularMDC(numero1, numero2);

    let resultadoDiv = document.getElementById("result");
    resultadoDiv.textContent = `O MDC de ${numero1} e ${numero2} é: ${mdc}`;
    resultadoDiv.classList.remove("hidden");
});
