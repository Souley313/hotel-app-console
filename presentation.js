var cl = console.log;

var service = require("./service.js");

// récupération du module `readline`
var readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

function start() {
    cl("1. Lister les clients");
    cl("2. Ajouter un client");
    cl("3. Rechercher un client par nom");
    cl("4. Vérifier la disponibilité d'une chambre");
    cl("99. Sortir");

    rl.question("", function (saisie) {
        switch(saisie){
            case '1' :cl(">> Listes des clients");
                        service.listerclients();
                break;
            case '2' :cl(">> Ajouter un client");
                break;
            case '3' :cl(">> Rechercher un client par nom");
                break;
            case '4' :cl(">> Vérifier la disponibilité d'une chambre");
                break;
            case '99' :cl("Aurevoir!");
                break;
        }
        rl.close();
    });
}

// la fonction menu est accessible en dehors du module
exports.menu = start;