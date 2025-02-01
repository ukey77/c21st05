const  deleteData = (req,res,dbSettings)=>{
    const {sqlCommand, connection} = dbSettings;
    console.log("deleteData: ",{id: req.body.id})
    connection.connect();
    connection.query(sqlCommand("delete",{id: req.body.id}),(err,data)=>{
        if(err) throw err;
        console.log("DELETE DONE", data);
        res.redirect("http://localhost:3000");
    });
    connection.end();
}

module.exports = deleteData;