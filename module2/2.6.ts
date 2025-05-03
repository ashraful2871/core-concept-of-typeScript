{
  //constraints in typeScript
  const addCourse = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next Level";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourse({
    id: 254,
    name: "Ashraful",
    email: "ash@ggmail.com",
    emni: "emni",
  });

  const student1 = addCourse<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 1236,
    name: "ash",
    email: "a@gmail.com",
    devType: "NL",
  });
  const student2 = addCourse({
    id: 1236,
    name: "ashraful",
    email: "ash@gmail.com",
    HasWatch: "NLl",
  });

  //
}
