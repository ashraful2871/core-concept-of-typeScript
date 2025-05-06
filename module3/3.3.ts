{
  //type guard

  //type guard ====> typeof
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add("2", "6");
  //   console.log(result);

  //type guard ===> in
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "ash",
  };
  const adminUser: AdminUser = {
    name: "ash admin",
    role: "admin",
  };

  const result1 = getUser(adminUser);

  //
}
