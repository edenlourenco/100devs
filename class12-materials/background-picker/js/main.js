document.getElementById('purple').onclick = purple
document.getElementById('green').onclick = green
document.getElementById('blue').onclick = blue
document.getElementById('yellow').onclick = yellow



function purple () {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

function green () {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'
}

function blue() {

    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'
}

function yellow() {
        document.querySelector('body').style.backgroundColor = 'rgba(255, 252, 127)' 
        document.querySelector('body').style.color = 'black'
}