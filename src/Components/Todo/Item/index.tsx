import * as React from "react";
import * as Styles from "./styles";
import { TodoItemProps } from "../../../Types/TodoTypes";
import { MdDelete, MdDone, MdFavorite, MdModeEdit, MdFavoriteBorder } from "react-icons/md";


export const Item: React.FunctionComponent<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
    return (
        <Styles.ListItem>
            <Styles.ListTitle>{todo.auth}</Styles.ListTitle>
            <Styles.ListBody>{todo.text}</Styles.ListBody>
            <Styles.ListFooter>
                <Styles.ListText onClick={() => { onRemove(todo.id) }}><MdDelete /></Styles.ListText>
                <Styles.ListText><MdFavorite /></Styles.ListText>
                <Styles.ListText onClick={() => { onToggle(todo.id) }} done={todo.done}><MdDone /></Styles.ListText>
                <Styles.ListText><MdModeEdit /></Styles.ListText>
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