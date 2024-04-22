//Write your pseduo code first! 

document.querySelector('#yell').addEventListener('click', converter)

function converter() {
  let temp = document.querySelector('#sel').value
  
  temp = temp * 9/5 + 32 

  document.querySelector('placeToYell').innerText = temp


}