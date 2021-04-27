let palabra = window.prompt('Escribe (P)ares o (I)mpares').toUpperCase();

for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 && palabra === 'P') {
        console.log(i)
        console.log('')
    } else if (i % 2 !== 0 && palabra === 'I') {
        console.log(i)
        console.log('')
    } else {
        console.log('No es una opcion valida ')
    }
}