// const express=require('express');
// const app=express();
// const PORT=8000;
// app.use(express.static('views'));


// app.get("/ankit",(req,res)=>{
//   // console.log(`server is running on http://localhost:`)
//   res.sendFile(__dirname+"/views/calculator.html")
 
// });

// app.listen(PORT,()=>{
  
//     console.log(`server is running on http://localhost:${PORT}`);
   
//   });
// import exp from 'constants';
import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app=express()

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

// const PORT =8000;
const PORT=process.env.PORT;
const URL=process.env.MONGODB_URI;
console.log(URL);


// app.get("/ankit",(req,res)=>{
//   res.sendFile(path.join(__dirname,"views","calculator.html"));
// });

// app.get('/ankit')
// app.use(express.static(path.join(__dirname,"views")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/name",(req,res)=>{
  const fName=req.body.firstName;
  const lName=req.body.secondName;
  const fullName=fName+lName;
  res.json({name:fullName});
})




app.use((req,res,next)=>{
  const secretcode=req.query.secret;
  if(secretcode==='1234'){
    req.isAuthorized=true;
  }
  else{
    req.isAuthorized=false;
  }
  next();
});


app.get("/",(req,res)=>{
  if(req.isAuthorized){
    
    res.sendFile(path.join(__dirname,"views","calculator.html"));
  }
  else{
    res.send("unathorized");
  }
});



mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("DB connected successfully");

  app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});

})
.catch((err)=>{
  console.error("Connection failed:",err);
})



app.use(express.static(path.join(__dirname,"views")));


