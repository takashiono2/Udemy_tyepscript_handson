export { };

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) { }
    }

  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public MiddleName: string,
      public lastName: string
    ) { }
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const michael = new English.Person('Michel', 'Joseph', 'Jackson');
console.log(michael);
