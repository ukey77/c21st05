var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DetMatrix = /** @class */ (function () {
    function DetMatrix(id) {
        this.id = id;
    }
    DetMatrix.prototype.matrixCalc = function () {
        var data = [
            [3, -1, -2],
            [-4, 2, 1],
            [1, 4, -3]
        ];
        var matrix = data.map(function (arr) { return __spreadArrays(arr, arr); });
        var resultSum = 0;
        for (var i = 0; i < data.length; i++) {
        }
    };
    DetMatrix.prototype.run = function () {
        this.matrixCalc();
    };
    return DetMatrix;
}());
var detMatrix = new DetMatrix("detMatrix");
detMatrix.run();
