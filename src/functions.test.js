const { expect } = require("@jest/globals");
const functions = require("./functions");

// COMPARISON OF BASIC DATA TYPES
test("Adds 2 + 2 = 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// COMPARISON OF BASIC DATA TYPES
test("Adds 2 + 2 != 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// NULL VALUES
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// FALSY
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
});

// NULL IS FALSY
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
});

// OBJECTS AND ARRAY COMPARISONS
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// LESS THEN OR GREATER THAN
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// REGULAR EXPRESSIONS
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// ARRAYS
test("Admin should be in names", () => {
  let usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// PROMISES
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// ASYNC AWAIT
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

// RESOURCE TESTING
const nameCheck = () => console.log("Checking name....");

descibe("Checking names", () => {
  beforeEach(() => nameCheck());
  afterEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "";
    expect(user.name).toBe("Jeff");
  });
});
