const fs = require('fs');
const path = require('path');

const eventBus = require('./eventBus');

// server.js
const http = require('http');

function serveFile(res, filePath, contentType = 'text/html') {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur serveur');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}
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
    //} else if (req.url === '/about') {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('<h1>À propos</h1>');
    //} else {
    //res.writeHead(404, { 'Content-Type': 'text/html' });
    //res.end('<h1>Page non trouvée</h1>');
    //}

    if (req.method === 'GET' && req.url === '/login') {
        const filePath = path.join(__dirname, 'public', 'login.html');
        serveFile(res, filePath);
        return;
    }
    if (req.method === 'GET' && req.url === '/dashboard') {
        const filePath = path.join(__dirname, 'public', 'dashboard.html');
        serveFile(res, filePath);
        return;
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
    // Le serveur démarre… c’est aussi un événement !
    eventBus.emit('server:start', { port: PORT });
});


module.exports = server;