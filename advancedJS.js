const mode = (arr) =>
    arr.reduce(
        function (a, b, i, arr) {
            return arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
        })


//console.log(mode([1, 2, 3, 2, 3, 5, 3]))

// retorna o item que mais se repete = 3

const myReduce = (list, initialValue, reducer) => {
    if(list.length === 0) {
        return initialValue;
    } else {
        const [first, ...rest] = list;
        const updatedAcc = reducer(initialValue, first);
        return myReduce(rest, updatedAcc, reducer);
    }
}

const countWords = wordList => {
    return myReduce(wordList, {}, (acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    });
};

countWords(["hello", "world", "hello", "dogs", "hello", "cats"]);
