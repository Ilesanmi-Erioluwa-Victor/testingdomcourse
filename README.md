## WHAT IS AUTOMATED TESTING ?
Automated tests are programs that automate the task of testing your software.

### *JEST VS RTL(React Testing Library)*
Jest is a javascript testing framework

#### Types of Tests
  Typically, you will come across three types of Tests, they are other types of tests but this main three is the most common ones, which as a developer you must know 
  - UNIT TESTS
   Focus on testing the individual building blocks of an application such as a Class, Function or Component
  -  INTEGRATION TESTS
   Focus is on testing a combination of units and ensuring they work together
  -  END-TO-END TESTS [E2E]
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
`describe` accept two parameters which is `describe(name, function)`, *name* is the first argument, which is the group name. The second argument is a function that contains the expectations tests.
e.g  `import { render, screen } from "@testing-library/react";
import Greet from "./Greet";`

`describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElemet = screen.getByText("Hello");
    expect(textElemet).toBeInTheDocument();
  });`

  `test("Greet renders name when passed as prop", () => {
    render(<Greet name="Ericjay" />);
    const textElemet = screen.getByText("Hello Ericjay");
    expect(textElemet).toBeInTheDocument();
  });
});
`
