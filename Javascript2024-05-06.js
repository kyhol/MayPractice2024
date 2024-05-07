let college = "keyincollege";
let CountryCode = "ca";

let collegewebsite = college + "." + CountryCode;
console.log(collegewebsite);

const isKeyin = collegewebsite === "keyincollege.ca";
console.log(isKeyin);



let isNotKeyin = !isKeyin;

let byte1 = 6;
let byte2 = 31;
let byte3 = 155;
let byte4 = 194;

let IP = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(IP);

var table = 15;
for (var i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}

for (var i = 0; i <= 99; i++) {
    if (i % 2 === 0) {
        console.log(i + " Even Stevens");
    } else {
        console.log(i + " Odd Bobb");
    }
}

var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("The sum of all even numbers from 1 to 100 is: " + sum);

var number = 28;
var sum = 0;

for (var i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log(number + " is a perfect number.");
} else {
    console.log(number + " is not a perfect number.");
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

var number = 29; // Change the number to test here
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}