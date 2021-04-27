let numero = 0

do {
    i = parseInt(window.prompt('Introduce un numero para salir introduce 0'));
    numero = numero + i;
} while (i !== 0);
console.log(numero);