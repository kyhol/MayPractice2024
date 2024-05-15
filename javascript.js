function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateCircleArea(69));

// 2. Simulate rolling a dice
function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log(roll());
console.log(roll(20));

// 3. Convert Celcius to Fahrenheit
function convertCelciusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32 + " F";
}

// 7. Check if a number is a multiple of 3
function isMultipleOfThree(i) {
    return i % 3 === 0;
}
console.log(isMultipleOfThree(69));