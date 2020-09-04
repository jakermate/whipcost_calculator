const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 9001
const server = express()
const path = require('path')
const cors = require('cors')

server.use(morgan('common'))
server.use(cors())
server.use('/', express.static(path.join(__dirname, "build")))

server.listen(()=>{
    console.log('Whipcost running on internal port ' + PORT)
})