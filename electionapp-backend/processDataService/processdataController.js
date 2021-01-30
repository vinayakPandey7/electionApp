// const Product = require('../models/product.model');
var fs = require("fs");

//Simple version, without validation or sanitation


exports.hello = function (req, res) {
    var x = {
        name: 'vinayak',
        lastname: 'pandey'
    }
    res.send({
        message : 'from server 1',
        data: x
    })
};

exports.importFile = function (req,res){
   var uploadedFileName = req.file.filename +'.'+ req.file.mimetype.split('/')[1];
   // save/update filenamewith user data
   res.send({size: 'jeee',filename:uploadedFileName});
   
};

exports.editUser = function (req, res) {


  
};