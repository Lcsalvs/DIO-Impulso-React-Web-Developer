class bankAccount {
  constructor(agency, number, type) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this._balance = 0;
  }

  set balance(value) {
    this._balance = value;
  }

  get balance() {
    return this._balance;
  }

  //Sacar
  setWithDraw(value) {
    if(value > this._balance) return console.log("Operação inválida. Saldo insuficiente!");

    this._balance = this._balance - value;
    return this._balance;
  }

  //Depositar
  setDeposit(value) {
    this._balance = this._balance + value;
    return this._saldo;
  }
  
}

class checkingAccount extends bankAccount {
  constructor(agency, number, creditCard) {
    super(agency, number);
    this.type = 'corrente'
    this.creditCard = creditCard;
  }
  
  set creditCard(value) {
    this.creditCard = value;
  }

  get creditCard() {
    return this.creditCard;
  }
}

class savingAccount extends bankAccount {
  constructor(agency, number) {
    super(agency, number);
    this.type = 'poupança'
  }
}

class universityAccount extends bankAccount {
  constructor(agency, number) {
    super(agency, number)
  }
  
  setWithDraw(value) {
    if(value > 500) return console.log("Operação negada!");

    this._balance = this._balance - value;
    return this._balance;
  }
} 