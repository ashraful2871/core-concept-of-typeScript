{
  //generic constrain with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const person: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Ash",
    age: 24,
    address: "Dhaka",
  };
  const car = {
    model: "Toyota 1xrt",
    year: 24,
  };
  const result = getPropertyValue(car, "model");

  //   user["age"];
  //
}
