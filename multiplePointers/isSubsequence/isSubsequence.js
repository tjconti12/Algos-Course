const isSubsequence = (input1, input2) => {
    let firstPointer = 0;
    let secondPointer = 0;
    
    while(secondPointer < input2.length) {
        if (input1[firstPointer] === input2[secondPointer]) {
            firstPointer ++;
            secondPointer ++;
        } else {
            secondPointer ++;
        }
    }
    if (firstPointer >= input1.length) {
        return true;7
    } else {
        return false;
    }
}

module.exports = isSubsequence;