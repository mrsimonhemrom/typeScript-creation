"use strict";
// typeScript::variabledeclearation
let age = 25;
let club = 'DevTools';
const isFamous = false;
let famous;
// typeScript::function::string
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('John', 'Smith');
// typeScript::number::function allawse(not return)
function doubleIt(num) {
    const result = num * 2;
    // console.log(result);
    return result;
}
const output = doubleIt(10);
console.log('Output value is undefind = ', output);
// typeScript::string::loop
let megaName = '';
const friends = ['sumon', 'sadi', 'john', 'bibi', 'spsumon'];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('meganame is = ', megaName);
// typeScript::odject::any accesse
let player = {
    name: 'sp sumon',
    age: 25,
    merraged: false,
};
// OR::OBJECT
let player2 = {
    name: 'sp sumon',
    age: 20,
    merraged: true
};
// typeScript::interface::object
const messy = {
    name: 'messy',
    age: 20,
    salary: 40000,
    merraged: true,
};
// typeScript::interface::function::object
function getBonus(player, friends) {
    return player.salary * 0.1 + ' ' + friends;
}
const poorPlayer = { age: 20, salary: 10000 };
const div = getBonus(messy, ['Tom', 'Tinku']);
console.log(div);
// typeScript::class
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const saName = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Carson';
