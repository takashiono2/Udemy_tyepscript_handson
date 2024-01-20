export {};

class Animal{
  constructor(public name: string){}
  run(): string{
    return 'I can run';
  }
}

class Lion extends Animal{
  public speed: number
  constructor(public name: string, speed: number){
    super(name);
    this.speed = speed;
  }
  run():string{
    const parentMessage = super.run();
    console.log({parentMessage});
    return `${parentMessage} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('ミッキー').run());
console.log(new Lion('シンバ',80).run());
