{
  //instanceOf guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = name;
    }
    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`i am barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`i am Meawing`);
    }
  }
  // smart way to  check

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("dog Vai", "dog");
  const cat = new Cat("cat Vai", "cat");
  getAnimal(dog);
  //
}
