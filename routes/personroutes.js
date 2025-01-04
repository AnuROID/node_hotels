const express=require('express');
const router=express.Router();
const person=require('C:/anuragsharma/backcodetutorial/models/person.js')

router.post('/',async(req,res)=>{
    // const data=req.body
    //cretae a newperson document using the mongoose model
    // const newPerson=new person(data);
    // instead of this we can give data to person person(data)
    // newPerson.name=data.name;
    // newPerson.age=data.age;
  
    //save the new person details to the database
    // newPerson.save((error,savedPerson)=>{
    //   if(error){
    //         console.log('error saving person:',error);
    //         res.status(500).json({error:'internam server error'})
    //     }else
    //     {
    //        console.log('data saved successfully');
    //        res.status(200).json(savedPerson);
    //     }
    // })
    try{
      const data=req.body
      const newPerson=new person(data);
      const response=await newPerson.save();
      console.log('saved successfully');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
    }
})
router.get('/',async(req,res)=>{
    try{
      const data=await person.find();
      console.log("data fetched");
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server mistake'})
    }
})
router.get('/:Worktype',async(req,res)=>{
    try{
      const Worktype=req.params.Worktype;
      if(Worktype=='chef'|| Worktype=='waiter'|| Worktype=='manager'){
        const response=await person.find({work: Worktype});
        console.log('fetched worktype');
        res.status(200).json(response);
      }else{
        res.status(404).json({error:'invalid work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({err:'internal server error'})
    }
})
router.put('/:id', async(req,res)=>{
  try{
    const personId=req.params.id;
    const updatepersondata=req.body;

    const response=await person.findByIdAndUpdate(personId,updatepersondata,{
      new:true,//return the update document
      runValditors:true
    })
    if(!updatepersondata){
      return res.status(404).json({error:"person not found"})
    }
    console.log("data updated succesfully")
    res.status(200).json(response)
  }catch(error){
    console.log(error);
    res.status(500).json('internal server error')
  }
})

module.exports=router;