const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');
const passport = require("passport");
const key = require("../../setup/myurl");

//@type     -   GET
//@route    -   /
//@desc     -   just for testing
//@access   -   PUBLIC  
router.get("/", (req, res) => res.json({test: "Auth is being tested.."}));

//Import Schema for Person to Register
const Person = require("../../models/Person");



module.exports = router;