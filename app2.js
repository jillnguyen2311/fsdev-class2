const fs = require("fs");

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (err, data)=>{
    console.log(data)
});
console.log('welcome to week 2');