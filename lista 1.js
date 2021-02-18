var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines.shift());
let valo = new Array(n + 1);

console.log(valo)

for (let i = 0; i < valo.length; i++) {
    valo[i] = i ** 2;
}
for (let i = 1; i < valo.length; i++) {
    if (i % 2 == 0) {
        console.log(`${i}^2 = ${valo[i]}`);
    }
}

let valor = []




