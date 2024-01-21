export {};

type Profile = {
  name: string;
  age?: number;
  zipeCode: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

