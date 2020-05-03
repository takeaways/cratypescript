import * as React from "react";
import { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import LogInPresenter from "./LogInPresenter"

import { Http } from "../../Utiles/Axios";

const LogInContainer = () => {

    const history = useHistory();
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const onChangeId = useCallback((e) => setUserId(e.target.value), []);
    const onChangePw = useCallback((e) => setUserPw(e.target.value), []);
    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const res = await Http.post("/user/login", { userId, password: userPw }, { withCredentials: true });
            console.log(res.data)
            if (res.data.nickname) {
                alert("로그인 되었습니다.");
                history.goBack();
            }


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