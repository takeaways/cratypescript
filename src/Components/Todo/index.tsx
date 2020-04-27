import * as React from "react";
import { TodoFormTypes } from "../../Types/TodoTypes";
import * as Styles from "./styles";

const Todo: React.FunctionComponent<TodoFormTypes> = ({
    value,
    onChange,
    onSubmit
}) => {
    return (
        <Styles.Container>
            <Styles.TodoForm onSubmit={onSubmit}>
                <Styles.TodoItem>
                    <Styles.Input
                        id="todo"
                        placeholder="What are you going to do?"
                        value={value}
                        onChange={onChange} />
                </Styles.TodoItem>
                <Styles.TodoItem>
                    <Styles.Button>등록</Styles.Button>
                </Styles.TodoItem>
            </Styles.TodoForm>
        </Styles.Container>

    )
}

export default Todo;