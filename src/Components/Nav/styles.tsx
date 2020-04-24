import styled from "styled-components";
import {Link} from "react-router-dom";

import {RouteTypes, HeaderBlockTypes} from "./index.d"

export const Header = styled.header`
  color:white;
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(44,53,68, 1);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);;
  padding:0px 10px;
`;

export const HeaderBlock = styled.div<HeaderBlockTypes>`
  display: flex;
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: ${props => props.float === "right" ? "flex-end" : props.float === "left" ? "flex-start" : "center" }
`;

export const List = styled.ul`
  display: flex;
  justify-content: right;
`;

export const ListItem = styled.li<RouteTypes>`
  width: 50px;
  margin:0px 10px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"}; 
  transition: border-bottom 0.3s ease-in-out;
`;

export const ListLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//${(props) => (props.current ? '#3498db' : 'transparent')};