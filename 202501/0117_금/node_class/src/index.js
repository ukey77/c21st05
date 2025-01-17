const express = require("express");
const app = express();

app.use(express.static("public")); // public 폴더 내 정적 파일 서빙

app.set("views", "./views"); // 템플릿 파일 경로
app.set("view engine", "pug"); // 템플릿 엔진으로 pug 설정
app.locals.pretty = true; // 개발 환경에서 HTML 출력 정리


app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/dynamic",(req,res)=>{
    const list = [...new Array(5)].reduce((acc, cur) => {
        return acc + `<li>Beautiful Coding</li>`;
    }, "");
    res.send(list);
});

app.get("/template",(req,res)=>{
    res.render("template", { loverName: "Yujin" });
});

app.get("/option",(req,res)=>{
    const nameList = ["111",'222','3333'];
    res.send(nameList[req.query.select])
});

app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
});