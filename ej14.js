let num = window.prompt('Introduce un número:');
let linea = "";
for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
        linea += '*'
    }
    console.log(linea)
    linea = ''
}