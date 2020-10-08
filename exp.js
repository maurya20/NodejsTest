const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.send(`
    <html>
    <body>
    Home
    </body>
    </html>
    `)
}
)

app.listen(3000)