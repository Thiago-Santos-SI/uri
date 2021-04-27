// reducer takes an array, reducer() and initialValue as argument

let arr = [1, 2, 3, 4];

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

function reduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue
    for (let i = 0; i < arr.length; i++)
        accumulator = reducer(accumulator, arr[i]);
    return accumulator;
}

const sum = reduce(arr, sumReducer);

console.log(sum)