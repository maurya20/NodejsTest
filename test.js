const http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'text/plain'})
    response.end("Hello there, This is my first node server")
}).listen(8181)
console.log("Server is running at port: 8181")
