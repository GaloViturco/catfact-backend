const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/catfact', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    const fact = response.data.fact;
    res.json({ fact });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cat fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
