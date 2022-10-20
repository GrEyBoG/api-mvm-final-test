const router = require('express').Router();

router.use('/action', require('./routes.master'));

module.exports = router;