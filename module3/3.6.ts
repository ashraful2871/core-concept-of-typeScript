{
  //getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    //getter
    get balance() {
      return this._balance;
    }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // public addDeposit(amount: number) {
    //   return (this._balance = this._balance + amount);
    // }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  //   class StudentAccount extends BankAccount {
  //     test() {
  //       this._balance;
  //     }
  //   }

  const goribManuserAccount = new BankAccount(111, "mr. gorib", 40);
  // goribManuserAccount.addDeposit(50);
  goribManuserAccount.deposit = 200;
  //   const myBalance = goribManuserAccount.getBalance();
  const myBalance = goribManuserAccount.balance;
  console.log(myBalance);
  //
}
