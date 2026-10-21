const eventBus = require('./eventBus');

module.exports = server;

// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    // Ce code est exécuté à CHAQUE requête HTTP
    console.log('Nouvelle requête reçue');
    console.log('URL:', req.url);
    console.log('Méthode:', req.method);

    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('<h1>Serveur Node.js actif</h1>');

    //if (req.url === '/') {
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.end('<h1>Accueil</h1>');
   // } else if (req.url === '/about') {
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.end('<h1>À propos</h1>');
    //} else {
      //  res.writeHead(404, { 'Content-Type': 'text/html' });
        //res.end('<h1>Page non trouvée</h1>');
    //}
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});


