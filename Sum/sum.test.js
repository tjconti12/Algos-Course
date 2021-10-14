const sum = require('./sum');

test('should return sum of two numbers', () => {
    expect(sum(2,2)).toEqual(4);
})