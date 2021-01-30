const express = require('express');
const router = express.Router();
const service = require('./service-controller');

router.get('/all-user-data',service.getAllUserData)

module.exports = router;

