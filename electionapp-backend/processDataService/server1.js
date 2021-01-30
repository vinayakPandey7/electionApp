var express = require('express');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


var processdataRoute = require('./processdataRoute'),
uploadfileRoute = require('./importFile/uploadfilerouter')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
    next();
});
app.use('/app1/process-data', processdataRoute);
app.use('/app1/import-file', uploadfileRoute);




app.listen( PORT , (req,res) => {
    console.log('server 1 is running on port 3000')
})