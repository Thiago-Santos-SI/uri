var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines.shift());

let arr = []

for (let i = 1; i <= 10; i++) arr.push(i)

for (let i of arr) {
    console.log(`${i} x ${n} = ${i * n}`)
}
