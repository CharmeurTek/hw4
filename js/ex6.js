function numberRandom() {
    //101 is not include
    return Math.floor(Math.random() * 101);
}

var number = prompt("Please guess the number: ");
number = parseInt(number);
var numberWin = numberRandom();
var count = 0;

while (number != numberWin) {
    if (number > numberWin) {
        number = prompt("Too high, guess again");
        number = parseInt(number);
    }
    else if (number < numberWin) {
        number = prompt("Too low, guess again");
        number = parseInt(number);
    }
    count++;
}
alert("Correct!  It took you " + count + " attempts to guess the correct number.");