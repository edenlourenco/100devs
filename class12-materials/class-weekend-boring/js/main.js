document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day.localeCompare("Tuesday", undefined, { sensitivity: 'base' }) === 0 || day.localeCompare("Thursday", undefined, { sensitivity: 'base' }) === 0) {
    alert("CLASS DAY");
  } else if (day.localeCompare("Saturday", undefined, { sensitivity: 'base' }) === 0 || day.localeCompare("Sunday", undefined, { sensitivity: 'base' }) === 0) {
    alert("Weekend");
  } else {
    alert("Boring");
  }
}
