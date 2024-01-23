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
    [5, -5, 5, -5, 5],
    [5, 5, -5, 5, 5],
    [5, -5, 5, 5, 5],
    [-5, 5, 5, 5, 5],
];

let impossibleArr = [
    [64, -83, -92, -87, -99, -13, 30, 100, -78, 16],
    [1, 83, 29, -68, -100, -12, 81],
    [
        4, -4, -64, 57, 64, 91, 61, -14, -51, 36, 70, -80, 55, -20,
        -64, 71, -62, 88, 84, -5, 51, -15, -6, -99, -45, 97,
    ],
    [4, -81, -72, -74, 50, 3, 44, 8, 44, 17, 38, -90, -41],
    [100, -75, -99, -95, -52, 68],
    [
        79, 92, 44, -5, 42, 7, -100, -35, -73, 46, -61, 96, 98, -94,
        83, 49, 77, 5, 66, -1, -36, -91, 82, -61, -45, -38, -72, -16,
        83, -5, -70, 17, 57, -18, -8, 9, 67, 18, 54, 14, -38,
    ],
    [81, -72, -74, 50, 3, 44, 8, 44, 17, 38],
    [
        4, 59, 70, 21, -66, -29, 7, 3, 91, -75, 86, 48, 39, 46, 26,
        33, -62, -45, -94, 74, -59, -70, -92, -72, -75, 7, 16, -86,
        -58, 49, -42, 100, -97, -36, 18, -17, -44, -36, -20, -2,
    ],
    [-10, 1, 4, -6, 18, -9, -4, -7, 1],
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
    parseInt(arr);
    let firstArrSum = 0;
    let secondArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstArrSum += arr[i][i];
    }

    const reverseArr = parseInt(arr.reverse());

    for (let j = 0; j < reverseArr.length; j++) {
        secondArrSum += reverseArr[j][j];
    }
    console.log(Math.abs(firstArrSum + secondArrSum));
}

matrixIteration(impossibleArr);
