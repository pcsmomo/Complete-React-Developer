import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

it("expect to render MainPage component", () => {
  expect(shallow(<MainPage />)).toMatchSnapshot();
});
