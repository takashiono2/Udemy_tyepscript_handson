export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  batttingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsh: Batter1= {
  batttingAverage: 0.367
}

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   batttingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OhtaniShouhei:TwoWayPlayer = {
  throwingSpeed: 165,
  batttingAverage: 0.286
}
