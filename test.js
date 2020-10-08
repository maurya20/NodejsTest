const http = require('http')
const fs = require('fs')

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'application/json'})
    const json = JSON.stringify({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }

    )
    response.end(json)
}).listen(8181)
console.log("Server is running at port: 8181")
