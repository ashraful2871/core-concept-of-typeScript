{
  //OOP  ===> class
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Jarman Dog", "dog", "ghew ghew");
  const cat = new Animal("Parsian", "cat", "Meaw Meaw");
  dog.makeSound();
  //   cat.makeSound();
  //
}
