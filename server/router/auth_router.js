const express = require("express");
const home = require("../controller/auth_controller");
const router = express.Router();

router.route('/').get(home)

module.exports = router