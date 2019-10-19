var express = require('express');
var router = express.Router();

let landing = require("../controllers/landing")

/* GET home page. */
router.get('/', landing.get_landing);

/* POST email on home page. */
router.post('/', landing.submit_email);

module.exports = router;
