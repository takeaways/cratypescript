import * as React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Reducer/user/action"


export default () => {
    const dispatch = useDispatch();
    const login = React.useCallback((user) => dispatch(loginAction(user)), [dispatch])
    return login
}

