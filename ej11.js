let numero = window.prompt("Introduce un numero")

let final = ''

for (let i = 0; i <= numero.length; i++) {
    let ultimo = numero.substring(numero.length - i, numero.length - i + 1)
    final = final + ultimo;

}
console.log(final)