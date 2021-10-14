const averagePair = (arr, average) => {
    let first = 0;
    let second = arr.length -1;

    while (second > first) {
        let calAverage = (arr[first] + arr[second]) / 2
        if (calAverage === average) {
            return true;
        } else if (calAverage < average) {
            first ++
        } else {
            second --;
        }
    }
    return false;
}

module.exports = averagePair;