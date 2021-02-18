var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines.shift());

let initialArr = []

for (let i = 1; i <= n; i++) initialArr.push(i)

for (let i = 0; i < n; i++) {
    for (let i of lines) {
       const lista = lines.shift().split(' ')
        console.log((((lista[0]*2)+(lista[1]*3)+(lista[2]*5))/10).toFixed(1))
    }
}
