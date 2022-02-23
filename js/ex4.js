function verificationStopFirst(word) {
    if (word.length == 1) {
        console.log("No words to display, Stop was the first word entered.");
    } else {
        for (var i = 0; i != word.length - 1; i++) {
            console.log(word[i]);
        }
    }
}

var word = [];
var i = 0;

word[i] = prompt("Please enter word(s): ");

while (word[i].toLowerCase() !== "stop") {
    i++;
    word[i] = prompt("Please enter word(s): ");
}

verificationStopFirst(word);