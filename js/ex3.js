const values = [3, 11, 7, 2, 9, 10];

function sumOfNumbers(values) {
    var i = 0;
    var sum = 0;

    while (i < values.length) {
        sum += values[i];
        i++;
    }
    return sum;
}

function findTheMin(values) {
    var i = 0;
    var min = 0;

    while (i < values.length) {
        if (values[i] < min || i == 0) {
            min = values[i];
        }
        i++;
    }
    return min;
}

function findTheMax(values) {
    var i = 0;
    var max = 0;

    while (i < values.length) {
        if (values[i] > max || i == 0) {
            max = values[i];
        }
        i++;
    }
    return max;
}

console.log("Sum of all array values = " + sumOfNumbers(values));
console.log("The minimum number is " + findTheMin(values));
console.log("The maximum number is " + findTheMax(values));