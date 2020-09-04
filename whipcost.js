const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8088
const path = require('path')
const cors = require('cors')

const server = express()
server.listen(PORT, ()=>{
    console.log('Whipcost running on internal port ' + PORT)
})

server.use(morgan('common'))
server.use(cors())
server.use('/', express.static(path.join(__dirname, "build")))



server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
})