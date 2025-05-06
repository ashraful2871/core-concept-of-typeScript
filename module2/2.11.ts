{
  //utility type
  // pick type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name" | "age">;
  // omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //required
  type PersonRq = Required<Person>;

  //partial

  type PersonPartial = Partial<Person>;

  //radOnly
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Ash",
    age: 200,
    contactNo: "0156281",
  };

  //record Type

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const emtObj: Record<string, unknown> = {};

  const obj: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
