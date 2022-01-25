// 1 - numbers
var x = 10;
console.log(x);
console.log(typeof x);
var y = 15.983535703;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
var firstName = "Kauê";
console.log(firstName.toUpperCase());
var fullName;
var lastName = "Sena";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
var a = false;
console.log(a);
console.log(typeof a);
// 4 - inference e annotation
var ann = "Teste";
var inf = "Teste";
// 5 - converter tipos
var n1 = 10;
var numberToString = n1.toString();
var printMyNumber = "Eu vou imprimir o n\u00FAmero: ".concat(numberToString);
console.log(printMyNumber);
