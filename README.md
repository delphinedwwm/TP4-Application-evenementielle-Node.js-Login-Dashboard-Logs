# Une petite application Node.js qui combine :
    • un serveur HTTP (module http) 
    • un mini front HTML (page de connexion + Dashboard) 
    • un système de journalisation (logs) dans un fichier
    • la programmation événementielle (événements prédéfinis + événements personnalisés avec EventEmitter)

## Objectifs :
    1. Identifier et utiliser des événements prédéfinis de Node.js. Ex. req.on('data'), req.on('end'), req.on('error') 
    2. Créer un Event Bus basé sur EventEmitter 
    3. Émettre des événements personnalisés avec emit(...) 
    4. Écouter des événements avec on(...) et déclencher du code dans les listeners 
    5. Enregistrer et lire des informations via le module fs (fichier de logs) 
    6. Servir des pages HTML et gérer un formulaire POST (login) 
    7. Rediriger un utilisateur après connexion (HTTP 302)