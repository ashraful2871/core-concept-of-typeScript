{
  //interface generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYer: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Pasnew = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<Pasnew> = {
    name: "ash",
    computer: {
      brand: "asus",
      model: "x-55fgs",
      releaseYer: 2015,
    },
    smartWatch: {
      brand: "Pasnew",
      model: "pse651",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }
  interface JaniNa {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, JaniNa> = {
    name: "RichKit",
    computer: {
      brand: "HP",
      model: "x-55fs",
      releaseYer: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "apple651",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "jani na",
      engineCapacity: "1000cc",
    },
  };

  //
}
