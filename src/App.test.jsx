import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/dom";
import App from "./App";
import { describe, expect, test } from "vitest";
import KebabCaseToTitleCase from "./helpers";

//we'll use screen to find the element we're looking for. In this case, the element we're looking for is a button. Now in our first test, in the last section we used get by text.
// Generally, it's more encouraged to use get by role for those accessibility reasons that I spoke about before.
// How are we going to figure out whether or not it has the correct color? In this case, we are going to use the jest dom matcher to have class.
// How are we going to figure out whether or not it has the correct color? In this case, we are going to use the jest dom matcher to have class.
// in frontend testing we can skip // test("Button has correct text before click", () => {}); by adding name in first test
// go to App.jsx make button

// test("Button has correct color before click", () => {
//   render(<App />);
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   expect(buttonElement).toHaveClass("red");
// });

// // test("Button has correct text before click", () => {});

// test("Button has correct color after click", () => {});

// test("Button has correct text after click", () => {});

////*************************************************

////*********************** logRoles` method for debugging roles

// Now, let's say you didn't know that button was the rule for what you were looking for. There are actually some debugging tools that we can use for this. Back at the testing library site here, I'm in core API advanced and debugging.
// And what I want to look at is this log rolls method. Notice that this gets imported from testing library Dom and not testing library react. And it's a little cryptic here how to use it. And to be honest the syntax is a little clunky, but it can be very, very useful, which is why I'm introducing it.
// if I want to see what the roles are in my app, I can destructure a container from the output of this render. And then I can run log rolls on that container.

// test("Button has correct color and label before click", () => {
//   const { container } = render(<App />);
//   logRoles(container);
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   expect(buttonElement).toHaveClass("red");
// });

// test("Button has correct color after click", () => {});

// test("Button has correct text after click", () => {});

////****************************************************************

////********************************************** Test Behavior when Clicking Button
// So this is very common with testing library to have these longer tests with multiple assertions that test a particular flow.
// Okay, so how do we click the button? Well, we can use something called Fire event from testing library React. But for now for simple a simple click we can use fire event.
// use the click method

// you have include that css here in app.jsx
// It's more straightforward to test classes than to test actual style.

// test("button click flow ", () => {
//   // render the app
//   render(<App />);

//   // find the element
//   const buttonElement = screen.getByRole("button", { name: /blue/i });

//   // check initial color
//   expect(buttonElement).toHaveClass("red");

//   // click the button
//   fireEvent.click(buttonElement);

//   // check the text
//   expect(buttonElement).toHaveTextContent(/red/i);

//   // check the color
//   expect(buttonElement).toHaveClass("blue");

//   // test style
//   //// expect(buttonElement).toHaveStyle({ "background-color": "blue" });    // this will fail
//   // expect(buttonElement).toHaveStyle({ "background-color": "rgb(0, 0, 255)" });
// });

////**********************************************************

////*******************************  Test Initial Condition of Button and Checkbox
// Let's start by testing whether the checkbox starts out as checked and the button starts out as enabled. Remember, test is a global from V test or jest and it takes two arguments.
// screen is an object which has access to dom
// So checking its name is not really necessary, but we're going to do it anyway. It's good practice in case another checkbox gets added to the page. We want to guard ourselves against that situation.
// This name is going to be the accessible name for the checkbox, which will be the label for the input,
// jest-dom matched we have toBeChecked but notToBeChecked so we have to be negatite this toBeChecked
// add checkbox in App.jsx

// test("button click flow ", () => {
//   // render the app
//   render(<App />);

//   // find the element
//   const buttonElement = screen.getByRole("button", { name: /blue/i });

//   // check initial color
//   expect(buttonElement).toHaveClass("red");

//   // click the button
//   fireEvent.click(buttonElement);

//   // check the text
//   expect(buttonElement).toHaveTextContent(/red/i);

//   // check the color
//   expect(buttonElement).toHaveClass("blue");
// });

// // test("checkbox flow", () => {
// //   render(<App />);
// //   // find elements
// //   const buttonElement = screen.getByRole("button", { name: /blue/i });
// //   const checkboxElement = screen.getByRole("checkbox", {
// //     name: /disabled button/i,
// //   });

// //   // inital condition
// //   expect(buttonElement).toBeEnabled();
// //   expect(checkboxElement).not.toBeChecked();

// //   // click the checkbox
// //   fireEvent.click(checkboxElement);

// //   // final condition
// //   expect(buttonElement).toBeDisabled();
// //   expect(checkboxElement).toBeChecked();

// //   // uncheck the checkbox
// //   fireEvent.click(checkboxElement);

// //   // check if button is re-enabled after second click
// //   expect(buttonElement).toBeEnabled();
// //   expect(checkboxElement).not.toBeChecked();

// // });

//// lets check disabled button turn grey, work-flow => disabled button -> button is grey -> uncheckedbox -> button blue

// test("checkbox flow", () => {
//   render(<App />);
//   // find elements
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   const checkboxElement = screen.getByRole("checkbox", {
//     name: /disabled button/i,
//   });

//   // inital condition
//   expect(buttonElement).toBeEnabled();
//   expect(checkboxElement).not.toBeChecked();

//   // click the checkbox
//   fireEvent.click(checkboxElement);

//   // final condition
//   expect(buttonElement).toBeDisabled();
//   expect(buttonElement).toHaveClass("grey");
//   expect(checkboxElement).toBeChecked();

//   // uncheck the checkbox
//   fireEvent.click(checkboxElement);

//   // check if button is re-enabled after second click
//   expect(buttonElement).toBeEnabled();
//   expect(buttonElement).toHaveClass("red");
//   expect(checkboxElement).not.toBeChecked();
// });

////**************************************************************** */
////*********************************** Unit testing Functions
// So often in your react app you will have functions that are separate from your components. And this might be because the functions are used by several components. So it makes sense to have the logic in a central place.
// Or because the logic is complicated enough that it makes sense to separate it from the logic of the component itself. I recommend unit testing these functions.
// If the logic is complicated enough that it's hard to test with functional tests. And one reason this might be the case is if there are too many edge cases to realistically test with functional tests, it might be overkill to fire up the component and run functional tests for every
// possible edge case, when really all you want to do is make sure that this particular function functions well for edge cases. So I want to be clear that our little tiny app here is not going to have any functions that really merit
// unit testing, but I wanted to introduce that in this section, just to give the idea of unit testing a function and show how it's done.

// Two more classes added to button meduim-violet-red and midnight-blue
// form helper function, describe here it lets us group multiple tests within the function. The second argument function. So these tests now are going to be grouped together in the test output. And it helps with test code organization.

// test("button click flow ", () => {
//   // render the app
//   render(<App />);

//   // find the element
//   const buttonElement = screen.getByRole("button", { name: /blue/i });

//   // check initial color
//   expect(buttonElement).toHaveClass("red");

//   // click the button
//   fireEvent.click(buttonElement);

//   // check the text
//   expect(buttonElement).toHaveTextContent(/red/i);

//   // check the color
//   expect(buttonElement).toHaveClass("blue");
// });

// test("checkbox flow", () => {
//   render(<App />);
//   // find elements
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   const checkboxElement = screen.getByRole("checkbox", {
//     name: /disabled button/i,
//   });

//   // inital condition
//   expect(buttonElement).toBeEnabled();
//   expect(checkboxElement).not.toBeChecked();

//   // click the checkbox
//   fireEvent.click(checkboxElement);

//   // final condition
//   expect(buttonElement).toBeDisabled();
//   expect(buttonElement).toHaveClass("grey");
//   expect(checkboxElement).toBeChecked();

//   // uncheck the checkbox
//   fireEvent.click(checkboxElement);

//   // check if button is re-enabled after second click
//   expect(buttonElement).toBeEnabled();
//   expect(buttonElement).toHaveClass("red");
//   expect(checkboxElement).not.toBeChecked();
// });

// describe("kebabCaseToTitleCase", () => {
//   test("works for no hyphen", () => {
//     // I could run this and store it in a variable, but for a simple test like this, it's okay just to run the function straight inside the the expect.
//     expect(KebabCaseToTitleCase("red")).toBe("Red");
//   });
//   test("works for one hyphen", () => {
//     expect(KebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
//   });
//   test("works for multiple hyphens", () => {
//     expect(KebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
//   });
// });

////*************************************************************

////********************************************** Code Quiz! Update Tests for New Color Names

test("button click flow ", () => {
  // render the app
  render(<App />);

  // find the element
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click the button
  fireEvent.click(buttonElement);

  // check the text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check the color
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);
  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disabled button/i,
  });

  // inital condition
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click the checkbox
  fireEvent.click(checkboxElement);

  // final condition
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("grey");
  expect(checkboxElement).toBeChecked();

  // uncheck the checkbox
  fireEvent.click(checkboxElement);

  // check if button is re-enabled after second click
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("medium-violet-red");
  expect(checkboxElement).not.toBeChecked();
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphen", () => {
    // I could run this and store it in a variable, but for a simple test like this, it's okay just to run the function straight inside the the expect.
    expect(KebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(KebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(KebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
