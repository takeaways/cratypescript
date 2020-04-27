import styled from 'styled-components';
import { TextField, Button } from "@material-ui/core";

export const Container = styled.div`
    width:100%;
    height: calc(100vh - 50px);
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Form = styled.form`
    width:400px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:400px;
    margin: 0 auto;
    background-color:white;
    border-radius:15px;
    box-shadow: 5px 10px rgba(21,24,29,0.3);
`

export const Input = styled(TextField)`
    width:90%;
    margin-bottom:10px;
`
export const Btn = styled(Button)``
