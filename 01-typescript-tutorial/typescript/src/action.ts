let name = 'shakeAdnBake';

const susan2 = 'susan'; //everything in files are treated globally and cant be reused

export let something = 'something';

//2
export function sayHello(name: string): void {
    console.log(`Hello ${name}!`);
  }
  
  export let person4 = 'susan';
  
  export type Student7 = {
    name: string;
    age: number;
  };
  
  const newStudent: Student7 = {
    name: 'peter',
    age: 24,
  };
  
  export default newStudent;