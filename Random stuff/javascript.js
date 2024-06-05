function calculateDumbCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateDumbCircle(420));

// 2. Simulate rolling a dice
function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log(roll());
console.log(roll(20));

// 3. Convert Celcius to Fahrenheit
function convCelToFahr(celsius) {
    return celsius * 9 / 5 + 32 + " F";
}


const convCelToFahr = celsius => celsius * 9 / 5 + 32 + " F";

// 7. Check if a number is a multiple of 3
function isMultipleOfThree(i) {
    return i % 3 === 0;
}
console.log(isMultipleOfThree(9));

// 1. Calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// 2. Simulate rolling a dice
function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

// 3. Convert Celcius to Fahrenheit
function convertCelciusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32 + " F";
}

// 4. Modify to convert Fahrenheit to Celsius
function convertTemperature(value, scale) {
    if (scale === "F") {
        return (value - 32) * 5 / 9 + " C";
    } else if (scale === "C") {
        return value * 9 / 5 + 32 + " F";
    } else {
        return "Invalid scale. Please specify 'C' or 'F'.";
    }
}

// 5. Check if all numbers are less than 50
function under50(...numbers) {
    return numbers.every(num => num < 50);
}
const isUnder50 = (...numbers) => numbers.every(num => num < 50);
// 6. Sum of numbers
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

function sum(...numbers) {
    return numbers(())
}
// 7. Check if a number is a multiple of 3
function isMultipleOf3(number) {
    return number % 3 === 0;
}

// 8. Subtract discount
function applyDiscount(total, discount = 0) {
    return total - (total * (discount / 100));
}

// 9. Format seconds to days, hours, minutes
function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.round((seconds % (60 * 60)) / 60);

    let formattedTime = "";
    if (days > 0) {
        formattedTime += `${days} Days, `;
    }
    if (hours > 0) {
        formattedTime += `${hours} Hours, `;
    }
    formattedTime += `${minutes} Minutes`;
    
    return formattedTime;
}

// 10. Modify to include units that make sense
function formatTimeSensible(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.round((seconds % (60 * 60)) / 60);

    let formattedTime = "";
    if (days === 1) {
        formattedTime += "1 Day, ";
    } else if (days > 1) {
        formattedTime += `${days} Days, `;
    }
    if (hours === 1) {
        formattedTime += "1 Hour, ";
    } else if (hours > 1) {
        formattedTime += `${hours} Hours, `;
    }
    if (minutes === 1) {
        formattedTime += "1 Minute";
    } else if (minutes > 1) {
        formattedTime += `${minutes} Minutes`;
    }
    
    return formattedTime;
}

// Testing the functions
console.log("1. Area of a circle with radius 5:", calculateCircleArea(5));
console.log("2. Rolling a 6-sided dice:", roll());
console.log("3. Converting 0°C to Fahrenheit:", convertCelciusToFahrenheit(0));
console.log("4. Converting 122°F to Celsius:", convertTemperature(122, "F"));
console.log("5. Checking if all numbers are under 50:", isUnder50(1, 2, 3, 5, 4, 65));
console.log("6. Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("7. Checking if 9 is a multiple of 3:", isMultipleOf3(9));
console.log("8. Applying 20% discount to $100:", applyDiscount(100, 20));
console.log("9. Formatting 10000 seconds:", formatTime(10000));
console.log("10. Formatting 9378 seconds sensibly:", formatTimeSensible(9378));

function isMultipleOfThree(i) {
    return i % 3 === 0;
}
console.log(isMultipleOfThree(9));

function isMultipleOfThree(i) {
    return i % 3 === 0; 
}