{
  // spread operator & destructing. rest operator

  //spread operator
  const bros1: string[] = ["Ash", "pro", "Rock"];
  const bros2: string[] = ["nahid", "Rahat", "Nur"];

  bros1.push(...bros1);

  const mentor = {
    typeSScript: "ASH",
    redux: "mir",
    dbms: "mizan",
  };
  const mentor2 = {
    prisma: "Firoz",
    next: "tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentor,
    ...mentor2,
  };

  //learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((f: string) => console.log(`hi ${f}`));
  };
  greetFriends("abul", "kabul", "babul", "ubul", "labul");
}
