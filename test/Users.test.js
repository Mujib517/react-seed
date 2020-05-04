import React from "react";
import { mount } from "enzyme";
import Users from "../src/Users";
import * as userSvc from "../src/UserService";


const wait = () => new Promise((res, rej) => setImmediate(res));

describe("Users Component", () => {

    it("should make an api call to fetch the data", () => {
        // fake method
        userSvc.getUsers = jest.fn().mockResolvedValue({});
        mount(<Users />);

        // assertion
        // toBe()
        // toEqual()
        // toBeDefined() 
        // not.toBeDefined();
        expect(userSvc.getUsers).toHaveBeenCalled();
    });

    it("should render data returned from api call", async done => {
        userSvc.getUsers = jest.fn().mockResolvedValue({ data: [{ login: 'abc' }, { login: 'xyz' }] });

        const wrapper = mount(<Users />);
        await wait();
        wrapper.update();

        const elems = wrapper.find("h3");

        expect(elems).toHaveLength(2);
        done();
    });

    it("should show error message when there is an error from the api", async () => {
        userSvc.getUsers = jest.fn().mockRejectedValue({ error: "Failed" });

        const wrapper = mount(<Users />);
        await wait();
        wrapper.update();

        const elem = wrapper.find("span");

        expect(elem).toHaveLength(1);
        expect(elem.text()).toBe("Error occured while fetching data")
    });
});