import * as INSTANCE from './instance.js';


export function randomMana() {
    let array = [7, 9, 11];
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomValue = array[randomIndex];
    return randomValue;
}

export function randomFleche() {
    let array = [7, 8, 9, 10, 11];
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomValue = array[randomIndex];

    return randomValue;
}

export function poserEnigme() {
    const enigmes = [
        { enigme: "Quel chiffre obtient-on en multipliant tous les chiffres d'un clavier ?", reponse: "0" },
        { enigme: "Combien y a-t-il de continents dans le monde?", reponse: "6" },
        { enigme: "Quelle est la capitale de l'europe ?", reponse: "Bruxelles" },
    ];

    const enigme = enigmes[Math.floor(Math.random() * enigmes.length)];

    let reponseCorrecte = false;
    let nbEssais = 0;
    while (!reponseCorrecte && nbEssais < 3) {
        const reponse = prompt(enigme.enigme);
        if (reponse === enigme.reponse) {
            reponseCorrecte = true;
        }
        nbEssais++;
    }
    return reponseCorrecte;
}



export function randomBoss() {
    let tabBoss = [INSTANCE.sauron, INSTANCE.chronos, INSTANCE.lilith];
    let random = Math.floor(Math.random() * tabBoss.length);
    let cibleBoss = tabBoss[random];
    return cibleBoss;
}