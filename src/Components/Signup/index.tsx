import * as React from "react";
import { useHistory } from 'react-router-dom';

import * as Styles from "./styles";
import * as SignUpCheck from "../../Utiles/SignUp";
import * as userService from "../../Services/User";
import * as Toast from "../../Utiles/Toast";


const SignUp: React.FunctionComponent = () => {
    const history = useHistory();
    //react state
    const [userId, setUserId] = React.useState<string>("");
    const [nickname, setNickname] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [checkPassword, setCheckPassword] = React.useState<string>("");


    //event handler
    const onUserId = React.useCallback((e) => setUserId(e.target.value), []);
    const onUserNickname = React.useCallback((e) => setNickname(e.target.value), []);
    const onUserPassword = React.useCallback((e) => setPassword(e.target.value), []);
    const onUserCheckPassword = React.useCallback((e) => setCheckPassword(e.target.value), []);
    const onSubmit = React.useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (SignUpCheck.checkUserId(userId)) return
        if (SignUpCheck.checkNickname(nickname)) return
        if (SignUpCheck.checkPassword(password)) return
        if (SignUpCheck.comparePassword(password, checkPassword)) return

        const res = await userService.Signup({ userId, nickname, password, passwordCheck: checkPassword });
        if (res.message) return Toast.Error(res.message);
        Toast.Success("회원 가입을 축하합니다 😍");
        setTimeout(() => {
            history.push("/login")
        }, 500);
    }, [userId, nickname, password, checkPassword]);

    return (
        <Styles.Container>
            <Styles.Form noValidate autoComplete="off" onSubmit={onSubmit}>
                <Styles.Input label="ID" variant="outlined" value={userId} onChange={onUserId} required></Styles.Input>
                <Styles.Input label="NickName" variant="outlined" value={nickname} onChange={onUserNickname} required></Styles.Input>
                <Styles.Input label="Password" variant="outlined" type="password" value={password} onChange={onUserPassword} required></Styles.Input>
                <Styles.Input label="Password Confirm" variant="outlined" type="password" value={checkPassword} onChange={onUserCheckPassword} required></Styles.Input>
                <Styles.Btn variant="contained" color="primary" type="submit">SignUp</Styles.Btn>
            </Styles.Form>
        </Styles.Container>
    )
}

export default SignUp;