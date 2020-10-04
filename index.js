// Code your solutions in this file
function writeCards(names, eventName) {
  var newarray = [];
  for (let i = 0; i < names.length; i++) {
    newarray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return newarray;
}

function countDown(num) {
  while (num > 0 ) {
    console.log(num);
    num--
  }
  console.log(num);
}
