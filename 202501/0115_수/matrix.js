const aArr = [
    [7,8,9],
    [10,11,12],
    [13,14,15]
];

const resultArr = [];

for(let i=0; i<aArr.length; i++){
    const temp=[];
    for(let j=0;j<aArr[i].length; j++){
        temp.push(aArr[j][i]);
    }
    resultArr.push(temp);
}
console.log(resultArr)