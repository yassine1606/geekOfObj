export class personnage {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
}
export class boss extends personnage {
    constructor(nom, pv, pa) {
            super(nom, pv, pa);
}
}

export class guerrier extends personnage {
    constructor(nom, pv, pa, rage) {
        super(nom, pv, pa);
        this.rage = rage;
    }
}

export class mage extends personnage {
    constructor(nom, pv, pa,mana) {
        super(nom, pv, pa);
        this.mana = Math.floor(Math.random() * 3) + 7;

    }
}

export class archer extends personnage {
    constructor(nom, pv, pa,nbFleche) {
            super(nom, pv, pa);
            this.nbFleche = nbFleche;
    }
}