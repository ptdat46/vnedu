const express = require('express');
const router = express.Router();
const saveData = require("../controllers/Day").saveData
const getData = require("../controllers/Day").getData

router.post('/day/:mm/:dd/:yy', saveData);
router.get('/day/:mm/:dd/:yy', getData);

module.exports = router;