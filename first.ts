// typeScript::variabledeclearation
let age: number = 25;
let club: string = 'DevTools';
const isFamous: boolean = false;
let famous: boolean;


// typeScript::function::string
function fullName (firstName:string, lastName:string):string{
    return firstName + ' ' + lastName;
}
const user:string = fullName('John', 'Smith');


// typeScript::number::function allawse(not return)
function doubleIt(num:number){
    const result = num * 2;
    // console.log(result);
    return result;
}
const output = doubleIt(10);
console.log('Output value is undefind = ', output);


// typeScript::string::loop
let megaName: string = '';
const friends: string[] = ['sumon', 'sadi', 'john', 'bibi', 'spsumon'];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('meganame is = ', megaName);


// typeScript::odject::any accesse
let player: {
    name: string,
    age: number,
    merraged: boolean
} = {
    name: 'sp sumon',
    age: 25,
    merraged: false,
}

// OR::OBJECT
let player2:{name:string, age:number, merraged:boolean} = {
    name: 'sp sumon',
    age: 20,
    merraged: true
}

// typeScript::interface::object
interface Player {
    name: string,
    age: number,
    salary: number,
    merraged: boolean,
    wife?: string // For meaning ( ? == optional )
}
// typeScript::interface::object
const messy:Player = {
    name: 'messy',
    age: 20,
    salary: 40000,
    merraged: true,
    // wife: ''
}

// typeScript::interface::function::object
function getBonus (player: Player, friends: string[]) {
    return player.salary * 0.1 + ' ' + friends;
}
const poorPlayer = {age: 20, salary: 10000};
const div = getBonus(messy, ['Tom', 'Tinku']);
console.log(div);


// typeScript::class
class Person {
    name: string;
    private _partner; // do not accesse out of scope
    readonly fatherName: string; // read only but do not changed value

    constructor(name:string, father:string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(): string { // function of class (Do not needed to declear 'function' before function)
        return this.name;
    }
}

const sam = new Person('Samuel', 'David')
console.log('name', sam.name, sam.fatherName);
const saName: string = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson';


