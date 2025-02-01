const bloodType = (req,res,dbSettings)=>{
    const {sqlCommand, connection} = dbSettings;
    connection.connect();
    connection.query(sqlCommand("getData"),(err,data)=>{
        if(err) throw err;
        res.json(data);
    });
    connection.end();
}

module.exports = bloodType;