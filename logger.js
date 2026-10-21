// logger.js
const fs = require('fs');
const path = require('path');
const eventBus = require('./eventBus');

const logFilePath = path.join(__dirname, 'data', 'logs.txt');

function writeLog(message) {
    const now = new Date().toISOString();
    const logLine = `[${now}] ${message}\n`;

    fs.appendFile(logFilePath, logLine, (err) => {
        if (err) {
            console.error('Erreur écriture log:', err);
        }
    });
}

// ICI : écoute d’un événement personnalisé ↓
eventBus.on('custom:message', (message) => {
    console.log('LOG EVENT:', message);
    writeLog(`custom:message - ${message}`);
});

eventBus.on('server:start', ({ port }) => {
    console.log(`LOG EVENT: server:start (port ${port})`);
    writeLog(`server:start - port ${port}`);
});