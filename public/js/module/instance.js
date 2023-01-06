import {
    personnage
} from "../module/class.js";
import {
    guerrier
} from "../module/class.js";
import {
    mage
} from "../module/class.js";
import {
    archer
} from "../module/class.js";
import {
    boss
} from "../module/class.js";


// boss
let sauron = new boss('sauron', 100, 25);
let chronos = new boss('chronos', 100, 25);
let lilith = new boss('lilith', 100, 25);

//guerrier
let guerrier1 = new guerrier('guerrier1', 100, 50, 0);

// mage 
let mage = new mage('mage', 100, 30, 0)

// archer
let archer1 = new archer('archer1', 100, 50, 0);

function name(params) {
    
}



if (boss.vie <= boss.vie * 0.2) {

}
let enigmes = [
    "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?",
    "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?",
    "Quel heure est-il ? (écriture informatisée)",
    "Quel est l'indice du premier 'i' de cette question ?",
    "Que fait retourne Math.floor(1.3 * 10) ?"
];
let enigmeAleatoire = enigmes[Math.floor(Math.random() * enigmes.length)];