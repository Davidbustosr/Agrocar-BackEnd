// src/routes/authRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

router.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Código de autorización no recibido.');
  }

  try {
    // Solicitar el token de acceso usando el authorization code
    const response = await axios.post('https://api.mercadolibre.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
      },
    });

    const { access_token, refresh_token, expires_in } = response.data;

    // Devolver los tokens al frontend o manejar como sea necesario
    res.json({ access_token, refresh_token, expires_in });
  } catch (error) {
    console.error('Error al obtener el token de acceso:', error);
    res.status(500).send('Error al obtener el token de acceso');
  }
});

module.exports = router;