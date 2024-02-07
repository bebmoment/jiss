// before running, make sure to type npm install prompt-sync
alert("Welcome ");

const prompt = require('prompt-sync')(); // allow user input

// 1
const name = prompt('What is your name? ');
alert(`Hey there ${name}`);
const book = prompt('What is your favourite book? ');
alert(`${book} is one of the books of all time`);

// 2
do {
    yourNumber = prompt('Enter a number: ');
} while (isNaN(yourNumber));
// bonus one liner nesting the ternary operator
const positiveOrNegative = (val) => (val == 0) ? "zero" : (val > 0) ? "positive" : "negative";
alert(positiveOrNegative(yourNumber));
// console.log(negativeOrPositive(yourNumber));

// using if else
// function negativeOrPositive(val) {
//     if (val == 0) {
//         return "zero";
//     }
//     if (val > 0) {
//         return "positive";
//     } else {
//         return "negative";
//     }
// } 

// 3
let divideByThree = 0;
do {
    divideByThree = prompt("Enter a number greater than 0: ");
} while(divideByThree <= 0 || isNaN(divideByThree));
const divisibleByThree = (val) => (val % 3 === 0) ? "Your number is divisible by 3" : "Your number is not divisible by 3";
alert(divisibleByThree(divideByThree));

// 4
let date = prompt("Enter a date: ");
let days = 0;
const monthDate = date.split(' ');
switch (monthDate[0].toLowerCase()) {
    case 'december':
        days += 31;
    case 'november':
        days += 30;
    case 'october':
        days += 31;
    case 'september':
        days += 30;
    case 'august':
        days += 31;
    case 'july':
        days += 31;
    case 'june':
        days += 30;
    case 'may':
        days += 31;
    case 'april':
        days += 30;
    case 'march':
        days += 31;
    case 'february':
        days += 28;
    case 'january':
        break;
    default: 
        days = 0;
}
days += parseInt(monthDate[1]);
alert(days);

// 5
let j = 0;
while (j <= 10) {
    console.log(j++);
}

for (let k = 1; k <= 10; k++) {
    console.log(k);
}

// 6
const triArea = (length, width) => length*width/2 + " units squared";
console.log(triArea(6, 4));

// 7 with its silly floating point math
const taxShippingCalculator = (price) => (price > 50) ? price*1.15 : price*1.10*1.15;
console.log(taxShippingCalculator(51));

/* 8: fizzbuzz jumper 
 * If it's a multiple of 3, print Fizz
 * If it's a multiple of 5, print Buzz
 * If it's a multiple of both, print FizzBuzz
 * If it's a multiple of neither, print the number
*/
const FizzBuzz = (num) => {
    let output = '';
    if (num % 3 === 0) {
        output += "Fizz";
    }
    if (num % 5 === 0) {
        output += "Buzz";
    }
    if (output==='') {
        output = num;
    }
    return output;

}
console.log(FizzBuzz(15), FizzBuzz(30), FizzBuzz(5), FizzBuzz(2));