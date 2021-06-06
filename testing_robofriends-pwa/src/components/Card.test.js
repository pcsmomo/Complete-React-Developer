import { shallow, mount, render } from "enzyme";
import React from "react";
import Cart from "./Card";

it("expect to render Card component", () => {
  expect(shallow(<Cart />)).toMatchSnapshot();
});
