// 1 - tipos de objeto para a função com interface
interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`)
    if(!product.isAvailable){
        console.log("Produto não disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: false
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 50.00, isAvailable: true})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetials(user: User){
    console.log(`O usuário tem e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = { email: "sena@teste.com", role: "admin" }
const u2:User = { email: "alves@teste.com" }

showUserDetials(u1)
showUserDetials(u2)

// 3 - readonly
interface Car{
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const sena: Human = {
    name: "Sena",
    age: 18
}

console.log(sena)

const goku: SuperHuman = {
    name: "Goku",
    age: 18,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)

// 6 - intersection types
interface Character{
    name: string
}

interface Gun{
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)
console.log(arnold.type)

// 7 readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5 ]
// const mixedArray: fiveNumbers = [1, "string", true, 4, 5 ]

console.log(myNumberArray[4])

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Sena", 18]

console.log(anotherUser[0])

anotherUser[0] = "Alves"

console.log(anotherUser[0])

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])