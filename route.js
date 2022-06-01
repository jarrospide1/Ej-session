const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/show', controller.show)
router.post('/show', controller.add);

router.get('/', controller.index);

module.exports = router;