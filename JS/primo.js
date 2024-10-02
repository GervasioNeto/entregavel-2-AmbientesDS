document.getElementById("verificarButton").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("inputNumber").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1) {
        alert("Por favor, insira um número válido maior que 0.");
        return;
    }

    let isPrimo = true;

    if (numero === 1) {
        isPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                isPrimo = false;
                break;
            }
        }
    }

    resultadoDiv.textContent = isPrimo 
        ? `${numero} é um número primo.` 
        : `${numero} não é um número primo.`;
    
    resultadoDiv.classList.remove("hidden");
});

document.getElementById("voltarButton").addEventListener("click", function() {
    window.location.href = "../index.html";
});
