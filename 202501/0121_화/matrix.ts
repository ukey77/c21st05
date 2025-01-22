interface MatrixData{
    fisrtMatrix: number[][];
    secondMatrix: number[][];
}

class Matrix{
    public id: string;
    constructor(id: string){
        this.id=id;
    }
    matrixMulti(matrixData: MatrixData){
        const {fisrtMatrix, secondMatrix} = matrixData;
        const resultMatrix: number[][] |  number[] = [];
        for(let i=0; i<fisrtMatrix.length;i++){
            const temp: any = [];
            for(let j=0; j<secondMatrix[0].length;j++){
                let value: number = 0;
                for(let k=0; k<secondMatrix.length; k++){
                    value+= (fisrtMatrix[i][k] * secondMatrix[k][j]);
                }
                const valueConvert:number = value === 2? 1 : value;
                temp.push(valueConvert);
            }
            resultMatrix.push(temp)
        }
        console.log(resultMatrix);
        // return resultMatrix;
    }
    run(matrixData: MatrixData): void{
        this.matrixMulti(matrixData)
    }
}

const matrix = new Matrix("matrix");
const matrixData: MatrixData = {
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

