function Animal(name) {
    this.name = name;
}

const animal = new Animal("Bud");
const animal2 = new Animal("Lassie");

console.log(animal.hasOwnProperty);