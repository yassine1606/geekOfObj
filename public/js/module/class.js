export class personnage {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
    attaquer(boss) {
        boss -= personnage.pa;
    }
    
}
export class boss extends personnage {
    constructor(nom, pv, pa) {
        super(nom, pv, pa);
    }
    defense(this){
        this.attaquer *= 0.5;
    }
}
if (boss.pv <= boss.pv * 0.2) {
    let enigmes = [
        "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?",
        "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?",
        "Quel heure est-il ? (écriture informatisée)",
        "Quel est l'indice du premier 'i' de cette question ?",
        "Que fait retourne Math.floor(1.3 * 10) ?"
    ];
    let enigmeAleatoire = enigmes[Math.floor(Math.random() * enigmes.length)];
}

export class guerrier extends personnage {
    constructor(nom, pv, pa, rage) {
        super(nom, pv, pa);
        this.rage = rage;
    }
}

export class mage extends personnage {
    constructor(nom, pv, pa, mana) {
        super(nom, pv, pa);
        this.mana = mana;
    }

}


export class archer extends personnage {
    constructor(nom, pv, pa, nbFleche) {
        super(nom, pv, pa);
        this.nbFleche = nbFleche;
    }
}