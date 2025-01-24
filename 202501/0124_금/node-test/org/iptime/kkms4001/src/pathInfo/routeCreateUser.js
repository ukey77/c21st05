const createUser = (req,res) => {
    const [fs, path] = [require("fs"), require("path")];
    const user = require("../config/user");
    const fileIO = require("../modules/fileIO");
    const fileConfig = require("../config/fileConfig");

    const {inID,inPW} = req.body;
    [user["id"],user["pw"]] =[inID, inPW];

    [fileConfig["fileMode"],  fileConfig["filePath"],  fileConfig["fileData"] ]
    = ["w", path.join(__dirname,"../assests/jsons/userList.json"), JSON.stringify(user)];

    console.log("[user]", user);

    fileIO(fileConfig);
    res.redirect("/login");
}

module.exports = createUser;