const fs = require('fs')
const os = require('os')
const user = os.userInfo()
const date = new Date()
let message = `user '${user.username}' started app at ${date}   hiiiiiii`
fs.appendFile("hello.txt", message,(err)=>{
    if(err){
        console.log("Something went wrong while appending")
    }
})