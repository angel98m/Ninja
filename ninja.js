class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100; // Valor inicial de salud
        this.speed = 3;    // Valor predeterminado de velocidad
        this.strength = 3; // Valor predeterminado de fuerza
    }

    sayName() {
        console.log(`Ninja name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained health. Current health: ${this.health}`);
    }
}

// Ejemplo de uso
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();