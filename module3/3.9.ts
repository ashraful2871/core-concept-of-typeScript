{
  //Abstraction in OOP 1. interface 2. abstract
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    moveEngine(): void;
  }

  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`car is starting`);
    }
    stopEngine(): void {
      console.log(`car is stop`);
    }
    moveEngine(): void {
      console.log(`car is moving`);
    }
    test() {
      console.log(`i am just testing`);
    }
  }

  const toyota = new Car1();
  toyota.startEngine();

  //abstract class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moveEngine(): void;
    test() {
      console.log(`i am just testing`);
    }
  }
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("i am starting car engine");
    }
    stopEngine(): void {
      console.log("car just stopped");
    }
    moveEngine(): void {
      console.log("car is moving");
    }
  }

  //
}
