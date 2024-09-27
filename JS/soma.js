document.getElementById("somarButton").addEventListener("click", function() {
    const input = document.getElementById("inputNumbers").value;
    const numbersArray = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbersArray.length === 0) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const soma = numbersArray.reduce((acc, num) => acc + num, 0);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `A soma dos números é: ${soma}`;
    resultadoDiv.classList.remove("hidden");
});
