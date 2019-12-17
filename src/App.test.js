import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// import ReactDom from "react-dom";
// import { render } from "@testing-library/react";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  // const wrapper = shallow(<App />);
  const wrapper = setup();
  // const appComponent = wrapper.find("[data-test='component-app']");
  const appComponent = findTestByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("render heading", () => {
  const wrapper = setup();
  const counterDisplay = findTestByAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("render Increment button", () => {
  const wrapper = setup();
  const buttonIncrement = findTestByAttr(wrapper, "button-increment");
  expect(buttonIncrement.length).toBe(1);
});

test("render Decrement Button", () => {
  const wrapper = setup();
  const decrementButton = findTestByAttr(wrapper, "button-decrement");
  expect(decrementButton.length).toBe(1);
});

test("test intial counter to 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("test button click increment to counter", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  const buttonIncrement = findTestByAttr(wrapper, "button-increment");
  buttonIncrement.simulate("click");

  const counterDisplay = findTestByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("test button decrement click", () => {
  const counter = 5;
  const wrapper = setup(null, {
    counter
  });

  const decrementButton = findTestByAttr(wrapper, "button-decrement");
  decrementButton.simulate("click");

  const counterDisplay = findTestByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});
test("Greater than 0", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const decrementButton = findTestByAttr(wrapper, "button-decrement");
  decrementButton.simulate("click");

  const errorDisplay = findTestByAttr(wrapper, "error-display");
  expect(counter).toBeGreaterThanOrEqual(0);
});
