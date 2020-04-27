import * as React from "react";
import { FunctionComponent } from "react";

import { LogInTypes } from "./index.d"
import LogIn from "../../Components/LogIn";

const LogInPresenter: FunctionComponent<LogInTypes> = ({
    userId,
    userPw,
    onChangeId,
    onChangePw,
    onSubmit
}) => <LogIn
        userId={userId}
        userPw={userPw}
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onSubmit={onSubmit}
    />

export default LogInPresenter;