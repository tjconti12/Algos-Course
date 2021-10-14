const areThereDuplicates = (...input) => {
    const freqCounter = {};

    for (let item of input) {
        freqCounter[item] = (freqCounter[item] || 0) + 1;
    }
    for (let key in freqCounter) {
        if (freqCounter[key] > 1) {
            return true;
        }
    }
    return false;
}


module.exports = areThereDuplicates;