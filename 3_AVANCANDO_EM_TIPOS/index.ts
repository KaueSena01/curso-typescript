// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

const nome: string[] = ["Alves", "Sena"]
// nomes.push(4)

// 2 - o=outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "Sena"}]

console.log(arr1)

// 4 - parametros tipados
function soma(a: number, b:number){
    console.log(a + b)
}

soma(4, 9)

// 5 - retorno de função
function greeting(name: string): string{
    return `Olá ${name}`
}

console.log(greeting("Sena"))

// 6 - função anonima
setTimeout(function() {
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    // console.log(sallary)

}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1, 2)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
       return console.log(`Bem vindo, ${firstName} ${lastName}`)
    }

    return console.log(`Bem vindo, ${firstName}`)
}

advancedGreeting("Kauê", "Sena")
advancedGreeting("Roberto")

// 10 - union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

// 11 - avancando em union types
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

//  14 - interface x type alias
interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: "Sena", age: 18}
console.log(somePerson)

type personType = {
    name: string
}

// Identificador 'personType' duplicado.
// type personType = {
//     age: number
// }

// 15 - literal types
let test: "testando"

// O tipo '"4"' não pode ser atribuído ao tipo '"testando"'
// test = "4"
test = "testando"
console.log(test)

function showDirections(direction: "left" | "right" | "center"){
        console.log(`A direção é: ${direction}`)
}

showDirections("left")
// showDirections("top")

// 16 - non null assertion operators
const p = document.getElementById("some-p")

// console.log(p!.innerText)

// 17 - bitint
let n: bigint

// Os literais de BigInt não estão disponíveis ao direcionar para menos de ES2020.
n = 1000n

console.log(n)
console.log(typeof n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

// const symbolA = "a" // true
// const symbolB = "a" // true

console.log(symbolA == symbolB) // false
console.log(symbolA === symbolB) // false