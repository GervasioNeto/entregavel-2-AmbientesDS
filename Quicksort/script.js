let n = parseInt(prompt("Digite o número de itens no array:"));
if (isNaN(n) || n <= 0) {
    alert("Número inválido. O número de itens deve ser um número positivo.");
} else {
    let array = [];


    for (let i = 0; i < n; i++) {
        let item = parseInt(prompt("Digite o item " + (i + 1) + ":"));
        if (!isNaN(item)) {
            array.push(item);
        } else {
            alert("Entrada inválida. Digite apenas números.");
            i--;
        }
    }

    quickSort(array, 0, array.length - 1);

    document.getElementById("resultado").textContent = "Array ordenado: " + array.join(', ');
}
function quickSort(array, low, high) {
    if (low < high) {
        let pi = partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    return i + 1;
}