var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.getAllUsers.bind(userController));

/* POST users listing. */
router.post('/', userController.createUser.bind(userController));

module.exports = router;
