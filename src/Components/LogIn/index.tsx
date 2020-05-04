import * as React from "react";
import * as Toast from "../../Utiles/Toast";
import * as userService from "../../Services/User";
import * as Styles from "./styles";

import useLogin from "../../Hooks/User/useLogin";


const LogIn: React.FunctionComponent = () => {

    const login = useLogin();

    //react state
    const [userId, setUserId] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    //event handler
    const onUserId = React.useCallback((e) => setUserId(e.target.value), []);
    const onPassword = React.useCallback((e) => setPassword(e.target.value), []);
    const onSubmit = React.useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId.trim()) return Toast.Warn("아이디를 입력해 주세요.");
        if (!password.trim()) return Toast.Warn("비밀번호을 입력해 주세요.");

        const res = await userService.Login({ userId, password });
        if (res.message) return Toast.Error(res.message);
        login(res)



    }, [userId, password])


    return (
        <Styles.Container>
            <Styles.Form onSubmit={onSubmit}>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="id"> 아이디 </Styles.Label>
                    <Styles.Input id="id" value={userId} onChange={onUserId} />
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="pw"> 비밀번호 </Styles.Label>
                    <Styles.Input id="pw" type="password" value={password} onChange={onPassword} />
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Text to="/">비밀번호를 잊어버리셨습니까?</Styles.Text>
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Submit>로그인</Styles.Submit>
                </Styles.InputBlock>
            </Styles.Form>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </Styles.Container>
    );
}

export default LogIn;