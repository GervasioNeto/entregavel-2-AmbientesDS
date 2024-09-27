document.getElementById("generateButton").addEventListener("click", function() {
    let n = parseInt(document.getElementById("inputNumber").value);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let termo1 = 0;
    let termo2 = 1;
    let termo3;
    let sequencia = `${termo1}, ${termo2}`;

    for (let i = 3; i <= n; i++) {
        termo3 = termo1 + termo2;
        sequencia += `, ${termo3}`;
        termo1 = termo2;
        termo2 = termo3;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Sequência de Fibonacci (${n} termos): ${sequencia}`;
    resultDiv.classList.remove("hidden");
});