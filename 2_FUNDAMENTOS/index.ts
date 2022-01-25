// 1 - numbers
let x: number = 10

console.log(x)

console.log(typeof x)

const y:number = 15.983535703

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Kauê"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Sena"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

// 4 - inference e annotation
let ann: string = "Teste"

let inf = "Teste"

// 5 - converter tipos
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber = `Eu vou imprimir o número: ${numberToString}`

console.log(printMyNumber)

