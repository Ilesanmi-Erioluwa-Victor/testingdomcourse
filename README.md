## WHAT IS AUTOMATED TESTING ?

Automated tests are programs that automate the task of testing your software.

### **JEST VS RTL(React Testing Library)**

Jest is a javascript testing framework

### Types of Tests

Typically, you will come across three types of Tests, they are other types of tests but this main three is the most common ones, which as a developer you must know

- **UNIT TESTS**
  Focus on testing the individual building blocks of an application such as a Class, Function or Component
- **INTEGRATION TESTS**
  Focus is on testing a combination of units and ensuring they work together
- **END-TO-END TESTS [E2E]**
  Focus is on testing the entire application flow and ensuring it works as designed from start to finish.
  Involves a real UI, real Backend Database, real Services e.t.c

### Test Driven Development <TDD>

Test driven Development is a software development process where you write tests before writing software code.
Once the tests has been written, you then write the code to ensure the tests pass.
This process involves three phases which are :

- Create tests that verify the functionality of a specific feature.
- Write software code that will run the tests successfully when re-executed.
- Refactor the code for optimization while ensuring the tests continue to pass.

### Grouping of Test

When testing your components or function, you can group all your test together using `describe`
`describe` accept two parameters which is `describe(name, function)`, _name_ is the first argument, which is the group name. The second argument is a function that contains the expectations tests.
e.g

```
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
  render(<Greet />);
  const textElemet = screen.getByText("Hello");
  expect(textElemet).toBeInTheDocument();
  });

  test("Greet renders name when passed as prop", () => {
  render(<Greet name="Ericjay" />);
  const textElemet = screen.getByText("Hello Ericjay");
  expect(textElemet).toBeInTheDocument();
  });
});
```

### FileName Conventions

- Files with .test.js or .test.tsx suffix.
- Files with .spec.js or .spec.tsx suffix.
- Files with .js or .tsx suffix in **tests** folders.
  Recommendation is to always put your tests next to the code they are testing so that relative imports are shorter and clean.

### Code Coverage

Code coverage is a metric that can help you understand how much your software code is tested.

- Statement Coverage :
  How many of the statements in the software code have been executed.

- Branch Coverage :
  How many of the branches of the controlled structures (if statements for example) have been executed.
- Function Coverage :
  How many of the functions defined have been called.

- Line Coverage :
  How many of lines of source code have been tested.

### Assertions

When writing tests, we often need to check that values meets some certain conditions.
Assertions decide if a test passes or fails. <br>
`expect()` is a global assertion method in jest.<br>
Typically, you will use `expect()` along with a **matcher** function to assert something about a value.
We have so many assertions in jest/dom package, you can read more or check out the official page of Jest : https://github.com/testing-library/jest-dom

### What to Test ?

When testing in react, always have this scope at the back of your mind which are :

- Test Components renders
- Test Components renders with props
- Test Components renders in different states
  e.g when a user is login, when a user logout
- Test Components reacts to event.
  e.g when a user click on a button.

### What not to Test ?

- Implementation details
- Third party Code ( API'S you are consuming)
- Code that is not important from a user point of view

### RTL Queries

Every test we write generally involves the following basics steps :

- Render the Component
- Find an element rendered by the component
- Assert against the element found in step 2 which will pass or fail the test.
  To render the component, we use the `render` method from RTL(React Testing Library).
  For assertion, we use expect passing in a value and combine it with a matcher function from a `jest` or `jest-dom`
  **Queries** are the method that Testing Library provides to find elements on the page.
  To find single element on the page we have :
- **`findBy..`**
- **`queryBy..`**
- **`getBy..`**
  To find multiple elements on the page we have :
- **`getAllBy..`**
- **`queryAllBy..`**
- **`getAllBy..`**
  P.S
  the `..` suffix can be of `Role`,`LabelText`, `PlaceHolderText`, `Text`, `DisplayValue`, `AltText`, `Title` and finally `TestId`.

**`getBy..Queries`**
`getBy`.. class of queries return the matching node for query, and throw a descriptive error if no element is match or found multiple elements match.

- **`getByRole :`**
  `getByRole` queries for element with the given role.
  Role refer to the ARIA ( Accessible Rich Internet Application ) role which provides semantics meaning to content to ensure people using assistive technologies are able to use them.
  By defaults elements in `HTML` have default role e.g
 - **`button : button role`**
 - **`anchor(a tag) : link role`**
 - **` h1 - h6 : heading role `**
 - **`checkbox : checkbox role`**
 - **`radio : radio role`**
 - **`select : combo box`**
e.t.c

When selecting elements with `getByRole`, if more than one element is found, by defaults, `getByRole` throws an error,  in order to solve this problem/ issue, we pass in an option to `getByRole` as an object.
e.g
```
import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Greet", () => {
  test("renders correctly", () => {
  render(<Application />);
  const nameElemet = screen.getByRole("textbox", {
    name : "Name"
  });
  expect(nameElemet).toBeInTheDocument();
  });
});

```
other key names can also be as an option in `getByRole` which are :
- **level** 
 as for level for heading in `HTML` level 1 - level 6 (h1 - h6)
- **hidden**
- **selected**
- **pressed**
- **checked**
You can check out the official docs for more info's.
<br>
- **`getByRole :`**
