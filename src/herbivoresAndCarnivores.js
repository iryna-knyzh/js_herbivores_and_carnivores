'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden === true) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      if (index !== -1) {
        delete Animal.alive[index];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
