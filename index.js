const random1= Math.floor(Math.random()*6 + 1)
const random2= Math.floor(Math.random()*6 + 1)


document.querySelector('.dice .img1').setAttribute('src', `images/dice${random1}.png`)
document.querySelector('.dice .img2').setAttribute('src', `images/dice${random2}.png`)


if (random1 > random2){
document.querySelector('h1')
.textContent= 'player 1 wins'
}
else if (random1 < random2){
document.querySelector('h1')
.textContent= 'player 2 wins'
}
else {
document.querySelector('h1')
.textContent= 'draw'
}
document.getElementById('refresh').addEventListener('click',()=>{
    window.location.reload()
})
