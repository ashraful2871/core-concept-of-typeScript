{
  //mapped types

  const arrOfNumbers: number[] = [1, 5, 6, 8];

  //   const arrOfString: string[] = ["2", "5", "8", "9"];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; //lockup type

  //   obj["nam"];

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //T => { height: string; width: number }
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 23,
  };

  //
}
