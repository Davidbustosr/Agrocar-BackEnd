require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

// Configurar CORS y JSON
app.use(cors());
app.use(express.json());

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Usar las rutas de autenticación
app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;