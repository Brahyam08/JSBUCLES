var sum = ''

for (var i = 0; i < 100; i++) {
    if (i % 5 !== 0) {
        sum += `<p>${i}</p>`
    }
}

document.getElementById('div').innerHTML = `${sum + i}`