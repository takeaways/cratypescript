import * as React from "react";
import { FunctionComponent } from "react";
import * as Styles from "./styles";
const LogIn: FunctionComponent = () => {
    return (
        <Styles.Container>
            <Styles.Form>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="id"> 아이디 </Styles.Label> <Styles.Input id="id" />
                </Styles.InputBlock>
                <Styles.InputBlock>
                    <Styles.Label htmlFor="pw"> 비밀번호 </Styles.Label><Styles.Input id="pw" type="password" />
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