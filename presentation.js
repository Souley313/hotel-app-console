var cl = console.log;

// récupération du module `readline`
var readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

function start() {
    cl("1. Lister les clients");
    cl("99. Sortir");

    rl.question("", function (saisie) {
        switch(saisie){
            case '1' :cl("1. Lister les clients");
                break;
            case '99' :cl("Aurevoir!");
                break;
        }
        rl.close();
    });
}

// la fonction start est accessible en dehors du module
exports.menu = start;