
import * as React from "react";
import { useDispatch } from "react-redux";

import { loginAction } from "../../Reducer/user/action"
import * as userService from "../../Services/User";

export default () => {
    const dispatch = useDispatch();

    const loadMember = async () => {
        try {
            const result = await userService.Load();
            dispatch(loginAction(result))
        } catch (error) {
            console.log(error)
        }
    }
    return loadMember
}






