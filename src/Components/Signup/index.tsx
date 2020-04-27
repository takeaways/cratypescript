import * as React from "react";
import * as Styles from "./styles";

const SignUp: React.FunctionComponent = () => {
    return (
        <Styles.Container>
            <Styles.Form noValidate autoComplete="off">
                <Styles.Input label="Email" variant="outlined"></Styles.Input>
                <Styles.Input label="NickName" variant="outlined"></Styles.Input>
                <Styles.Input label="Password" variant="outlined"></Styles.Input>
                <Styles.Input label="Password Confirm" variant="outlined"></Styles.Input>
                <Styles.Btn variant="contained" color="primary">SignUp</Styles.Btn>
            </Styles.Form>
        </Styles.Container>
    )
}

export default SignUp;