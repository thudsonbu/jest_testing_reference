# Overview

Unit testing can be broken into categories based on the size of the system that they are testing. The smallest test is a unit test. A unit test usually tests single function in the code to make sure that the output is what is expected. An integration test is a test that two systems can work together. For example, the database and the api server can be tested in an integration test. Finally, there are functional test which test a function from the users point of view.

One of the largest benefits to unit testing is identifying exactly what your code should do before your write it. When you write test cases it forces you to think about things like what if this parameter is null or should this function even be here.

# Jest

After creating a new project with npm init,  and saving jest to the package.json under development dependencies with npm install jest —save-dev, we need to change the package.json file to have a script that runs with the command "test" and that should be defined with test as shown below:

```json
{
  "name": "unit_testing",
  "version": "1.0.0",
  "description": "Unit testing tutorial",
  "main": "index.js",
  "dependencies": {
    "jest": "^26.6.3"
  },
  "devDependencies": {},
  "scripts": {
    "test": "jest"
  },
  "author": "thudsonbu",
  "license": "ISC"
}
```

When testing it is most common to create a seperate file with the name <filename>.test.js. This is because Jest will automatically figure out what test goes with what file. So here is what it looks like:

### functions.js

```jsx
const functions = {
    add: (num1, num2) => num1 + num2,
}

module.exports = functions;
```

### functions.test.js

```jsx
const functions = require('./functions');

test('Adds 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
```

We then run the "test" command which will run our "test" script which is jest. Jest returns that our test passed.

We wrap the jest function expect then we call on the result of that function toBe which is the result that we expect the function to be. toBe is what is called a matcher and there several other matchers that can be used:

### Common Matchers:

toBeNull - matches only null

toBeUndefined - matches only undefined

toBeDefined - opposite of undefined

toBeTruthy - matches anything that an if statement treats as true (1, true, has a value)

toBeFalsy - matches anything that an if statement treats as true (0, false, null)

toEqual - used for when you want to compare objects and arrays

It is important to note that toBe will not work for objects

toMatch - used for regular expressions

toContain - used for checking the contents of an array

### Promises

In Jest when an promise is involved you will need to create an assertion that will run after the promise is resolved. Here is a simple example of what that looks like.

```jsx
// PROMISES
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Lean Graham");
  });
});
```

If you do not return the promise and do not have expect.assertions(); the code will always pass because it did not wait for the promise to be resolved.

### Async

Similar to promises, asyn await function require expect.asssertions();. Here is an example of what that looks like.

```jsx
// ASYNC AWAIT
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
```

### Resource Testing For Each Function

When you need to open a resource and close a resource for testing in jest you can use the before each and after each functions.

```jsx
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
```

This will open and close the connection to the database before each test is run and after each test is run.

### Resource Testing For All Functions

If you want to open a resource before any tests and then close if after testing is complete use beforeAll and afterAll.

```jsx
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
```

The connection to the database will be opened before testing starts and the connection will be closed after all test are complete.

### Resource Testing for Some Functions

```jsx
const nameCheck = () => console.log('Checking name....');

descibe('Checking names', () => {
	beforeEach(() => nameCheck());

	test('User is Jeff', () => {
		const user = '';
		expect(user.name).toBe('Jeff');
	});
});
```

The name check function will be run before each of the tests within the checking names description.
