const express = require('express');
const https = require('https');

const app = express();
app.get('/', (req, res) => res.send('Ping bot is running'));
app.listen(3000, () => console.log("Mini web server lancé"));

const SERVER_URL = 'https://ton-serveur.onrender.com/'; // Remplace ici

function pingServer() {
  https.get(SERVER_URL, (res) => {
    console.log(`[${new Date().toISOString()}] Ping réussi: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toISOString()}] Erreur de ping:`, err.message);
  });

  const delay = Math.floor(Math.random() * (7 - 2 + 1) + 2) * 60 * 1000;
  console.log(`Prochain ping dans ${(delay / 60000).toFixed(1)} minutes...\n`);
  setTimeout(pingServer, delay);
}

pingServer();
