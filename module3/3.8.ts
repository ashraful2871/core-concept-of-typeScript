{
  //polymorphism
  class Person {
    getSleep() {
      console.log("i am sleeping 8 hour per day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("i am sleeping 7 hour per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("i am sleeping 6 hour per day");
    }
  }
  const getSleepInHour = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSleepInHour(person1);
  getSleepInHour(person2);
  getSleepInHour(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  //Pi* r * r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    hight: number;
    width: number;
    constructor(hight: number, width: number) {
      super();
      this.hight = hight;
      this.width = width;
    }
    getArea(): number {
      return this.hight * this.width;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);
  getShapeArea(shape3);
  //
}
