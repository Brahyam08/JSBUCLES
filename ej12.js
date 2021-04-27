let num = window.prompt('Introduce un numero');
let num1 = num.substring(0, 1)
let num2 = num.substring(1, 2)
let num3 = num.substring(2, 3)

console.log(num1 + num2 + num3)
let suma = 0
for (let i = 0; i < num.length; i++) {
    suma = suma + parseInt(num.substring(i, i + 1))

}
console.log(suma)