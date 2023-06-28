const array = [2, 4, 8, 6, 7, 9, 11, 20, 15, 0, 3];

function grind(array) {
    if(array.length<=1)return array
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);
    return union(grind(left), grind(right));
}

function union(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i++]);
        } else {
            arr.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        arr.push(arr2[j++]);
    }

    return arr;
}
console.log(grind(array));
