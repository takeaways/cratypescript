import * as React from "react";
import {FunctionComponent} from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

import * as Styles from "./styles";

const Nav: FunctionComponent<RouteComponentProps> = ({location: {pathname}}) => {
    console.log(pathname);
    return (
        <Styles.Header>
            <Styles.HeaderBlock float={"left"}>
                <Styles.List>
                    <Styles.ListItem current={pathname === "/"}>
                        <Styles.ListLink to={"/"}>Home</Styles.ListLink>
                    </Styles.ListItem>
                    <Styles.ListItem current={pathname === "/search"}>
                        <Styles.ListLink to={"/search"}>Search</Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock>
                <Styles.List>
                    <Styles.ListItem>
                        <Styles.ListLink to={"/"}>LOGO</Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock float={"right"}>
                <Styles.List>
                    <Styles.ListItem current={pathname === "/login"}>
                        <Styles.ListLink to={"/login"}>LogIn</Styles.ListLink>
                    </Styles.ListItem>
                    <Styles.ListItem current={pathname === "/signup"}>
                        <Styles.ListLink to={"/signup"}>SignUp</Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
        </Styles.Header>
    )
};

export default withRouter(Nav)
