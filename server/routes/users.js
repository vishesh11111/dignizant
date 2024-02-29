var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.post('/create/form', userController.postData);
router.post('/get/form', userController.GetOurFile);


module.exports = router;
