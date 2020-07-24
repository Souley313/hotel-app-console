// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');

function lClient() {
    request('https://souleymane-hotel-web-api.herokuapp.com/clients?start=0&size=100', {    
        json: true 
    }, function(err, res, body) {
        if (err) { 
            return console.log('Erreur', err); 
        }
        // body contient toutes les données récupérées, on extrait le nom et le prénom
        body.forEach(cl =>console.log(cl.nom, cl.prenoms));
        //console.log('Ok', body);

    });
}

// la fonction listerclients est accessible en dehors du module
exports.listerclients = lClient;