{
  //ternary operator || optional chaining || nullish Coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //nullish Coalescing operators
  //null / undefined===> decision making
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Gest";
  const result2 = isAuthenticated ? isAuthenticated : "gest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "ash",
    address: {
      city: "dhk",
      road: "pallabi",
      presentAddress: "pallabi",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent Address";
  console.log({ permanentAddress });
}
