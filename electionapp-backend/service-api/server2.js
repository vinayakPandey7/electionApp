const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT_SERVICE = 4000;

const service = require('./service-route')
app.use('/service-api',service)


app.listen( PORT_SERVICE, (req,res) => {
    console.log('server is running on port 4000')
})