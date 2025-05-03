{
  //
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }
  const user1: UserWithRole2 = {
    name: "ash",
    age: 24,
    role: "admin",
  };

  type RollNumber = number;

  // js ==> object , array ==> obj, function ==> object

  type Roll1 = number[]; // cleaner

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll2 = [1, 2, 3];

  //function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
