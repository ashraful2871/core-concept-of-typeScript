{
  //union type

  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;
  //   type user = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };
  //   const user1: user = {
  //     name: "ash",
  //     email: "ikdfrsu@gmail.com",
  //     gender: "male",
  //     bloodGroup: "AB+",
  //   };

  //intersection type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "frontendDeveloper";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "backendDeveloper";
  };

  type FullDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullDeveloper = {
    skills: ["HTML", "CSS", "JS", "TS", "express"],
    designation1: "frontendDeveloper",
    designation2: "backendDeveloper",
  };
}
