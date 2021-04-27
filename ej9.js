for (let i = 1; i <= 12; i++) {
    i % 2 !== 0
        ? console.log(`${i}^2 es ${i ** 2}`)
        : console.log(`${i}^3 es ${i ** 3}`)
}

let parrafo;

for (let i = 1; i <= 12; i++) {
    i % 2 !== 0
        ? (parrafo += `<tr><td>${i}^2</td> <td>es</td> <td>${i ** 2}</td></tr>`)
        : (parrafo += `<tr><td>${i}^3</td> <td>es</td> <td>${i ** 3}</td></tr>`)
}
document.getElementById('div').innerHTML = `<table>${parrafo} </table>`;