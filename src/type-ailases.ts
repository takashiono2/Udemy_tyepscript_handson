export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: '43'
};

type profile = {
  name: string;
  age: number;
};

const example2: profile= {
  name: 'Ham',
  age: 45
};

type profile2 = typeof example1;
