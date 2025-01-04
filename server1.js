const express = require('express')
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const menuItem=require('./models/menuitem')

app.get('/', function (req, res) {
  res.send('Hello anurag welcome to server side')
})


app.post('/menuItem',async(req,res)=>{
  try{
    const menudata=req.body;
    const newMENUItem=new menuItem(menudata);
    const result=await newMENUItem.save();
    console.log("saved succefully");
    res.status(200).json(result);

  }catch(err){
     console.log(err);
    res.status(500).json({error:'internal server mistake'})

  }
})

app.get('/menuitem',async(req,res)=>{
  try{
    const data2=await menuItem.find();
    console.log("data fetched");
    res.status(200).json(data2);
  }catch(err)
  {
    console.log(err);
    res.status(500).json({error:'internal server mistake'})
  }
})
const personroutes=require("C:/anuragsharma/backcodetutorial/routes/personroutes.js");
app.use('/person',personroutes);

// comment added for testin purose
app.listen(3000,()=>{
    console.log('server is running on 3000')
})