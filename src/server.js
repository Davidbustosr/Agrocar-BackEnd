// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes'); // Asegúrate de que esta ruta sea correcta

const app = express();

// Configurar CORS y JSON
app.use(cors());
app.use(express.json());

// Usar las rutas de autenticación en la raíz ('/')
app.use('/', authRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;