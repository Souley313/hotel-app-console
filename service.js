// Rôle => gérer les données et communiquer avec l'extérieur (Web API)

// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');


function listerClient(callbackSuccess, callbackError) {

    // Web API => définir une ressource => en déduire les URLs
    // GET /clients
    // GET /clients/ID
    // POST /clients

    request('https:/souleymane-hotel-web-api.herokuapp.com/clients/pagination?start=0&size=30', 
    { json: true }, 
    function (err, res, tabClients) {
        if (err && callbackError) { 
            callbackError(err); 
        }

        callbackSuccess(tabClients);

    });
}

function creerClient(nom, prenoms, callbackSuccess, callbackError) {

    request({
       url: 'https://souleymane-hotel-web-api.herokuapp.com/clients',
       //json: true,
       method: "POST",
       headers: {
        'Content-Type': 'application/json'
      },
       body: `{"nom": "${nom}", "prenoms": "${prenoms}"}`
     }, 
    function (err, res, unClient) {
        if (err && callbackError) { 
            callbackError(err); 
        }

        callbackSuccess(unClient);

    });
}

exports.listerClient = listerClient;
exports.creerClient = creerClient;