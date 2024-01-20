export {};

class MyNumberCard{
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(){
    return this._owner;
  }

  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`
  }

}

let card = new MyNumberCard('はむさん',123456789);
card.owner;
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 111111111;
console.log(card.debugPrint());
