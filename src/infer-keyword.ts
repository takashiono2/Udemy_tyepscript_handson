export {};

function add(a: number,b: number){
  return a+b;
}

console.log(add(2,3));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;


