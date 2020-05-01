import { getUsers, addUser } from "../src/UserService";
import axios from "axios";

describe("User Service", () => {
    axios.get = jest.fn();
    axios.post = jest.fn();

    it("should make an api call", () => {
        getUsers();

        expect(axios.get).toHaveBeenCalledWith("https://api.github.com/users");
    });

    it("should make a post request", () => {
        const user = { login: 'abc', name: "xyz" };
        addUser(user);

        expect(axios.post).
            toHaveBeenCalledWith("https://api.github.com/users", user);
    });
});