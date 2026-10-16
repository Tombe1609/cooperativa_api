const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/estudiantes.controller');

router.post('/', asyncHandler(c.registrar));
router.get('/', asyncHandler(c.listar));
router.get('/:usuario_id/prestamos', asyncHandler(c.consultarPrestamos));
router.get('/:usuario_id', asyncHandler(c.obtener));

module.exports = router;
