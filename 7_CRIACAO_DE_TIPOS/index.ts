// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}

console.log(showProductName(myObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}   

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen:Pen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T> (obj: T, key: K){
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

// 5 - keyof type operater
type Character = {
    name: string,
    age: number,
    hasDriveLicense: boolean
}

type C = keyof Character

function showCharName(obj: Character, key: C):string{
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Sena",
    age: 18,
    hasDriveLicense: false
}

console.log(showCharName(myChar, 'name'))

// 6 - typeof type oprator
const userName: string = "Sena"

const userName2: typeof userName = "Alves"

type x = typeof userName

const userName3: x = "Nome"

// 7 - indexed accss type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km){
    console.log(`Quilometragem do veículo: ${km}`)
}

showKm(newTruck.km)

// 8 - conditional types
interface A{

}

interface B extends A{

}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType = "teste"

type myTypeB = Teste extends {showNumber(): number} ? string : boolean // boolean

type myTypeC = Teste extends {showName(): string} ? string : boolean // string

// 9 - template literaks type
type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "testando"

type a2 = "Union"

type a3 = `${a1}` | `${a2}`