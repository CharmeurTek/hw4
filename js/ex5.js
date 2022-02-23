const word = prompt("Please enter a word");

function ManyVowels(word) {
    var count = 0;

    for(var i = 0; i < word.length; i++) {
        switch (word[i]) {
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
            case 'y':
                count++;
                break;
        }
    }
    return count;
}

function isPalindrome(word) {
    var wordReverse = word.split("").reverse();
    var i = 0;
    var count = 0;
    console.log(wordReverse);
    while (i < word.length) {
        if (word[i].toLowerCase() === wordReverse[i].toLowerCase()) {
            count++;
        }
        i++;
    }
    if (count == word.length) {
        return "";
    }
    else {
        return "not ";
    }
}

console.log(word + " contains " + ManyVowels(word) + " vowels and is " + isPalindrome(word) + "a palindrome");