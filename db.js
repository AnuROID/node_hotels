const mongoose=require('mongoose');
//define the mongodb connection url
const mongoURL='mongodb://127.0.0.1:27017/hotels'/** replace "mydatabase" with yr database name*/

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 10000, 
})
//get the default connection 
/**mongoose maintains a default connection object 
 representing the mongodbconnection**/
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb')
})
db.on('error',()=>{
    console.log('mongodb connection erro ')
})
db.on('disconnected',()=>{
    console.log('disconnected to mongodb')
})

module.exports=db;
