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
import path from 'path';
import { fileURLToPath } from 'url';

const app=express()

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const PORT =8000;

app.get("/ankit",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","calculator.html"));
});

app.use(express.static(path.join(__dirname,"views")));

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});

