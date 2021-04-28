let password = window.prompt("Introduce una contraseña:");

let longitud;
let numeros;
let mayuscula;
let primeraNumero;

password.length >= 8 ? (longitud = true) : (longitud = false);

password.includes("1") ||
password.includes("2") ||
password.includes("3") ||
password.includes("4") ||
password.includes("5") ||
password.includes("6") ||
password.includes("7") ||
password.includes("8") ||
password.includes("9") ||
password.includes("0")
  ? (numeros = true)
  : (numeros = false);

password.substring(0, 1) == password.substring(0, 1).toUpperCase()
  ? (mayuscula = true)
  : (mayuscula = false);

//Solo tiene un bug: Si el primer carácter es un número, mayúscula es true y por tanto cumple los requisitos//
password.substring(0, 1).includes("1") ||
password.substring(0, 1).includes("2") ||
password.substring(0, 1).includes("3") ||
password.substring(0, 1).includes("4") ||
password.substring(0, 1).includes("5") ||
password.substring(0, 1).includes("6") ||
password.substring(0, 1).includes("7") ||
password.substring(0, 1).includes("8") ||
password.substring(0, 1).includes("9") ||
password.substring(0, 1).includes("0")
  ? (primeraNumero = false)
  : (primeraNumero = true);

longitud && numeros && mayuscula && primeraNumero
  ? window.alert("La contraseña cumple los requisitos")
  : window.alert("La contraseña no cumple los requisitos.");