const isSubsequence = require('./isSubsequence');

test("Check whether the characters in first string appear in second string", () => {
    expect(isSubsequence('hello', 'hello world')).toBeTruthy();
    expect(isSubsequence('sing', 'sting')).toBeTruthy();
    expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
})