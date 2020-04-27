import * as React from "react";

import TodoPresenter from "./TodoPresenter";
import { useTodoDispatch } from "../../Contexts/TodoContext";
import { Http } from "../../Utiles/Axios";
import { useDispatch } from "react-redux";

const TodoContainer = () => {
    const [value, setValue] = React.useState('');
    const dispatch = useTodoDispatch();
    const text = useDispatch();
    const onSubmit = React.useCallback((e: React.FormEvent) => {
        e.preventDefault();
        text({
            type: 'CREATE',
            data: {
                text: value
            }
        })
        dispatch({
            type: 'CREATE',
            data: {
                text: value
            }
        })
        setValue('');
    }, [value]);
    const onChange = React.useCallback((e) => setValue(e.target.value), []);
    const onToggle = React.useCallback((id) => {
        dispatch({
            type: 'TOGGLE',
            data: {
                id,
            }
        })
    }, [])
    const onRemove = React.useCallback((id) => {
        dispatch({
            type: 'REMOVE',
            data: {
                id,
            }
        })
    }, [])

    React.useEffect(() => {
        (async () => {
            const response = await Http.get("https://mydoc.geoniljang.com/board")
            console.log(response)
        })();

    }, [])


    return <TodoPresenter
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        onToggle={onToggle}
        onRemove={onRemove}
    />
}

export default TodoContainer;