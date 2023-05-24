class Potion {
    constructor() {
        this.empty = false;
    }

    drink() {
        this.empty = true;
        console.log("HEll YEah")
    }
}

class NoisyPotion extends Potion {
    drink() {
        super.drink();
        console.log("LOUD NOISES!");
    }
}

const noisyPotion = new NoisyPotion;
noisyPotion.drink()