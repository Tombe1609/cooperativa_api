const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/distribucion.controller');

router.get('/calculo', asyncHandler(c.calcular));
router.post('/', asyncHandler(c.registrar));
router.get('/', asyncHandler(c.consultar));

module.exports = router;
