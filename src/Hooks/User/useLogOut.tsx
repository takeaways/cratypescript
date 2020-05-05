
import * as React from "react";
import { useDispatch } from "react-redux";

import { logoutAction } from "../../Reducer/user/action"
import * as userService from "../../Services/User";
import * as Toast from "../../Utiles/Toast";


export default () => {
    const dispatch = useDispatch();
    const logOut = async () => {
        try {
            const result = await userService.Logout();
            if (result.message) Toast.Success(result.message)
            dispatch(logoutAction())
        } catch (error) {
            console.log(error)
        }
    }
    return logOut
}