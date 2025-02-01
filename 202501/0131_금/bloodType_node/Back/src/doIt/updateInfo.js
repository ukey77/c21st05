const updateInfo = (req,res,dbSettings) => {
    const {sqlCommand, connection} = dbSettings;

    const dataObj = {
        id: req.body.id,
        name: req.body.name,
        blood_type: req.body.blood_type,
        description: req.body.description,
    }
    console.log("update_info: ", dataObj);
    connection.connect();

    connection.query(sqlCommand("updateInfo",dataObj),(err,data)=>{
        if(err) throw err;
        console.log("UPDATE DONE");
        res.redirect("http://localhost:3000");
    });

    connection.end();
}

module.exports = updateInfo;