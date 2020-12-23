const { expect } = require('@jest/globals');
const functions = require('./functions');

test('Adds 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 != 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy;
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy;
});

