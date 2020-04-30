import About from "../src/About";
import React from "react";
import { shallow } from "enzyme";

// unit testing
// integration
// uat
// end2end test
// load testing
// ui testing
// writing test is not an art, writing code is an art
// QA
describe("About Component", () => {

    it("should render component", () => {
        const comp = shallow(<About />);
        expect(comp).toBeDefined();
    });

    it("should render heading text as About Component", () => {
        const comp = shallow(<About />);

        const heading = comp.find("h1");

        expect(heading.text()).toBe("About");
    });
});