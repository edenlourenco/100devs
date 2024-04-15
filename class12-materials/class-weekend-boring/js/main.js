document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === "segunda") {
    console.log ("This is good")
  }
  else
   console.log ("It is boring")

}
