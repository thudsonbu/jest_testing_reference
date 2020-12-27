const { expect } = require("@jest/globals");
const functions = require("./functions");

test("Adds 2 + 2 = 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 != 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
