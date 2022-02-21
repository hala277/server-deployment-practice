'use strict';

const { request, response } = require('express');
// define express
const express = require('express');

// so i can use express methode and libraries in my app
const app = express();

// start function 
function start(port){
    app.listen(port,()=>{
console.log(`running on port ${port}`)
    })
}

// route
app.get('/',(request,response) => {
    response.send('home route')
})

app.get('/data',(request,response) => {
    response.status(200).json({
        name: 'hala',
        email: 'hala.ha1@gmail.com'
    })
})

// here i will export app, start so I can use them at index.js
module.exports = {
    app: app,
    start: start
}