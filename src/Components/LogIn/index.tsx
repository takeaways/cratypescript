import * as React from "react";
import { FunctionComponent } from "react";
import * as Styles from "./styles";
import { LogInTypes } from "../../Pages/LogIn/index.d"
const LogIn: FunctionComponent<LogInTypes> = ({
    userId,
    userPw,
    onChangeId,
    onChangePw,
    onSubmit }) => {
    return (
        <Styles.Container>
            <Styles.Form onSubmit={onSubmit}>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="id"> 아이디 </Styles.Label>
                    <Styles.Input id="id" value={userId} onChange={onChangeId} />
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="pw"> 비밀번호 </Styles.Label>
                    <Styles.Input id="pw" type="password" value={userPw} onChange={onChangePw} />
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Text to="/">비밀번호를 잊어버리셨습니까?</Styles.Text>
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Submit>로그인</Styles.Submit>
                </Styles.InputBlock>
            </Styles.Form>
        </Styles.Container>
    );
}

export default LogIn;