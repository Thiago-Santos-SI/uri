var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let arr = []
for (let i of lines) arr.push(parseInt(i))

let maior = 0
let posicao = 0
for (let i of arr) {
    if (arr[i] > maior) {
        maior = arr[i]
        posicao = i+1
    }
}
console.log(maior)
console.log(posicao)