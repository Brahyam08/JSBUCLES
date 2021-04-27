let num = 0;

do {
    let i = parseFloat(window.prompt('Introduzca valor:'))
    if (i < 0) {
        window.alert('no acepto valores negativos')
    } else {
        num += i;

    }
} while (num !== 0)

document.getElementById('div').innerHTML = `<p> La suma es ${num}</p>`;