import * as React from "react";
import { FunctionComponent } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";

//material
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import * as Styles from "./styles";

const Nav: FunctionComponent<RouteComponentProps> = ({ location: { pathname } }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Styles.Header>
            <div id="small-top-menu" style={{ display: 'none' }}>
                <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color: "white" }} onClick={handleClick}>
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><Link to={"/"}>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={"/translate"}>Translate</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={"/todo"}>Todo</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={"/login"}>Login</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to={"/signup"}>Signup</Link></MenuItem>
                </Menu>
            </div>
            <Styles.HeaderBlock float={"left"} className="wide-top-menu">
                <Styles.List>
                    <Styles.ListItem current={pathname === "/"}>
                        <Styles.ListLink to={"/"}>Home</Styles.ListLink>
                    </Styles.ListItem>
                    <Styles.ListItem current={pathname === "/translate"}>
                        <Styles.ListLink to={"/translate"}>Translate</Styles.ListLink>
                    </Styles.ListItem>
                    <Styles.ListItem current={pathname === "/todo"}>
                        <Styles.ListLink to={"/todo"}>Todo</Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock id="logo">
                <Styles.List>
                    <Styles.ListItem>
                        <Styles.ListLink to={"/"}>
                            <img src="/gilogo.png" alt="logo" width="45px" />
                        </Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock float={"right"} className="wide-top-menu">
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
