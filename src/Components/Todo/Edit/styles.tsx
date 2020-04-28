import styled from 'styled-components';

export const EditForm = styled.form`
    height:72px;
    margin:0;
    padding:0;
    box-sizing:border-box;
    position:relative;
`
export const Editor = styled.textarea`
    height:72px;
    overflow:auto;
    width:100%;
    resize:none;
    padding-right:20px;
`;

export const Save = styled.span`
    position:absolute;
    left:calc(400px - 26px);
    color: #b197fc;
    &:hover{
        cursor: pointer;
        color:#e5dbff;
    }
    &:active{
        color:#7950f2;
        
    }

`