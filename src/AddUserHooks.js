import React, { useRef, useEffect } from "react";


const AddUserWithHooks = ({ }) => {

    const loginInput = useRef(null);

    useEffect(() => {
        loginInput.current.focus();
        console.log(loginInput.current.value);
    }, [])


    return <>
        <h1>Add User</h1>
        <div>
            <div>
                <input ref={loginInput} name="login" type="text"
                    placeholder="login" value="dummy" />
            </div>
            <div>
                <input name="firstname" type="text"
                    placeholder="first name" />
            </div>
            <div>
                <input name="lastname" type="text"
                    placeholder="last name" />
            </div>
            <div>
                <input type="submit" value="Save" />
            </div>
        </div>
    </>
}


export default AddUserWithHooks;