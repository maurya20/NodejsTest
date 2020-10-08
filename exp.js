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
app.get('/api',(req,res)=>{
    res.send(
        {
            user:"mike",
            Cars:['Alto','JEEP']
        }
    )
    
})
app.listen(3000)