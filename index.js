const express=require('express')
const cors=require('cors')
const app=express();
const path=require('path')
const table=require('./table')
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    console.log("headers set")
  });

app.use(express.static(__dirname+'/dist/Zoho'))
app.get('/*',(req,res)=>{
    console.log("wild card entry")
    res.sendFile(path.join(__dirname))
});


app.use('/table',table);
app.get('/',(req,res)=>{
    res.json({"message":"hy friends this route is still under construction"})
})
app.listen((process.env.PORT || 3000),()=>{
    console.log('working')
})
