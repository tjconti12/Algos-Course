const sameFrequency = (num1, num2) => {
    let firstNum = num1.toString();
    let secondNum = num2.toString();
    if(!firstNum.length === secondNum.length) {
        return false;
    }
    let freq1Counter = {};
    let freq2Counter = {};

    for(let num of firstNum) {
        freq1Counter[num] = (freq1Counter[num] || 0) + 1; 
    }

    for(let num of secondNum) {
        freq2Counter[num] = (freq2Counter[num] || 0) + 1;
    }
    for (let key in freq1Counter) {
        if(freq2Counter[key] !== freq1Counter[key]) {
            return false;
        }
    }
    return true;
}

sameFrequency(123,321);

module.exports = sameFrequency;