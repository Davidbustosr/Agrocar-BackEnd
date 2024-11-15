// app.js
const express = require('express');
const authRoutes = require('./src/routes/authRoutes'); // Asegúrate de que la ruta sea correcta
const cors = require('cors');
const app = express();

// Middleware para permitir CORS (esto es opcional, pero útil si tienes frontend separado)
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Usar las rutas de autenticación
app.use('/', authRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;