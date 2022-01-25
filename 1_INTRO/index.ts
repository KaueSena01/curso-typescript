const firstName = "Sena"
const anotherName = 1
const x = true

function greeting(name: string){
    console.log("Olá " + name)
}

greeting(firstName)
// greeting(anotherName)
// greeting(true)

var number1 = 4
var number2 = 4

function soma(n1: number, n2: number){
    return n1 + n2   
}

console.log(soma(number1, number2))