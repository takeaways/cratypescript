import * as React from "react";
import { TodoFormTypes } from "../../Types/TodoTypes";
import Todo from "../../Components/Todo";
import { Item, List } from "../../Components/Todo/Item";
import { useTodoState } from "../../Contexts/TodoContext";



const TodoPresenter: React.FunctionComponent<TodoFormTypes> = ({ posts, value, onSubmit, onChange, onLike, onRemove }) => {

    return (
        <>
            <Todo
                value={value}
                onSubmit={onSubmit}
                onChange={onChange}
            />
            {posts && posts.length > 0 && onLike && onRemove && (
                <List>
                    {posts.map(t => <Item key={t.id} todo={t} onLike={onLike} onRemove={onRemove} />)}
                </List>
            )}
        </>)
}

export default TodoPresenter;