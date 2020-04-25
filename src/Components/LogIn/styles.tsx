import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height:calc(100vh - 50px);
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Form = styled.form`
    width:320px;
    height:180px;
    background-color:wheat;
    margin:0 auto;
    display:flex;
    border-radius:15px;
    
    justify-content:space-evenly;
  
    flex-direction:column;
    padding: 0 10px;

`
export const InputBlock = styled.p`
    display:flex;
    flex-direction:column
`
export const Label = styled.label`
    margin-bottom:3px;
`
export const Input = styled.input`
    font-size:1.2rem;
    padding-left:10px;
    color:rgba(0,0,0,0.7);
`
export const Submit = styled.button`
    height:30px;
    background-color:blanchedalmond;
    color:royalblue;
    cursor: pointer;
`

export const Text = styled(Link)`
      font-size:0.8rem;
      :hover{
          color:blue;
          text-decoration-line:underline;
      }
`