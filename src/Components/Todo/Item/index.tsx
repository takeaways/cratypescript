import * as React from "react";
import * as Styles from "./styles";
import { TodoItemProps } from "../../../Types/TodoTypes";
import { MdDelete, MdDone, MdFavorite, MdModeEdit, MdFavoriteBorder } from "react-icons/md";
import Editor from "../Edit";


export const Item: React.FunctionComponent<TodoItemProps> = ({ todo, onLike, onRemove }) => {

    const [show, setShow] = React.useState<boolean>(true);

    const onShow = React.useCallback(() => { setShow(prev => !prev) }, [])
    return (
        <Styles.ListItem>
            <Styles.ListTitle>{todo.auth}</Styles.ListTitle>
            <Styles.ListBody>{show ? todo.text : <Editor text={todo.text} id={todo.id} setShow={setShow} />}</Styles.ListBody>
            <Styles.ListFooter>
                <Styles.ListText title="삭제" onClick={() => { onRemove(todo.id) }}><MdDelete /></Styles.ListText>
                <Styles.ListText title="좋아요" onClick={() => { onLike(todo.id) }} >{todo.liked ? <MdFavorite /> : <MdFavoriteBorder />}</Styles.ListText>
                <Styles.ListText title="완료" done={todo.done}><MdDone /></Styles.ListText>
                <Styles.ListText title="수정" onClick={() => { onShow() }}><MdModeEdit /></Styles.ListText>
            </Styles.ListFooter>
        </Styles.ListItem>
    )
}
export const List: React.FunctionComponent = ({ children }) => {
    return (
        <Styles.List>
            {children}
        </Styles.List>

    )
}



export default Item;