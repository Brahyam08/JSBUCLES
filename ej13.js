let dia = parseInt(window.prompt('Escribe tu dia de nacimiento'))
let mes = parseInt(window.prompt('Escribe tu mes de nacimiento'))
let anyo = parseInt(window.prompt('Escribe tu año de nacimiento'))
let sumaFecha;
let lucky = 0;

sumaFecha = (dia + mes + anyo).toString();

digitos = sumaFecha.length
do {
    lucky += parseInt(sumaFecha.substring(digitos - 1, digitos))
    digitos--
} while (digitos > 0)
