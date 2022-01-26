// 1 - exemplo decorator
function myDecorator(){
    console.log("Iniciando decorator!")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass{
    @myDecorator()
    testing(){
        console.log("Terminando execução do método")
    }
}

const myObj = new myClass()

myObj.testing()

// 2 - multiplos decorators
function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executou a")
    }
}

class MultipleDecorators{
    @a()
    testing(){
        console.log("Terminando execução")
    }
}

const multiple = new MultipleDecorators()
multiple.testing()

// 3 - class decorator
function classDec(constructor: Function){
    console.log(constructor.name)
    if(constructor.name === "User"){
        console.log("Criando usuário!")
    }
}

@classDec
class User {
    name


    constructor(name: string){
        this.name = name
    }
}

const sena = new User("Sena")

console.log(sena)

// 4 - method decorator
function enumerable(value: boolean){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string){
        this.name = name
    }

    @enumerable(false)
    showName(){
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator.showName())

//  5 - acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`
    }

    get showAge(){
        return `Nome do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - property decorator
// id 1 - 0001

function formatNumber() {
    return function (target: object, propertKey: string){
        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)

// 7 - exemplo real com class decorator
function createdDate(created: Function){
    created.prototype.createdAt = new Date()
}

@createdDate
class Book{
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

@createdDate
class Pen{
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(1)
const newPen = new Pen(55)

console.log(newBook)
console.log(newPen)
console.log(newBook.createdAt)
console.log(newPen.createdAt)

// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor){
        const childFunction = descriptor.value
        console.log(childFunction)
        descriptor.value = function(...args: any[]){
            if(args[1] === true){
                console.log("Usuário já postou")
                return null
            } else {
                return childFunction.apply(this, args)                
            }
        }

        return descriptor
    }
}

class Post{
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Primeiro Post", newPost.alreadyPosted)
newPost.post("Segundo Post", newPost.alreadyPosted)
newPost.post("Terceiro Post", newPost.alreadyPosted)

// 8 - exemplo real property decorator
function Max(limit: number){

    return function(target: Object, propertyKey: string){
        let value:string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor deve ter no máximo ${limit} dígitos.`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    } 
}

class Admin {
    @Max(10)
    username
    
    constructor(username: string){
        this.username = username
    }
}

let user = new Admin("kauealvessena")
