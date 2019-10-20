var express = require('express');
var router = express.Router();

let landing = require("../controllers/landing")

router.get('/', landing.get_landing);
router.post('/', landing.submit_email);
router.get('/leads', landing.get_all_leads);
router.get('/lead/:lead_id', landing.get_lead_by_id);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);
module.exports = router;
