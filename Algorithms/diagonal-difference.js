let matrixOne = [[11, 62, 43]];

let matrixTwo = [
    [14, 35, 76],
    [17, 68, 92],
];

let matrixThree = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
];

let matrixThreeReversed = [
    [94, 87, 97],
    [16, 65, 84],
    [36, 42, 21],
];

let matrixFour = [
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
    [4, 4, 4, 4],
];

let matrixFive = [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
];

let matrixBroken = [
    [1, 2, 3],
    [1, 1, 3, 4, 5],
    [3, 2, 1],
];

function diagonalDifference(arr) {
    // Write your code here
    let lRDiag = arr[0][0] + arr[1][1] + arr[2][2];
    let rLDiag = arr[0][2] + arr[1][1] + arr[2][0];

    let diagResult = lRDiag - rLDiag;

    console.log(Math.abs(diagResult));
}

function matrixIteration(arr) {
    let firstArrSum = 0;
    let secondArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstArrSum += arr[i][i];
    }

    const reverseArr = arr.reverse();

    for (let j = 0; j < reverseArr.length; j++) {
        secondArrSum += reverseArr[j][j];
    }
    console.log(firstArrSum + secondArrSum);
}

matrixIteration(matrixBroken);
