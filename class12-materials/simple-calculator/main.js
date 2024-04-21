let total = 0 

document.querySelector('#pumpkin').addEventListener('click', zero)
document.querySelector('#dominosPizza').addEventListener('click', three)



function zero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function three() {
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total 
}