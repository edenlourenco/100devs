let total = 0 

document.querySelector('#pumpkin').addEventListener('click', zero)
document.querySelector('#dominosPizza').addEventListener('click', three)
document.querySelector('#zebra').addEventListener('click' , nine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', plus2)
document.querySelector('#testing').addEventListener('click' , menos10)


function zero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function three() {
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total 
}

function nine() {
    total = total +9
    document.querySelector('#placeToPutResult').innerText = total
}

function plus2 () {
    total = total  - 2 
    document.querySelector('#placeToPutResult').innerText = total
}

function menos10 () {
    total = total - 10
    document.querySelector('#placeToPutResult').innerText = total
}