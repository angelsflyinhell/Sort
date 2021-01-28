let arraySize = 500;
let min = 0;
let max = 10;

let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray() {
    for(var i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue(min, max);

        if(array[i] == array[i-1]) {
            array[i] = generateArrayValue(min, max);
        }
    }
}

function generateArrayValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

bubbleSort(array);

function bubbleSort(array) {
    sortedArray = Array.from(array);

    for(var i=0; i < arraySize; i++) {
        for(var j=0; j < arraySize - 1; j++) {
            if(sortedArray[j] > sortedArray[j + 1]) {
                let x = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = x;
            }
        }
    }
}