function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

document.getElementById("ordenarButton").addEventListener("click", function() {
    const input = document.getElementById("inputNumbers").value;
    const numbersArray = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbersArray.length === 0) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const sortedArray = quicksort(numbersArray);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `Números ordenados: ${sortedArray.join(', ')}`;
    resultadoDiv.classList.remove("hidden");
});
