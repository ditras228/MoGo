const express = require('express')
const path = require('path')

const PORT= 4444

const app = express()

app.use(express.static(__dirname))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(PORT)