// Configuración central. Los valores sensibles vienen de variables de entorno (.env).
require('dotenv').config({ quiet: true });

module.exports = {
  puerto: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017',
  dbName: process.env.DB_NAME || 'cooperativa_universitaria',
  entorno: process.env.NODE_ENV || 'development',

  // Regla del proyecto original: tasa fija del 5 %.
  tasaInteres: 0.05,
  // Regla de ejemplo del TXT (HU5): monto máximo por préstamo = $5.000.000.
  limitePrestamo: Number(process.env.LIMITE_PRESTAMO) || 5000000,
};
