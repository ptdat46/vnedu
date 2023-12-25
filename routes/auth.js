const express = require('express');
const router = express.Router();
const signin = require("../controllers/auth").signin
const signup = require("../controllers/auth").signup

router.post('/login', signin);
router.post('/signup', signup);

module.exports = router;