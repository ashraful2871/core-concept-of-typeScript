{
  //asynchronous in typeScript promise

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const newData = await res.json();
    console.log(newData);
    return newData;
  };
  getData();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        reject("fail to load data");
      }
    });
  };

  // calling create promise function

  const showData = async () => {
    const data = await createPromise();

    return data;
    // console.log(data);
  };
  showData();

  //
}
