const express = require("express");
const app = express();
const router = express.Router();

const path = require("path");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const cdrRouter = require("./routes/cdr");

app.use(express.json()); // post방식 처리

app.use("/",indexRouter);
app.use("/user",userRouter);
app.use("/cdr",cdrRouter);

app.use((req,res,next)=>{
    res.status(404).send("Not found");
});


app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});


app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
});