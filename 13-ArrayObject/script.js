arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6]


let max = 0;
let min = 81;
let maxEvenIndex;
let minOddIndex;

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (max < arr[i]) {
            max = arr[i];
            maxEvenIndex = i;
        }
    }
    if (arr[i] % 2 !== 0) {
        if (min > arr[i]) {
            min = arr[i];
            minOddIndex = i;

        }
    }
}

if (maxEvenIndex !== undefined && minOddIndex !== undefined) {
    [arr[maxEvenIndex], arr[minOddIndex]] = [arr[minOddIndex], arr[maxEvenIndex]];
}

console.log(arr);
