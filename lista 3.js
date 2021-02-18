var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines.shift());

console.log('n', n)
for( let i =0; i<n;i++){
    let lista = new Array(3);
    console.log(lista)
    let separar = lines.shift().split(' ');
    lista[0] = separar.shift();
    console.log(lista)
    lista[1] = separar.shift();
    lista[2] = separar.shift();

    var media=((lista[0]*2)+(lista[1]*3)+(lista[2]*5))/10;
    console.log(media.toFixed(1)) ;
}
