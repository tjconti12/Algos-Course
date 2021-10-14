const sameFreq = require('./sameFrequency');

test("Should return if two numbers have the same frequency of digits", () => {
    expect(sameFreq(182,281)).toBeTruthy();
    expect(sameFreq(34,14)).toBeFalsy();
    expect(sameFreq(3589578,5879385)).toBeTruthy();
    expect(sameFreq(22,222)).toBeFalsy();
})