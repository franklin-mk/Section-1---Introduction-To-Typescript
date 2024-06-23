//classes
//blueprint for creating objects
/* 
class Book {
    public title: string; //public --- 
    readonly author: string; //added readonly --- unchanged
    private checkedOut: boolean= false //added private --- can only be accessed in the fcurrent file --- only accessed in a sset class
    
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
    public checkOut(){
        this.checkedOut = this.toggleCheckedOurStatus()
    }
    public isCheckedOut (){
        return this.checkedOut
    }
    private toggleCheckedOurStatus(){
        return !this.checkedOut
    }
}
  
const deepWork = new Book('deep work ', 'cal newport');
deepWork.checkOut()
deepWork.checkOut()
console.log(deepWork.checkOut); //object
console.log(deepWork.isCheckedOut()); //true
console.log(deepWork.isCheckedOut()); //false
// console.log(deepWork.checkedOut); //error cannot access private property
console.log(deepWork.title); // deep work
*/

/* 
class Book {
    private checkedOut: boolean = false;
    constructor(
        public readonly title: string, 
        public author: string,
        private someValue: number
    ) {}
    public getSomeValue(){
        return this.someValue
    }
}

const deepWork = new Book('deep work ', 'cal newport', 445);
deepWork.getSomeValue()
console.log(deepWork.getSomeValue); //  
*/

/*
//----Getters and Setters---------------------------------
class Book {
    private checkedOut: boolean = false;
    constructor(public readonly title: string, public author: string) {}

    get info(){
        return `${this.title} by ${this.author}`
    }
    private set checkOut(checkedOut:boolean){
        this.checkedOut = checkedOut
    }
    get checkOut(){
        return this.checkedOut
    }
    public get someInfo(){
        this.checkOut = true
        return `${this.title} by ${this.author}`
    }
}


const deepWork = new Book('deep work ', 'cal newport');
console.log(deepWork); //object
console.log(deepWork.info); 
console.log(deepWork.someInfo); //true
console.log(deepWork.checkOut);
*/


//---Implement Interface
interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }
  
  class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }
   
const hipster = new Person('shakeAndBake', 100);
hipster.greet();