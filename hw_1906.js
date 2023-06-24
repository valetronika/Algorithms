// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.

// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256

// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
let k = 8;

const merge = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
};

const findElem = (arr1, arr2, index) => {
    const mergedArray = merge(arr1, arr2);

    if (index < 1 || index > arr1.length + arr2.length) {
        return null;
    }
    return mergedArray[index - 1];
};
const result = findElem(arr1, arr2, k);
console.log(result);
//-----------

const merge2 = arr1.concat(arr2).sort((a, b) => a - b);
const findElem2 = (array, index) => {
    if (index >= array.length) {
        return null;
    }
    return array[index - 1];
};
const result2 = findElem2(merge2, k);
console.log(result2);
