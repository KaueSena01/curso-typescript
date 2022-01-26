// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const sena = new User()

sena.name = "Sena"

console.log(sena)

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João", 22)
console.log(joao)

// 3 - campo readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

// 4 - heranca e super
class Machine {
    name

    constructor(name: string){
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - metodos
class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

// 6 - this 
class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de portência`)
    }
}

const volvo = new Truck("Volvo", 400)

volvo.showDetails()

// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }
}

const kauesena = new Person("Kauê", "Sena")

console.log(kauesena.fullName)

// 8 - setter
class Coords {
    x!: number
    y!: number

    set fillx(x: number){
        if(x === 0){
            return
        }
        this.x = x
        console.log("X inserido com sucesso!")
    }

    set filly(y: number){
        if(y === 0){
            return
        }
        this.y = y
        console.log("Y inserido com sucesso!")
    }

    get getCoords(){
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 5
myCoords.filly = 5
console.log(myCoords.getCoords)

// 9 - implements
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string){
        this.title = title
    }

    itemTitle() {
        return this.title
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

// 10 - override de metodos
class Base {
    someMethod(){
        console.log("alguma coisa")
    }
}

class Nova extends Base{
    someMethod() {
        console.log("testando outra coisa")
    }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - public
class C {
    x = 10
}

const cInstance = new C()

console.log(cInstance.x)

// 12 - protected
class E {
    protected x = 10
    
}

class F extends E {
    showX(){
        console.log("X:" + this.x)
    }

}

const fInstance = new F()

console.log(fInstance.showX())

// 13 - private
class PrivateClass {
    private name =  "Private"

    showName(){
        return this.name
    }
}

const pObj = new PrivateClass()

// console.log(pObj.name)
console.log(pObj.showName())

// 14 - static members
class StaticMembers {
   static prop = "Teste static"

   static staticMethod() {
       console.log("Método estático")
   }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - generic class
class Item<T, U>{
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }
}

const newItem = new Item("caixa", "supresa")

console.log(newItem)
console.log(typeof newItem.first)

// 16 - parameter properties
class ParameterProperties{
    constructor (public name: string, private qty: number, private price: number){
        this.name
        this.price
        this.qty
    }

    get showPrice(){
        return this.price
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name + " " + newShirt.showPrice)

// 17 - class expressions
const myClass = class<T>{
    name

    constructor(name: T){
        this.name = name
    }
}

const pessoa = new myClass("Sena")

console.log(pessoa.name)

// 18 - abstract class
abstract class AbstractClass {
    abstract showName():void
}

// const newObj = new AbstractClass()

class AbstractExemple extends AbstractClass {
    name

    constructor(name: string) {
        super()
        this.name = name
    }

    showName() {
        console.log(`Nome: ${this.name}`)
    }
}

const newAbstractObject = new AbstractExemple("Sena")

newAbstractObject.showName()

// 19 - relações entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)