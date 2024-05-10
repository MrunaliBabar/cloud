const dbConnection=require('./connection')
const express=require('express');
let mongoObjectId=require('mongodb').ObjectId
const app=express();

app.use(express.json());

app.get("/",async (req,res)=>{
    let result=await dbConnection();
    result=await result.find().toArray();
    res.send(result);
})

app.post("/",async (req,res)=>{
    let result=await dbConnection();
    result=await result.insertOne(req.body);
    res.send("Data inserted Successfully");
})

app.put("/:name",async (req,res)=>{
    let result=await dbConnection();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated  Successfully");
})

app.delete("/:id",async (req,res)=>{
    let result=await dbConnection();
    // result=await result.deleteOne({name:req.params.name})
    result=await result.deleteOne({_id:new mongoObjectId(req.params.id)})
    res.send("Data deleted Successfully");
})

app.listen(8000)