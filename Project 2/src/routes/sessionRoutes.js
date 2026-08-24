const express = require('express');
const router = express.Router();
const {getSession, createSession} = require('../controllers/sessionController')

router.get('/', getSessions);
router.post('/', createSession);

module.export = router;
