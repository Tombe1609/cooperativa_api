const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/reportes.controller');

router.get('/estadisticas', asyncHandler(c.estadisticas));

module.exports = router;
