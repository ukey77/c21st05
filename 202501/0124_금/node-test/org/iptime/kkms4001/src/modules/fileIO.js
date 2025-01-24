const fileIO = ({fileMode, filePath, fileData}) => {
    const fileWrite = (filePath, fileData) => {
        const fs = require("fs");
        fs.writeFile(filePath,fileData,(err)=>{
            if(err) throw err;
        });
    }

    const fileRead = (filePath) => {
        const fs = require("fs");
        fs.readFile(filePath,(err,data)=>{
            if (err) throw err;
            return data.toString();
        });
    }

    switch (fileMode) {
        case "w":
            fileWrite(filePath, fileData);
            break;
        case "r":
            fileRead(filePath)
            break;
    }
}


module.exports = fileIO;