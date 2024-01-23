let matrixOne = [[11, 62, 43]];

let matrixTwo = [
    [14, 35, 76],
    [17, 68, 92],
];

let matrixThree = [
    [36, 42, 21],
    [16, 65, 84],
    [94, 87, 97],
];

let matrixThreeReversed = [
    [94, 87, 97],
    [16, 65, 84],
    [36, 42, 21],
];

let matrixFour = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];

let matrixFive = [
    [23, 56, 23, 65, 43],
    [23, 54, 76, 54, 43],
    [23, 43, 54, 26, 48],
    [82, 59, 78, 23, 31],
    [54, 34, 64, 76, 41],
];

let matrixBroken = [
    [4, 2, 5],
    [2, 6, 4, 3, 1],
    [4, 7, 9],
];

function diagonalDifference(arr) {
    // Write your code here
    let lRDiag = arr[0][0] + arr[1][1] + arr[2][2];
    let rLDiag = arr[0][2] + arr[1][1] + arr[2][0];

    let diagResult = lRDiag - rLDiag;

    console.log(Math.abs(diagResult));
}

// diagonalDifference(matrixFive);

function matrixIteration(arr) {
    // let arrSums = [0, 0];
    // console.log('Reversed Array: ', reverseArr);
    let firstArrSum = 0;
    let secondArrSum = 0;
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        console.log('Matrix 3: ', arr[i][i]);
        firstArrSum += arr[i][i];

        // for (let j = 0; j < arr.length; j++) {
        //     console.log('J: ', arr[j]);
        // }
    }
    console.log(firstArrSum);

    const reverseArr = arr.reverse();

    for (let j = 0; j < reverseArr.length; j++) {
        console.log('3 Reversed: ', reverseArr[j][j]);
        secondArrSum += reverseArr[j][j];
    }
    console.log(secondArrSum);
    console.log(firstArrSum + secondArrSum);
}

matrixIteration(matrixThree);

// var printArray = function (arr) {
//     if (typeof arr == 'object') {
//         for (var i = 0; i < arr.length; i++) {
//             printArray(arr[i]);
//         }
//     } else document.write(arr);
// };

// printArray(matrixFive);
