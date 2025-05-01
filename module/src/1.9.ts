//type Alias

{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Ash",
    age: 24,
    gender: "Male",
    contactNo: "017589835849",
    address: "ctg",
  };
  const student2: Student = {
    name: "rock",
    age: 30,
    gender: "Male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "ash";
  const isAdmin: IsAdmin = true;
  //function

  type Add = (num1: number, num2: number, num3: number) => number;

  const add: Add = (num1, num2, num3) => {
    return num1 + num2 + num3;
  };
}
