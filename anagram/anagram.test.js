const { expect } = require('@jest/globals');
const anagram = require('./anagram');

test('tests that two strings are anagrams', () => {
    expect(anagram("", "")).toBeTruthy();
    expect(anagram("aaz", "zza")).toBeFalsy();
    expect(anagram("anagram", "nagaram")).toBeTruthy();
    expect(anagram("car", "rat")).toBeFalsy();
    expect(anagram("awesome", "awesom")).toBeFalsy();
    expect(anagram("amanaplanacanalpanam", "acanalmanplanpamana")).toBeFalsy();
    expect(anagram("qwerty", "qeywrt")).toBeTruthy();
    expect(anagram("texttwisttime", "timetwisttext")).toBeTruthy();
})