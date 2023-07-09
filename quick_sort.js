let array = [10, 9, 15, 6, 12, 0, 54, 14, 68, 45, 20, 3];

function quickSort(array) {
    if (array.length  <= 1) return array;
    let left = [];
    let right = [];
    let pivot = array[array.length  - 1];

    for (let i = 0; i < array.length  - 1; i++) {
        if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));