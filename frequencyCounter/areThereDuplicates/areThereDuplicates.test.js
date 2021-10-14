const areThereDuplicates = require('./areThereDuplicates');

test("Checks whether there are any duplicates among the arguments passed in", () => {
    expect(areThereDuplicates(1,2,3)).toBeFalsy();
    expect(areThereDuplicates(1,2,2)).toBeTruthy();
    expect(areThereDuplicates("a","b","c","a")).toBeTruthy();
})