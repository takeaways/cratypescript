import * as React from "react";
import { TodoFormTypes } from "../../Types/TodoTypes";
import Todo from "../../Components/Todo";
import { Item, List } from "../../Components/Todo/Item";
import { useTodoState } from "../../Contexts/TodoContext";



const TodoPresenter: React.FunctionComponent<TodoFormTypes> = ({ value, onSubmit, onChange, onToggle, onRemove }) => {
    const todos = useTodoState();
    return (
        <>
            <Todo
                value={value}
                onSubmit={onSubmit}
                onChange={onChange}
            />
            {todos.length > 0 && onToggle && onRemove && (
                <List>
                    {todos.map(t => <Item key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />)}
                </List>
            )}
        </>)
}

export default TodoPresenter;