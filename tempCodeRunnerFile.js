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