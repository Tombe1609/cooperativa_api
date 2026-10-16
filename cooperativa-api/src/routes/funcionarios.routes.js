const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const c = require('../controllers/funcionarios.controller');

router.post('/', asyncHandler(c.registrar));
router.get('/', asyncHandler(c.listar));
router.get('/:funcionario_id', asyncHandler(c.obtener));

module.exports = router;
