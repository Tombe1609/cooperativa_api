const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/prestamos.controller');

router.post('/', asyncHandler(c.solicitar));
router.get('/:prestamo_id', asyncHandler(c.obtener));
router.get('/:prestamo_id/interes', asyncHandler(c.calcularInteres));
router.post('/:prestamo_id/pagos', asyncHandler(c.registrarPago));
router.get('/:prestamo_id/pagos', asyncHandler(c.historialPagos));

module.exports = router;
