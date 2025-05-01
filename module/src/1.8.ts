//destructuring
{
  // object destructuring

  const user = {
    id: 1123,
    name: {
      firstName: "Ash",
      middleNAme: "babu",
      lastName: "Islam",
    },
    contactNo: "01756985231",
    address: "anderkilla",
  };
  const {
    contactNo,
    name: { middleNAme },
  } = user;

  //array destructuring
  const friends = ["ash", "pro", "rock", "zidan"];
  const [, , bestFriend, ...rest] = friends;
}
