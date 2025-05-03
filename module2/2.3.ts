{
  //generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [3, 5, 6, 98];
  const rollNumber: GenericArray<number> = [3, 5, 6, 98];

  //   const mentors: string[] = ["ash", "asd", "fgt"];
  const mentors: GenericArray<string> = ["ash", "asd", "fgt"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User1 {
    name: string;
    age: number;
  }

  const user: GenericArray<User1> = [
    {
      name: "ash",
      age: 123,
    },
    {
      name: "pro",
      age: 103,
    },
  ];

  const add = (x: number, y: number) => {
    return x + y;
  };
  add(10, 23);

  //generic tuple

  type genericTuple<x, y> = [x, y];
  const manus: genericTuple<string, string> = ["mr", "mrs"];

  const userWithId: genericTuple<number, { name: string; email: string }> = [
    1234,
    {
      name: "ash",
      email: "a@gmail.com",
    },
  ];
  //
}
