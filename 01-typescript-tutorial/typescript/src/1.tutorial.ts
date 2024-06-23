//reaches 4hrs 30mins

// --setting variables
let greeting: string ="MALLO"
greeting = greeting.toUpperCase();
//grreting =  2 -TS DOES NOT ALLOW

// --Unions 
let amount: string | number = "ten";
amount = 10; //allowed

//let name : "Frank" | "Muriithi" | "Kinyua" = "Frank";
//name = "Muriithi" --BRings an error

// --type any
let notSure: any = "hello";
notSure =true; //allowed -ANY TYPE

//loop any
let books = ["2012", "Awesome", "free"];
let foundBook: string | undefined;

for (let book of books){
    if (book === "Awesome"){
        foundBook = book;
        foundBook = foundBook.toUpperCase()
        break;
    }
}

console.log(foundBook?.length);

//union challenge
let myData: string | number | boolean = 20
myData = "hello"
myData = true
//myData = null //TS DOES NOT ALLOW


//arrays
let prices:number[] = [100, 75, 42, 13]
prices.push(20)

let temperetures:(string | number)[];
temperetures = ["hot", 20, "cold", 10]

//objects
let car:{brand:string, year:number, color:string}={brand:"budatti", year: 2010, color:"crimson"};
car.brand = "Toyota"
//if one missing there will be complains



//joining objects with array
let book = {title:'book', cost:30}
let pen = {title:'pen', cost:20}
let notebook = {title:'notebook'}

//let items:{title:string, cost:number}[] =[book,pen, notebook] //error
let items:{title:string, cost?:number}[] =[book,pen, notebook]//cost is optional hence notebook is passed

//readonly
let itemsReadOnly:{readonly title:string, cost?:number}[] =[book,pen, notebook]
//itemsReadOnly[0].title = 'newbook' --error readonly

let bike:{brand:string, year:number} = {brand:"yahama", year: 2020}
let laptop:{brand:string, year:number} = {brand:"asus", year: 2010}



//FUNCTIONS IN TS
function sayHi(name:string){
    console.log(`Hi ${name.toLowerCase()}!`)
}
//-any
//-config
//-type
sayHi("JOHN")
//sayHi(3) --WRONG


//FUNCTION RETURNS
function calculatedDisc(price:number)/* :number */{
    const hasDiscount = true;
    if(hasDiscount){
        return "discount Applied"
    }
    return price * 0.2

}

//const finalPrice : number | "discount applied"
const finalPrice = calculatedDisc(200)


function addThree(number:any){
    let anotherNumber : number = 3
    return number + anotherNumber
}

const result = addThree(4) //--type = any
const someValue = result;

//someValue.myMethod() ---error

let names:string[] = ['JOo', 'Jane', 'kane']
function isNameInlist(name:string):boolean{
    return names.includes(name)
} 

let nameToCheck ='kane'
if(isNameInlist(nameToCheck)){
    console.log(`Hello ${nameToCheck}!`)
    }else{
        console.log(`Sorry, ${nameToCheck} is not in the list.`)
}


// optional and default parameter
function calculatedPrice(price: number, discount?: number):number  {
    return price - (discount || 0); //--working with optional parameter
}
const price = calculatedPrice(100, 20); //80
//default parameter
function calculatedPrice2(price: number, discount: number = 10):number  {
    return price - discount; //--working with default parameter
}
let priceAfterDisc = calculatedPrice2(100-20)
let priceAfterDisc2 = calculatedPrice2(100)


//rest parameters
function sum(message:string, ...numbers:number[]):string{
    const doubled = numbers.map((num)=>num*2)
    console.log(doubled);
    
    let total=numbers.reduce((previous, current)=>{
        return previous+current
    }, 0)
    return `${message} ${total}`
}

let result2 = sum('The total is: ',1,2,3,4,5)
console.log(result2)


//type to return if nothing being returned
function logMessage(message:string):void{
    console.log(message)
    //return 'hello world'
}

logMessage("hello, TS!")


//union types as function parameter and type cards--typeof
function processInput (input:string | number){
    if(typeof input === 'number'){
        console.log(input * 10);
    } else{
        console.log(input.toUpperCase());
    }
}
processInput(10)
processInput('hello')

//2.
function createEmployee( { id }: { id: number } ):{ id:number, isActive:boolean }{
    return { id, isActive:id % 2===0 }
}

const first = createEmployee({id:1})
const second = createEmployee({id:2})
console.log(first, second);

// alternative
function createStudent (student:{id:number, name:string}):void{
    console.log(`Welcome to the course${student.name.toUpperCase}!`);
}

const newStd={
    id:5,
    name:"susan",
    email:"john@gmail.com" //--no error
}

createStudent(newStd)
createStudent({
    id:7,
    name:"john",
    //email:"john@gmail.com" --error
})


//
function proccessData(
    input: string | number, 
    config: { reverse: boolean } = { reverse: false } 
): string | number {
    if( typeof input === 'number'){
        return input * input
    } else {
        return config.reverse 
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
    }
}

console.log(proccessData(10));
console.log(proccessData('Hello'));
console.log(proccessData('Hello', {reverse: true}));


// ALIAS AND INTERFACE
const john: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: { id: number; name: string; isActive: boolean }): {
    id: number;
    name: string;
    isActive: boolean;
  } {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  } //--REPETION
  //tpye alias --same rules or set without repetion and change
  type User = { id: number; name: string; isActive: boolean }
  //export type User = { id: number; name: string; isActive: boolean } --can also be exported
  const John: User  = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const Susan: User  = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser2(user: User ): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

type StringOrNumbe = string | number;
let data: StringOrNumbe;
data = 'hello'
data = 22

type Theme = 'light' | 'dark'
let theme: Theme
theme = 'light'
theme = 'dark' //ok

function setTheme(t : Theme){
    theme = t
}
setTheme('light')

//C
type Employee = {id: number, name:string, department:string} 
type Manager = {id: number, name:string, employees:Employee[]} 
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void{
    if ('employees' in staff){
        console.log(`${staff.name} is a manager with ${staff.employees.length} employees`);
    } else {
        console.log(`Employee: ${staff.name} - Department: ${staff.department}`)
    }
}

const alice:Employee ={id: 1, name:'alice', department:'Sales'}
const steve:Employee ={id: 2, name:'steve', department:'HR'}
const bob:Manager ={id: 1, name:'bob', employees:[alice, steve]}

printStaffDetails(bob)
printStaffDetails(alice)
printStaffDetails(steve)

//Intersection type in union --way to combine multiple type into one
type Book = {id:number, name:string, price:number};
type Bookdiscount =Book & {discount:number}; //---rather

const book1:Book={
    id:1,
    name:'book1',
    price:10
}
const book2:Book={
    id:1,
    name:'book2',
    price:15
}
const discountedBook: /* Book & {discount:number} */ Bookdiscount ={
    id:1,
    name:'book3',
    price:20,
    discount:0.10
}

const propName = 'age'
type Animal = {
    [propName] : number,
}

let tiger:Animal = {[propName]:5}

//INTERFACE TYPE --- allow to setup shape for objects (only objects)
interface Book3 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor():void,
  printTitle(message:string):string,
  printSomething:(someValue:number) => number
}

const deepWork: Book3 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help', //--OPTIONAL
  printAuthor(){
    console.log(this.author);
    
  },
  printTitle(message){
    return `${message} ${this.title}`
  }, 
  //1st option
  /* printSomething: function (someValue){
        return someValue
  }  */
  //2nd option
  /* printSomething: (someValue) => {
    //console.log(this);
    console.log(deepWork.author);
    return someValue
  } */
  //3rd option
  printSomething: (someValue) => {
    return someValue
  }
};
//------------------------------------------------------------//
deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed
deepWork.printAuthor(); // output --- Cal Newport
const result3 = deepWork.printTitle(`Is awesome`)
console.log(result3); // output --- Is awesome Deep Work
//-----------------------------------------------------------//
console.log(deepWork.printSomething(34)); 



//C
interface Computer {
    readonly id: number,
    brand: string,
    ram: number,
    upgradeRam (increase : number):number,
    storage? : number
}

const laptop1: Computer = {
    id :1,
    brand: 'Apple',
    ram:8,
    upgradeRam(amount){
        this.ram += amount
        return this.ram
    },
    //storage: 256
}
laptop1.storage=256
console.log(laptop1.upgradeRam(4))
console.log(laptop1)


//interface merging ---
interface Person {
    name:string,
    getDetails():string
}
interface DogOwner {
    dogName: string,
    getDogDetails():string
}
interface Person {
    age: number
}  //adding new key
const person:Person = {
    name: 'Mike',
    age: 30,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

interface Employee2 extends Person {
    employeeId: number,
}
const employee: Employee2 = {
    name: 'Arteta',
    age: 33,
    employeeId: 1234,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, ${this.employeeId}`
    }
}
console.log(person.getDetails())
console.log(employee.getDetails())

interface Manager1 extends Person, DogOwner{
    managePeople(): void 
}


const manager:Manager1 = {
    name: "Kevo",
    age: 44, 
    dogName: "Buddy",
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    },
    getDogDetails(){
        return `Dog Name: ${this.dogName}`
    },
    managePeople(){
        console.log("Managing People")
    }
}
console.log(manager.managePeople())
//merge=reopen



//C
function getEmployee(){
    const random = Math.random()
    if(random < 0.33){
        return {
            name:"Wekesa"
        }
    } else if(random < 0.66 ){
        return {
            name: "Sarah",
            dogName:"rex"
        }
    } else {
        return {
            name:"Bob",
            managePeople(){
                console.log("Managing People")
            },
            deleteTasks(){
                console.log("Deleting Tasks")
            }
        }
    }
}

interface Person2 {
    name : string
}
interface DogOwner2 extends Person2 {
    dogName: string
}
interface Manager2 extends Person2 {
    managePeople(): void
    deleteTasks(): void
}
const employee2 : Person2 | DogOwner2 | Manager2 = getEmployee()
console.log(employee2);
function isManager(obj: Person2 | DogOwner2 | Manager2):obj is Manager2 {
    return 'managePeople' in obj 
}
console.log(isManager(employee2));
if (isManager(employee2)){
    employee2.deleteTasks()
}





// --- Tuples
//a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

let person3 :[string, number] = ['Clark', 45]
let date :readonly [number, number, number]=[3, 4, 5]
/* date.push(2005) //--- push works if no readonly included
date.push(2005)
date.push(2005)
date.push(2005)
date.push(2005) */
console.log(date);

function getPerson(): [string, number] {
    return ['Clark', 45]
}
let randomPerson = getPerson()
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let joseph : [string, number?] = ['joseph']


// ---enums
// Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
enum ServerResponseStatus {
   // Success = 'SUCCESS', //Success = 200,---log out another value starting with the number
    //Error='ERROR'
    Success = 200, //enum with number value can be declared again but with defined string cannot
    Error = 500,
}
Object.values(ServerResponseStatus).forEach((value) => {
    if (typeof value === 'number'){
        console.log(value)
    }
    
});

console.log(ServerResponseStatus);

interface ServerResponse {
    result: ServerResponseStatus,
    data:string[]
}

function getServerResponse():ServerResponse{
    return {
        result: ServerResponseStatus.Success, //enum 
        data: ['Hello', 'World']
    }
}
const response:ServerResponse=getServerResponse()
console.log(response.result); //--- 200
console.log(response.data); //--- ['Hello', 'World']


//C
enum UserRole{
    Admin,
    Manager,
    Employee
}
type User2 = {
    id: number,
    name: string
    role: UserRole,
    contact : [string, number]
}
function createUser3(user: User2): User2{
    return user
}
const user3: User2 = createUser3({
    id: 1,
    name: 'John Doe',
    role: UserRole.Admin,
    contact: ['john@example.com', 1234567890]
})
console.log(user3);

//type assertion
let someValue2: any = 'this is a string';
let strLength: number = (someValue2 as string).length;
type Bird ={
    name: string,
}
// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';
let birdObject = JSON.parse(birdString)
let dogObject = JSON.parse(dogString)
let bird = birdObject as Bird
let dog = dogObject as Bird
console.log(bird.name);
// console.log(dog.name); --error though not complains

enum Status {
    Pending = 'pending',
    Declined = 'declined',
  }
  
  type User4 = {
    name: string;
    status: Status;
  };
  // save Status.Pending in the DB as a string
  // retrieve string from the DB
  const statusValue = 'pending';
  const user4: User4 = { name: 'john', status: statusValue as Status };

//type unknow
let unknownValue :unknown;
unknownValue = 'hello world'
unknownValue=[1, 2, 3]
unknownValue=42.343243
//unknownValue.toFixed(2) --error

if (typeof unknownValue === 'number'){
    unknownValue.toFixed(2)
}

function runSomeCode(){
    const random = Math.random()
    if (random < 0.5){
        throw new Error('there was an error')
    } else {
        throw 'some error'
    }
}

try{
    runSomeCode()
    
} catch(error){
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log(error)
}

//type never --cannot assign any value to it
// let someValue: never = 0;

type Theme2 = 'light' | 'dark';

function checkTheme(theme: Theme2) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}
//another sample
enum Color {
    Red,
    Blue,
    Green, //--=added
  }
  
  function getColorName(color: Color) {
    switch (color) {
      case Color.Red:
        return 'Red';
      case Color.Blue:
        return 'Blue';
      case Color.Green: //---
        return 'Green'; //---
      default:
        // at build time
        let unexpectedColor: never = color;
        // at runtime
        throw new Error(`Unexpected color value: ${unexpectedColor}`);
    }
  }
  
console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
console.log(getColorName(Color.Green)); // Green --added


//Modules ---Global Scope 'Gotcha' ----------------------

let name = 'shakeAdnBake'; //--globally
const susan2 = 'susan'; //--global

export let something = 'something';



// Modules - Imports/Exports (including types)-----------------------------
import newStudent, {sayHello, person4, type Student7} from "./action";
sayHello('Typescript')
console.log(newStudent);
console.log(person4);

const anotherStudent: Student7 = {
    name: 'John Doe',
    age: 30
}
console.log(anotherStudent);


//Modules - Javascript Files-------------------------------------
// import { someValue4 } from './example.js' //error its not a TS file



//C
//In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType) {
    if (typeof value === 'string') {
      console.log(value.toLowerCase());
      return;
    }
    if (typeof value === 'number') {
      console.log(value.toFixed(2));
      return;
    }
    console.log(`boolean: ${value}`);
  }
  
checkValue(value);


//C--Equality Narrowing
//In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal2 = Dog | Cat;

function makeSound(animal: Animal2) {
    if (animal.type === 'dog') {
        // TypeScript knows that `animal` is a Dog in this block
        animal.bark();
    } else {
        // TypeScript knows that `animal` is a Cat in this block
        animal.meow();
    }
}

// Example usage:
const myDog: Dog = { type: 'dog', name: 'Buddy', bark: () => console.log('Woof!') };
const myCat: Cat = { type: 'cat', name: 'Whiskers', meow: () => console.log('Meow!') };

makeSound(myDog); // Outputs: Woof!
makeSound(myCat); // Outputs: Meow!



//C ---check for property
function makeSound2(animal: Animal2) {
    if ('bark' in animal) {
      // TypeScript knows that `animal` is a Dog in this block
      animal.bark();
    } else {
      // TypeScript knows that `animal` is a Cat in this block
      animal.meow();
    }
}
console.log(makeSound2(myCat));

//C ----"Truthy"/"Falsy" guard
//In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value

function printLength(str: string | null | undefined) {
    if (str) {
      // In this block, TypeScript knows that `str` is a string
      // because `null` and `undefined` are falsy values.
      console.log(str.length);
    } else {
      console.log('No string provided');
    }
  }
  
printLength('Hello'); // Outputs: 5
printLength(' '); // Outputs: 1
printLength(null); // Outputs: No string provided
printLength(undefined); // Outputs: No string provided


//C ---"instanceof" type guard
//The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime.
try {
    // Some code that may throw an error
    throw new Error('This is an error');
  } catch (error) {
    if (error instanceof Error) {
      console.log('Caught an Error object: ' + error.message);
    } else {
      console.log('Caught an unknown error');
    }
}

//Alternate
function checkInput(input: Date | string): string {
    if (input instanceof Date) {
      return input.getFullYear().toString();
    }
    return input;
}
const year = checkInput(new Date());
const reject = checkInput('2024-06-20');
console.log(year);
console.log(reject);

//C---Type Predicate
//A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.
type Student = {
    name: string;
    study: () => void;
  };
  
  type User5 = {
    name: string;
    login: () => void;
  };
  
  type Person5 = Student | User5;
  
  const randomPerson5 = (): Person5 => {
    return Math.random() > 0.5
      ? { name: 'john', study: () => console.log('Studying') }
      : { name: 'mary', login: () => console.log('Logging in') };
};
  
const person5 = randomPerson5();
console.log(person5.name);

function isStudent(person5: Person5): person5 is Student {
    // return 'study' in person;
    return (person5 as Student).study !== undefined;
  }
  // Usage
  if (isStudent(person5)) {
    person5.study(); // This is safe because TypeScript knows that 'person' is a Student.
  } else {
    person5.login();
}

/* 
Optional - type "never" gotcha
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const person: Person = {
  name: 'anna',
  study: () => console.log('Studying'),
  // login: () => console.log('Logging in'),
};
// person;
function isStudent(person: Person): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined;
}

// Usage

if (isStudent(person)) {
  person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  // in this case person is type "never"
  console.log(person);
}
*/

//C --- Discriminated Unions and exhaustive check using the never type
//A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.
type IncrementAction = {
    type: 'increment';
    amount: number;
    timestamp: number;
    user: string;
};
  
type DecrementAction = {
    type: 'decrement';
    amount: number;
    timestamp: number;
    user: string;
};

type Action = DecrementAction| IncrementAction  

function reducer(state: number, action: Action): number {
    switch (action.type) {
      case 'increment':
        return state + action.amount;
      case 'decrement':
        return state - action.amount;
      default:
        const unexpectedAction: never = action;
        throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
  }
  
const newState = reducer(40, {
    user: 'john',
    type: 'decrement',
    amount: 10,
    timestamp: 123456,
});



console.log(newState)