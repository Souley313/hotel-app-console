// Rôle => communiquer avec l'utilisateur
var service = require('./service.js');

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var config = {
    1: { libelle: ' Lister les clients', fn: menuListerClients },
    2: { fn: menuCreerClient, libelle: 'Creer' },
    99: { fn: menuQuitter, libelle: 'Quitter' }
};

var start = function () {

    console.log('** Administration Hotel **');

    for (var prop in config) {
        console.log(prop + ". " + config[prop].libelle);
    }


    rl.question('Quelle action choisissez-vous ? : ', function (saisie) {

        choix = parseInt(saisie);
        config[choix].fn(rl);
    });
}

function menuQuitter(rl) {
    console.log('Au revoir');
    rl.close();
}

function menuCreerClient(rl) {


    rl.question('nom:', function (nom) {
        rl.question('prenoms:', function (prenoms) {

            service.creerClient(nom, prenoms, function (clientCree) {

                console.log('Client créé', clientCree);
                start();

            }, function (err) {
                console.log('Oops', err);
                start();
            })
        })
    })

}

function menuListerClients(rl) {
    console.log('>> Liste des clients');

    //1

    // code synchrone
    // var tabClients = service.listerClients();
    // ici listerClients est totalement terminé
    // comme en Java

    // code asynchrone avec fonction de rappel
    //  service.listerClients(function(tabClients) {
    // résultat
    //});
    // => service.listerClients() ne peut pas te répondre tout de suite
    // => il lui faut du temps...
    // => il te propose de donner ton numéro de téléphone
    // => il va te rappeler quand c'est prêt

    // => le numéro de téléphone c'est la fonction

    service.listerClient(function (tabClients) {

        // 3
        var clientsAffichage = tabClients.map(function (client) {
            return client.nom + ' ' + client.prenoms;
        }).join('\n');

        console.log(clientsAffichage);
        start();
    }, function (error) {
        console.log('Erreur ...', error);
    });
}
exports.start = start;
