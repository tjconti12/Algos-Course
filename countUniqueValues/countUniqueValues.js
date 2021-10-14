const countUniqueValues = (arr) => {
    if(arr.length === 0) return 0;
    let first = 0;
    let second = 1;
    let result = 1;
    while(second < arr.length) {
        if(arr[first] === arr[second]) {
            second ++
        } else {
            first = second;
            second ++
            result ++
        }
    }
    return result;
}


module.exports = countUniqueValues;