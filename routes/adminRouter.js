const express = require("express");
const router = express.Router();    

const userController = require("../controllers/authController");

router.get("/", userController.auth, userController.verifyAdmin)

module.exports= router;