var express = require('express'),
router = express.Router(),
multer = require('multer'),
uploadfileCtrl = require('./uploadfilecontroller'),
env = require('../../env.js');

router.post('/avatar',multer({ dest: './upload/tempImage'}).single('avatar'), uploadfileCtrl.uploadAvatar );
// router.post('/files',multer({ dest: './uploads/avatar'}).single('avatar'), uploadfileCtrl.uploadFiles);



module.exports = router; 