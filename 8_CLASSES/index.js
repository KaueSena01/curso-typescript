"use strict";
// 1 - campos em classe
class User {
}
const sena = new User();
sena.name = "Sena";
console.log(sena);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
// 4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 6 - this 
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de portência`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const kauesena = new Person("Kauê", "Sena");
console.log(kauesena.fullName);
// 8 - setter
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 5;
myCoords.filly = 5;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return this.title;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de metodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
// 12 - protected
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log("X:" + this.x);
    }
}
const fInstance = new F();
console.log(fInstance.showX());
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("Método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("caixa", "supresa");
console.log(newItem);
console.log(typeof newItem.first);
// 16 - parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name;
        this.price;
        this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name + " " + newShirt.showPrice);
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Sena");
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`Nome: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExemple("Sena");
newAbstractObject.showName();
// 19 - relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
