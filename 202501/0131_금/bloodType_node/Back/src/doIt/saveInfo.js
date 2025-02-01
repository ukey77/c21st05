const saveInfo = (req, res, dbSettings) => {
    const { sqlCommand, connection } = dbSettings;

    const dataObj = {
        name: req.body.name,
        blood_type: req.body.blood_type,
        description: req.body.description,
    }

    console.log("saveInfo: ",dataObj);
    connection.query(sqlCommand("saveInfo", dataObj), (err, data) => {
        if (err) throw err;
        console.log("INSERT DONE: ", data);
        res.redirect("http://localhost:3000");
    });
    connection.end();
}
module.exports = saveInfo;
