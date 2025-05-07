{
  //access modifier

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    public addDeposit(amount: number) {
      return (this._balance = this._balance + amount);
    }
    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManuserAccount = new BankAccount(111, "mr. gorib", 20);
  goribManuserAccount.addDeposit(50);
  const myBalance = goribManuserAccount.getBalance();
  console.log(myBalance);
  //
}
