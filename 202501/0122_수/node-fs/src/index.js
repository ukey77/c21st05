const fs = require("fs");

/* fs.readFile("./readme.txt")
    .then((data)=>{
        console.log("data: ",data);
        console.log("data.toString(): ",data.toString());
    })
    .catch((err)=>{
        console.error(err);
    }); */

fs.writeFile("./writeme.txt", "글이 입력됩니다.", (err) => {
    if (err) throw err;
    fs.readFile("./writeme.txt", (err, data) => {
        if (err) throw err;
        console.log("data.toString() :", data.toString());
    });
}); 