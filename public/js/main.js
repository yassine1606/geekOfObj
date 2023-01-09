import * as INSTANCE from "./module/instance.js";
import * as FONCTION from "./module/fonction.js";
import * as CLASS from "./module/class.js";

let guerrier = INSTANCE.guerrier1;
let mage = INSTANCE.mage1;
let archer = INSTANCE.archer1;

// initialisation des pv, pa et du nom du guerrier
let hero1 = prompt("Entrez le nom du guerrier");
guerrier.nom = hero1;
let pvGuer = +prompt(`Entrez les pv du guerrier`)
guerrier.pv = pvGuer;
let paGuer = +prompt(`Entrez les degats du guerrier`)
guerrier.pa = paGuer;

// initialisation des pv, pa et du nom du mage
let hero2 = prompt("Entrez le nom du mage");
mage.nom = hero2;
let pvMage = +prompt(`Entrez les pv du mage `)
mage.pv = pvMage;
let paMage = +prompt(`Entrez les degats du mage `);
mage.pa = paMage;



// initialisation des pv, pa et du nom de l'archer
let hero3 = prompt("Entrez le nom de l'archer");
archer.nom = hero3;
let pvArcher = +prompt(`Entrez les pv de l'archer`);
archer.pv = pvArcher;
let paArcher = +prompt(`Entrez les degats de l'archer`);
archer.pa = paArcher;

// initialisation des modes attaque, defense ou normal
let postureHero1 = prompt("Entrez la posture du guerrier (attaque)(defense)(normal)");
if (postureHero1 == 'attaque') {
    guerrier.attack();
}
else if (postureHero1 == 'defense') {
    guerrier.defend();
}

let postureHero2 = prompt("Entrez la posture du mage (attaque)(defense)(normal)");
if (postureHero2 == 'attaque') {
    mage.attack();
}
else if (postureHero2 == 'defense') {
    mage.defend();
}
let postureHero3 = prompt("Entrez la posture de l'archer (attaque)(defense)(normal)");
if (postureHero3 == 'attaque') {
    archer.attack();
}
else if (postureHero3 == 'defense') {
    archer.defend();
}
let boss = FONCTION.randomBoss();
let pvBoss = boss.pv;
/*
    -- Si tout le monde possède des points de vie, ils vont commencer le combat et attaquer
*/
// si les 3 héros ont 0 pv ou le boss a 0 pv, le jeu s'arrête et le gagnant sera le dernier en vie
/*
    -- Si le boss est à 20% de ses pv, il posera l'énigme
    -- Si l'énigme est juste, le boss meurt sinon les héros meurent;
*/
console.log(`vous entrez dans le donjon et vous croisez ${boss.nom}`);
while ((guerrier.pv > 0 || mage.pv > 0 || archer.pv > 0) && boss.pv > 0) {
    if (boss.pv <= pvBoss * 0.2) {
        if (FONCTION.askEnigme()==true) {
            boss.pv = 0;
            console.log("Vous avez résolu l'énigme, le boss meurt !");
        }
        else{
            guerrier.pv =0;
            mage.pv = 0;
            archer.pv = 0;
            console.log("Vous n'avez pas résolu l'énigme, vous êtes mort");
        }
    }
    else{
        boss.doDamage();
        guerrier.doDamage(boss);
        mage.doDamage(boss);
        archer.doDamage(boss);
    }
    
}
if (guerrier.pv <= 0 && mage.pv <= 0 && archer.pv <= 0) {
    console.log("Tous les héros ont succombés face au boss, vous avez perdu");
}

