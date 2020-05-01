import Axios from "axios";

function getUsers() {
    return Axios.get("https://api.github.com/users");
}

function addUser(user) {
    return Axios.post("https://api.github.com/users", user);
}


export { getUsers, addUser };