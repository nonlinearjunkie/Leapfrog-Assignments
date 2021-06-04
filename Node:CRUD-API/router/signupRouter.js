const express = require("express");
const router = express.Router();
const signupController = require("../controller/signupController");

router.route("/signup").post(signupController);

module.exports = router;
