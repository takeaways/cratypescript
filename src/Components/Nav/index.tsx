import * as React from "react";
import { FunctionComponent } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";

//material
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import * as Styles from "./styles";

import useUser from "../../Hooks/User/useGetUser"
import useLoadUser from "../../Hooks/User/useLoadUser"
import { User } from "../../Reducer/user";


const Nav: FunctionComponent<RouteComponentProps> = ({ location: { pathname } }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const user = useUser();
    const loadUser = useLoadUser();
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        loadUser();
    }, [])

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
                    {/* {(user as User).id && <span style={{ lineHeight: "50px", height: "50px" }}>{(user as User).nickname} 님 반갑습니다.</span>} */}
                    <Link to={"/"}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                    <Link to={"/todo"}><MenuItem onClick={handleClose}>Todo</MenuItem></Link>
                    {(user as User).id ? (
                        <div>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </div>
                    ) : (
                            <div>
                                <Link to={"/login"}><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                                <Link to={"/signup"}><MenuItem onClick={handleClose}>Signup</MenuItem></Link>
                            </div>
                        )}
                </Menu>
            </div>
            <Styles.HeaderBlock float={"left"} className="wide-top-menu">
                <Styles.List>
                    <Styles.ListItem current={pathname === "/"}>
                        <Styles.ListLink to={"/"}>Home</Styles.ListLink>
                    </Styles.ListItem>
                    <Styles.ListItem current={pathname === "/todo"}>
                        <Styles.ListLink to={"/todo"}>Todo</Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock id="logo">
                <Styles.List>
                    <Styles.ListItem>
                        <Styles.ListLink to={"/"} title="홈으로">
                            <img src="/gilogo.png" alt="logo" width="45px" />
                        </Styles.ListLink>
                    </Styles.ListItem>
                </Styles.List>
            </Styles.HeaderBlock>
            <Styles.HeaderBlock float={"right"} className="wide-top-menu">
                {(user as User).id && <span style={{ lineHeight: "50px", height: "50px" }}>{(user as User).nickname} 님 반갑습니다.</span>}
                <Styles.List>
                    {(user as User).id ? (
                        <>
                            <Styles.ListItem current={pathname === "/signup"}>
                                <Styles.ListLink to={"/login"}>Logout</Styles.ListLink>
                            </Styles.ListItem>
                        </>
                    ) : (
                            <>
                                <Styles.ListItem current={pathname === "/login"}>
                                    <Styles.ListLink to={"/login"}>LogIn</Styles.ListLink>
                                </Styles.ListItem>
                                <Styles.ListItem current={pathname === "/signup"}>
                                    <Styles.ListLink to={"/signup"}>SignUp</Styles.ListLink>
                                </Styles.ListItem>
                            </>
                        )}
                </Styles.List>
            </Styles.HeaderBlock>
        </Styles.Header>
    )
};

export default withRouter(Nav)
