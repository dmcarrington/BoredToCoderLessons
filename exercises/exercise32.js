class Car {
  constructor() {}
  drive() {
    console.log("vroom");
  }
}

class SportsCar extends Car {
  constructor() {
    super();
  }
  driveFast() {
    console.log("vroom vroom");
  }
}

car = new Car();
car.drive();

sportsCar = new SportsCar();
sportsCar.drive();
sportsCar.driveFast();
