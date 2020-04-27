import * as React from "react";
import { useState, useCallback } from 'react';
import LogInPresenter from "./LogInPresenter"


const LogInContainer = () => {

    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const onChangeId = useCallback((e) => setUserId(e.target.value), []);
    const onChangePw = useCallback((e) => setUserPw(e.target.value), []);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(userId, userPw);
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