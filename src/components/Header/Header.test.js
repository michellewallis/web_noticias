import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Head", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
