import * as React from "react";
import { useState, useCallback } from 'react';
import LogInPresenter from "./LogInPresenter"

import { Http } from "../../Utiles/Axios";

const LogInContainer = () => {

    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const onChangeId = useCallback((e) => setUserId(e.target.value), []);
    const onChangePw = useCallback((e) => setUserPw(e.target.value), []);
    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const { data: { result: { data: { token }, message } } } = await Http.post("/auth/login", { userId, userPassword: userPw });
            if (message) {
                alert(message)
            }
            document.cookie = `mgi=${token}`;

        } catch (e) {
            console.log(e)
        }
    }, [userId, userPw])



    return < LogInPresenter
        userId={userId}
        userPw={userPw}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onSubmit={onSubmit}
    />
}

export default LogInContainer;