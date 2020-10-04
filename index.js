// Code your solutions in this file
// Code your solutions in this file
function writeCards(array, event)  {
    let gifts = [];
    for (let i = 0; i < array.length; i++) {
      gifts.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
      }
      return gifts
    }
    
    function countDown(number) {
      while (number >= 0) {
        console.log(number)
        number --
      }
    }