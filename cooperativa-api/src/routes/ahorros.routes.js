const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/ahorros.controller');

router.post('/', asyncHandler(c.crearCuenta));
router.get('/', asyncHandler(c.listarCuentas));
router.get('/:ahorro_id', asyncHandler(c.obtenerCuenta));
router.post('/:ahorro_id/depositos', asyncHandler(c.depositar));
router.post('/:ahorro_id/retiros', asyncHandler(c.retirar));
router.get('/:ahorro_id/movimientos', asyncHandler(c.consultarMovimientos));

module.exports = router;
