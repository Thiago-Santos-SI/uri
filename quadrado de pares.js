var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines.shift());

let paresArr = []

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) paresArr.push(i)
}

for (let i of paresArr) {
    console.log(`${i}^2 = ${i ** 2}`)
}

paresArr.map(e => {
    console.log(e)
})