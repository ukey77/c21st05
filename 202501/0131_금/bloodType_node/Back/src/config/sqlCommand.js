const sqlCommand = (url="", dataObj={}) => {
    const tableName = "blood_info";
    switch(url){
        case "getData":
        return `SELECT * FROM ${tableName};`;
            break;
        case "saveInfo":
        return  `INSERT INTO ${tableName} VALUES (null, '${dataObj["name"]}', '${dataObj["blood_type"]}', '${dataObj["description"]}');`;
            break;
        case "delete":
        return `DELETE FROM ${tableName} WHERE id='${dataObj["id"]}';`;
            break;
        case "updateInfo":
        return (`UPDATE ${tableName} SET name='${dataObj["name"]}', blood_type='${dataObj["blood_type"]}', description='${dataObj["description"]}' WHERE id='${dataObj["id"]}';`);
            break;
        }
}

module.exports = sqlCommand;