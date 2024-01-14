export {};

function error(message: string): never{
  throw new Error(message);
}

try{
  let resalut = error('test');
  console.log({resalut})
}catch(error){
  console.log({error});
}

let foo:void = undefined;
let bar:never = error('only me');
