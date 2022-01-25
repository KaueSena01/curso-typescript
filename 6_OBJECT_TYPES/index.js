"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`);
    if (!product.isAvailable) {
        console.log("Produto não disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: false
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 50.00, isAvailable: true });
function showUserDetials(user) {
    console.log(`O usuário tem e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "sena@teste.com", role: "admin" };
const u2 = { email: "alves@teste.com" };
showUserDetials(u1);
showUserDetials(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const sena = {
    name: "Sena",
    age: 18
};
console.log(sena);
const goku = {
    name: "Goku",
    age: 18,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
// 7 readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const mixedArray: fiveNumbers = [1, "string", true, 4, 5 ]
console.log(myNumberArray[4]);
const anotherUser = ["Sena", 18];
console.log(anotherUser[0]);
anotherUser[0] = "Alves";
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
