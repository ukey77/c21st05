var Matrix = /** @class */ (function () {
    function Matrix(id) {
        this.id = id;
    }
    Matrix.prototype.matrixMulti = function (matrixData) {
        var fisrtMatrix = matrixData.fisrtMatrix, secondMatrix = matrixData.secondMatrix;
        var resultMatrix = [];
        for (var i = 0; i < fisrtMatrix.length; i++) {
            var temp = [];
            for (var j = 0; j < secondMatrix[0].length; j++) {
                var value = 0;
                for (var k = 0; k < secondMatrix.length; k++) {
                    value += (fisrtMatrix[i][k] * secondMatrix[k][j]);
                }
                var valueConvert = value === 2 ? 1 : value;
                temp.push(valueConvert);
            }
            resultMatrix.push(temp);
        }
        console.log(resultMatrix);
        return resultMatrix;
    };
    Matrix.prototype.run = function (matrixData) {
        this.matrixMulti(matrixData);
    };
    return Matrix;
}());
var matrix = new Matrix("matrix");
var matrixData = {
    fisrtMatrix: [
        [1, 0, 0],
        [1, 1, 1],
    ],
    secondMatrix: [
        [0, 1],
        [1, 1],
        [1, 0],
    ]
};
matrix.run(matrixData);
