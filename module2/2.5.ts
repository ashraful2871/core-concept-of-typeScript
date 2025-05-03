{
  //function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<string>("true");
  interface User1 {
    id: number;
    name: string;
  }
  const resObject = createArrayWithGeneric<User1>({ id: 1123, name: "Ash" });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res20 = createArrayWithTuple<string, number>("true", 654);

  const res10 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Ash",
  });

  const addCourse = <T>(student: T) => {
    const course = "Next Level";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourse({
    name: "ash",
    email: "a@gmail.com",
    devType: "NL",
  });
  const student2 = addCourse({
    name: "ashraful",
    email: "ash@gmail.com",
    HasWatch: "NLl",
  });

  //
}
