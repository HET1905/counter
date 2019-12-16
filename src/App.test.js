import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// import ReactDom from "react-dom";
// import { render } from "@testing-library/react";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders good", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
