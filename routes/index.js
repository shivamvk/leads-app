var express = require('express');
var router = express.Router();

let index = require("../controllers/index")

/* GET home page. */
router.get('/', index.get_landing);

/* POST email on home page. */
router.post('/', index.submit_email);

module.exports = router;
