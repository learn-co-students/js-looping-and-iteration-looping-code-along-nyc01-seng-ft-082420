// Code your solutions in this file

//for loop
const ppl = ["Ada", "Brendan", "Ali"];
function writeCards(array, message) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Thank you, ${array[i]}, for the wonderful ${message} gift!`)
    }
        return array
};

//while loop
function countDown() {
    let countdown = 10;
    while (countdown <= 10 && countdown >= 0) {
        console.log(countdown--)
    }

};






