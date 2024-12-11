const http = require('http');
const server=http.createServer((req,res)=>{
  if(req.method==='GET'&&req.url==='/ankit'){
res.writeHead(200,{'content-type':'text/plain'});
res.end("Hello Everyone!!!!");
  }else{
    res.writeHead(404,{'content-type':'text/plain'});
    res.end("Not found");
  }

});

server.listen(3000,()=>{
  console.log("server is running on http://localhost:3000")
})

