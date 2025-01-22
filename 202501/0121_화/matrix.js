"use strict";
class Matrix {
    constructor(id) {
        this.id = id;
    }
    matrixMulti(matrixData) {
        const { fisrtMatrix, secondMatrix } = matrixData;
        const resultMatrix = [];
        for (let i = 0; i < fisrtMatrix.length; i++) {
            const temp = [];
            for (let j = 0; j < secondMatrix[0].length; j++) {
                let value = 0;
                for (let k = 0; k < secondMatrix.length; k++) {
                    value += (fisrtMatrix[i][k] * secondMatrix[k][j]);
                }
                const valueConvert = value === 2 ? 1 : value;
                temp.push(valueConvert);
            }
            resultMatrix.push(temp);
        }
        console.log(resultMatrix);
        // return resultMatrix;
    }
    run(matrixData) {
        this.matrixMulti(matrixData);
    }
}
const matrix = new Matrix("matrix");
const matrixData = {
    fisrtMatrix: [
        [1, 0, 0],
        [1, 1, 1],
    ],
    secondMatrix: [
        [0, 1],
        [1, 1],
        [1, 0],
    ],
};
matrix.run(matrixData);
