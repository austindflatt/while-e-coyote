const prompt = require('prompt-sync')({ sigint: true });

let string = prompt('Enter a string:');
let stringRepeater = string;

while (stringRepeater.length <= 10) {
    console.log(stringRepeater);
    stringRepeater = stringRepeater + string;
}