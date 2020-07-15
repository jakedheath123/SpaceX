import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Header from "./Header";

describe("Header component test suite", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });
  it("renders Header component", () => {
    const component = renderer.create(shallow(<Header />)).toJSON();

    expect(component).toMatchSnapshot();
  });
});
