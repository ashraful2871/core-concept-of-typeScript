// learning function in typeScript

//normal function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(1, 3);

//arrow function
const functionName = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

// object ===> function ===> method

const poorUser = {
  name: "ash",
  balance: 20,
  addBalance(balance: number): string {
    return `my new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 5];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
