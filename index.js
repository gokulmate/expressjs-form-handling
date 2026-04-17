const express = require('express')
const app = express();
const url = require("url"); //url imported


app.get('/',(req,res)=>{
    res.render('signup.ejs');
});
app.set("view engine", "ejs"); // view engine set

app.get('/saveform',(req,res)=>{
// fetch data from url
let result = url.parse(req.url,true)

// only query 
console.log(result.query);


res.render('userdata.ejs',{data: result.query});
})
const HOST= '127.0.0.1';
const PORT= 5000;

app.listen(PORT,HOST,()=>{
    console.log(`server up on http://${HOST}:${PORT}`);
})

