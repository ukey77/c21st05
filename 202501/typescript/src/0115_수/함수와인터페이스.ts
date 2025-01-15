interface SquareFunc{
    (num: number): number;
}

const squareFunc: SquareFunc = function(num: number){
    return num * num;
}

console.log(squareFunc(10));