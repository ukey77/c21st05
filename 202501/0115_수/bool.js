"use strict";
const boolCalc = (x, y, z) => {
    return (x || (!x && y && z) || (!y && !z)) ? "T" : "F";
};
// console.log(boolCalc(true,true,false));
const boolData = [
    [false, true],
    [false, true],
    [false, true]
];
const result = [];
for (let i = 0; i < boolData[0].length; i++) {
    for (let j = 0; j < boolData[i].length; j++) {
        for (let k = 0; k < boolData[j].length; k++) {
            // array로 전달할 방법?
            // console.log(boolCalc(boolData[0][i],boolData[1][j],boolData[2][k]));
        }
    }
}
// 이거로 바꿔봐요
const boolObj = {
    x: [false, true],
    y: [false, true],
    z: [false, true]
};
// for(let key in object){
//     object[key]
// }
