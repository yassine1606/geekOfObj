import * as INSTANCE from './instance.js';


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
    doDamage() {
        let tabPerso = [INSTANCE.guerrier1, INSTANCE.archer1, INSTANCE.mage1];
        let random = Math.floor(Math.random() * tabPerso.length);
        let cible = tabPerso[random];
        cible.pv -= this.pa;
        console.log(cible.nom+"  a subi "+this.pa + " dégats, il lui reste "+cible.pv +" points de vie");
    }
}


export class guerrier extends personnage {
    constructor(nom, pv, pa, rage) {
        super(nom, pv, pa);
        this.rage = rage;
    }

    attack() {
        this.pa *= 1.4;
        this.pv *= 0.75;
    }
    defend() {
        this.pa *= 0.5;
        this.pv *= 2.5;
    }
    doDamage(boss) {
        if (this.rage == 4) {
            this.pa *= 1.25;
            console.log("Vous avez atteint le maximum de rage, votre attaque est augmentée  "+ this.pa);
            boss.pv-= this.pa
            console.log(boss.nom+"  a subi "+this.pa + " dégats, il lui reste "+boss.pv +" points de vie");
            this.rage = 0;
            this.pa /= 1.25;
            console.log("Votre attaque est revenue a la normale : "+this.pa);
        }
        else{
        boss.pv -= this.pa;
        
        this.rage++;
        console.log("Votre rage augmente : "+this.rage);
        }
    }
}

export class mage extends personnage {
    constructor(nom, pv, pa, mana) {
        super(nom, pv, pa);
        this.mana = mana;
    }
    attack() {
        this.pa *= 1.4;
        this.pv *= 0.75;
    }
    defend() {
        this.pa *= 0.5;
        this.pv *= 2.5;
    }
    doDamage(boss) {

        if (this.mana <= 0) {
            console.log("Impossible d'attaquer, vous n'avez plus de mana");
            this.mana += 7;
            console.log(this.nom + " a rechargé sa mana : " + this.mana);
        }
        else {
            boss.pv -= this.pa;
            console.log(boss.nom+"  a subi "+this.pa + " dégats, il lui reste "+boss.pv +" points de vie");

            this.mana -= 2;
            console.log("Votre mana diminue : "+this.mana);
        }
    
    }
}
export class archer extends personnage {
    constructor(nom, pv, pa, nbFleche) {
        super(nom, pv, pa);
        this.nbFleche = nbFleche;
    }
    attack() {
        this.pa *= 1.4;
        this.pv *= 0.75;
    }
    defend() {
        this.pa *= 0.5;
        this.pv *= 2.5;
    }
    doDamage(boss) {

        if (this.nbFleche <= 0) {
            this.nbFleche += 6;
            console.log("Impossible d'attaquer, vous n'avez plus de flèche");
            console.log(this.nom + " a rechargé ses flèches : " + this.nbFleche);


        }
        else {
            boss.pv -= this.pa;
            console.log(boss.nom+"  a subi "+this.pa + " dégats, il lui reste "+boss.pv +" points de vie");
            this.nbFleche = this.nbFleche - 2 + 1;
            console.log(this.nom + " a perdu 2 fleches sur le boss mais en a ramassé 1 :" + this.nbFleche);
        }
    }
}