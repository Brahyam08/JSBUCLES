var sum=''
for(let i =10; i < 20; i++){
    sum += `<p>${i}</p> <br />`
}
document.getElementById('div').innerHTML=`<p>${sum + i}</p>`