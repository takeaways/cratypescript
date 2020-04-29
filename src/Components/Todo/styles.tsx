import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    padding-top:30px;
`
export const TodoForm = styled.form`
    width:400px;
    height:150px;
    margin:0 auto;
`
export const TodoItem = styled.p`
    margin:0;
    padding:0;
    width:320px;
`
export const Input = styled.textarea`
    resize:none;
    width:400px;
    height:120px;
    padding-left:16px;
    padding-right:16px;
    padding-top: 5px;
    font-size:1.0rem;
    color:rgba(0,0,0,0.7);
    margin:0;
    border-radius:15px 15px 0 0;
    border:0;
    outline:none;
    
    &::-webkit-scrollbar {
        width: 15px;
        border-radius:15px;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
        border-top-right-radius:15px 15px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #a5d8ff;
        outline: 1px solid slategrey;
        border-top-right-radius:15px 15px;
    }

`
export const Button = styled.button`
    width:400px;
    height:30px;
    background-color:#e599f7;
    color:oldlace;
    font-size:1.7rem;
    border-radius: 0 0 15px 15px;
    outline:none;
    border:0;
    margin-bottom:0;
    & svg {
            transition:transform 0.5s ease-in-out;
            transform:rotate(-180deg);
        }
   
    &:hover{
        cursor: pointer;
        & svg {
            transition:transform 1s ease-in-out;
            transform:rotate(180deg);
        }
    };
    &:active{
        background-color: #cc5de8;
    }
    &:focus{
        outline:none;
    }
`
