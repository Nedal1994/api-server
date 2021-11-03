'use strict'

const express=require('express')
require('dotenv').config()
const logger=require('./middleware/logger')
const server=express()

const notFoundHandler=require('./error-handlers/404')
const errorHandler=require('./error-handlers/500')

const PORT = process.env.PORT || 3200

const foodRouter = require('./routes/foodRoute');
const clothesRouter = require('./routes/clothesRoute');

server.get('/hello',(req,res)=>{
    res.status(200).send('all is good')
})

server.get('/error',(req,res,next)=>{
    next('you made an error')
})

server.use(express.json())

server.use('*',notFoundHandler)
server.use(errorHandler)
server.use(logger)

server.use(foodRouter);
server.use(clothesRouter);


function start(){
    server.listen(PORT,()=>{
    console.log(`${PORT}`)
})
}

module.exports={server:server,start:start}