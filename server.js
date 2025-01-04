// const age=20
// console.log(age)
//function and thier types

// (function(){
//     console.log("anurag");
// })();
// const add=(a,b)=>{
//     return a+b;
// }
// console.log("sum is",add(5,5));
 
//  function callback(){
//     console.log("sucssessfully addded");
//  }
//  const mainfun=(a,b,callback)=>{
//     const res=a+b;
//     console.log("the sum is",res);
//     callback();
//  }
//  mainfun(4,5,callback);



// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greet.txt','hi'+user.username+'!\n',()=>console.log("successful"));
// console.log(os);

// const notes=require('./notes.js')
// console.log(notes.age);
const _=require('lodash');
const data=[1,1,1,2,2,3,3,'anurag','anurag','2'];
const filter=_.uniq(data);
console.log(filter);


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello anurag welcome to server side')
// })
// app.get('/hey',(req, res)=>{
//     res.send('hi sir how  can help u i m here to serve!')
// })
// app.get('/idli',(req, res)=>{
//     const cusmise_idli={
//         name:'rava idli',
//         size:10,
//         is_sambhar:true,
//         is_chatani:true
//     }
//     res.send(cusmise_idli )
// })


// app.listen(3000,()=>{
//     console.log('server is running on 3000')
// })
