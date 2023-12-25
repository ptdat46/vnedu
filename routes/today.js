const express = require('express');
const router = express.Router();
const saveEmail = require("../controllers/today").saveEmail
const getData = require("../controllers/today").getData

router.post('/today', saveEmail);
router.get('/today', getData);

module.exports = router;