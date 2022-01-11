class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 0
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`${this.constructor.name}'s name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed:${this.speed} `)
    }

    drinkSake() {
        console.log(`${this.name}'s Original Health: ${this.health}`);
        this.health += 10;
        console.log(`${this.name}'s New Health: ${this.health}`);
    }
}


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"