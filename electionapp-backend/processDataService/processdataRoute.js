var express = require('express');
var router = express.Router();
var multer = require('multer')

// Require the controllers WHICH WE DID NOT CREATE YET!!
var processDataCtrl = require('./processdataController')

// a simple test url to check that all of our files are communicating correctly.
router.get('/hello/1', processDataCtrl.hello);
router.post('/import-file',multer({ dest: './uploads/'}).single('profile_pic'), processDataCtrl.importFile);
module.exports = router;