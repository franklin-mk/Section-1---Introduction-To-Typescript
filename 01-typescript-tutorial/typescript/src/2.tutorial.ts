//

//Generics-------------------------------------------------------------------------------
//Generics are a way to create reusable functions, classes, and interfaces that can work with multiple
//Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.
//They allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.

// In TypeScript, you can declare an array using two syntaxes:-------------------------
// --- 1. Using the type of the elements in square brackets `[]`
    // let array1: string[] = ['Apple', 'Banana', 'Mango'];
    // let array2: number[] = [1, 2, 3];
    // let array3: boolean[] = [true, false, true];
// --- 2. Using the generic type `Array<T>`
let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

// --- Create Generic Function and Interface ----------------------------------
function createString(arg: string): string {
    return arg;
  }
  function createNumber(arg: number): number {
    return arg;
}
  
// Define a generic function
function genericFunction<T>(arg: T): T {
    return arg;
  }
  
const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);
  
// Define a generic interface
interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}
  
const genericString: GenericInterface<string> = {
    value: 'Hello World',
    getValue() {
      return this.value;
    },
};
console.log(genericString.value); // o- hello world

async function someFunc(): Promise<string> {
    return "Hello World";
}
const result = someFunc()

//C --- Generate Array
function generateStringArray(length:number, value:string): string[] {
    let result:string[] = []
    result = Array(length).fill(value);
    return result
}
console.log(generateStringArray(30,'foru'));

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}
let arrayStrings = createArray<string>(20, 'reject'); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(24, 2024); // [100, 100, 100, 100]
console.log(arrayStrings);
console.log(arrayNumbers);


// ---multiple variable types
function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
}
  
// Usage
let result2 = pair<number, string>(123, 'Hello');
console.log(result2); // Output: [123, "Hello"]


// --- Inferred Type and Type Constraints ---------------------------------------
  
//  const [name,setName] = useState('')
//  const [products,setProducts] = useState<Product[]>([])
  
// type constraint on the generic type T, generic type can be either a number or a string.
  
function processValue<T extends number | string>(value: T): T {
    console.log(value); 
}
  
processValue('hello');
processValue(12);
//processValue(true); --not extended in the function

// 2 ---------------------------------------------------------------------------
type Car = {
    brand: string;
    model: string;
  };
  
  const car: Car = {
    brand: 'ford',
    model: 'mustang',
  };
  
  type Product = {
    name: string;
    price: number;
  };
  
  const product: Product = {
    name: 'shoes',
    price: 1.99,
  };
  
  type Student = {
    name: string;
    age: number;
  };
  
  const student: Student = {
    name: 'peter',
    age: 20,
  };
  
  // T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.
  
  // function printName<T extends Student>(input: T): void {
  //   console.log(input.name);
  // }
  
  // printName(student);
  
  // function printName<T extends Student | Product>(input: T): void {
  //   console.log(input.name);
  // }
  
  // printName(product);
  
  // The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
  // In other words, T must have at least the same properties and methods that { name: string } has.
function printName<T extends { name: string }>(input: T): void {
    console.log(input.name);
}
printName(student);
printName(product);
//printName(car); //---car does not have a name key hence error


// Default Value -------------------------------------------------------------------
interface StoreData<T = any> { //bypass the unknown tye if none is provide
    data: T[];
}
  
const storeNumbers: StoreData<number> = {
    data: [1, 2, 3, 4],
};
  
const randomStuff: StoreData = {
    data: ['random', 1],
};

//2
// data is located in the data property

/* const { data } = axios.get(someUrl);

axios.get<{ name: string }[]>(someUrl);

export class Axios {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
} */