import * as React from "react";

import * as Styles from "./styles";
import { MdAddCircle } from "react-icons/md";

const Todo: React.FunctionComponent<any> = ({
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
                    <Styles.Button><MdAddCircle /></Styles.Button>
                </Styles.TodoItem>
            </Styles.TodoForm>
        </Styles.Container>

    )
}

export default Todo;