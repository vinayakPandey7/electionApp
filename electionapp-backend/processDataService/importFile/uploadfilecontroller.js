


exports.uploadAvatar = function (req,res){
   console.log('*******')
    console.log(req.file)
    var uploadedFileName = req.file.filename +'.'+ req.file.mimetype.split('/')[1];
    // save/update filenamewith user data
    res.send({size: 'jeee',filename:uploadedFileName});
    
 };

 exports.uploadFiles = function (req,res){
    var uploadedFileName = req.file.filename +'.'+ req.file.mimetype.split('/')[1];
    // save/update filenamewith user data
    res.send({size: 'jeee',filename:uploadedFileName});
 };