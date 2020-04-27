import styled from "styled-components";

export const List = styled.ul`
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content: center;
    align-items:center;
    margin-top: 25px;

	/* display: grid;
	grid-template-columns: repeat(auto-fill, 160px);
	grid-gap: 25px;     */
`
export const ListItem = styled.li`
    width:400px;
    height:160px;
    display:inline-block;
    background-color:white;
    border-radius:15px;
    margin-bottom:30px;
    font-size:15px;
    border:10px soild #862e9c;
    transition-duration: 500ms;
    &:hover{
        transform: translateY(-0.5em)
    }
`

export const ListTitle = styled.div`
    height:40px;
    border-bottom:5px solid #da77f2;
    text-align:center;
    line-height:40px;
    font-size:2em;
    color:#e599f7;
    overflow:hidden;
`;
export const ListBody = styled.p`
    height:80px;
    font-size:1.2em;
    padding:4px;
    overflow:auto;
    word-break:break-word;
`;
export const ListFooter = styled.div`
    height:40px;
    text-align:center;
    line-height:40px;
    border-top:3px solid #f783ac;
    
    & > span:last-child{
        border-bottom-right-radius:15px;
    }
    & > span:first-child{
        border-bottom-left-radius:15px;
    }
`;
export const ListText = styled.span<{ done?: boolean }>`
    font-size:1.3em;
    color:${props => props.done ? "green" : "#ff6b6b"};
    display:inline-block;
    width:100px;
    &:hover{
        cursor: pointer;
        background-color:#fcc2d7;
        color:${props => props.done ? "green" : "white"};
    };
    &:active{
        background-color:#f06595;
    };
    height:40px;
    box-sizing:border-box;
`;
