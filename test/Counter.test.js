import React from "react";
import Counter from "../src/Counter";
import { shallow, mount } from "enzyme";

describe("Counter Component", () => {

    // it("should match snapshot", () => {
    //     const wrapper = mount(<Counter />);

    //     expect(wrapper).toMatchSnapshot();
    // });

    it("should have initial count value shown", () => {
        const wrapper = mount(<Counter />);

        const h1 = wrapper.find("h1");

        expect(h1.text()).toBe("0");
    });

    it("should have two buttons", () => {
        const wrapper = mount(<Counter />);

        const btn = wrapper.find("button");

        expect(btn).toHaveLength(2);
    });

    it("should  increment the count value when ++ is clicked", () => {
        const wrapper = mount(<Counter />);

        const btn = wrapper.find("button");
        btn.first().simulate("click");

        wrapper.update();

        const h1 = wrapper.find("h1");
        expect(h1.text()).toBe("1");
    });

    it("should  decerment the count value when -- is clicked", () => {
        const wrapper = mount(<Counter />);

        const btn = wrapper.find("button");
        btn.last().simulate("click");

        wrapper.update();

        const h1 = wrapper.find("h1");
        expect(h1.text()).toBe("-1");
    });
});