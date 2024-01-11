const fs = require("fs");

const textIn = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8')
console.log(textIn);

const textOut = 'hoho';
fs.writeFileSync(".outputFile.txt", textOut)

// let name = 'jill';
// let a = 'hello' + name;
// console.log(a);