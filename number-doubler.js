const prompt = require('prompt-sync')({ sigint: true });

let input = prompt('Enter a number:');
let sum = input;

while (sum <= 100) {
    sum = sum * 2;
    console.log(sum);
}