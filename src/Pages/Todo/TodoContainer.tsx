import * as React from "react";

import TodoPresenter from "./TodoPresenter";
import { Http } from "../../Utiles/Axios";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_CREATE_POST, REQUEST_DELETE_POST, REQUEST_GET_POSTS } from "../../Reducer/post/actionNames";
import { RootState } from "../../Reducer";

const TodoContainer = () => {
    const posts = useSelector((state: RootState) => state.post.posts);
    const dispatch = useDispatch();

    const [value, setValue] = React.useState('');

    //events handlers
    const onChange = React.useCallback((e) => setValue(e.target.value), []);

    const onSubmit = React.useCallback((e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: REQUEST_CREATE_POST,
            data: {
                text: value,
                auth: "Me"
            }
        })
        setValue('');
    }, [value]);

    const onRemove = React.useCallback((id) => {
        dispatch({
            type: REQUEST_DELETE_POST,
            data: {
                id,
            }
        })
    }, []);



    const onToggle = React.useCallback((id) => {
        dispatch({
            type: 'TOGGLE',
            data: {
                id,
            }
        })
    }, [])


    React.useEffect(() => {
        (async () => {
            const response = await Http.get("https://mydoc.geoniljang.com/board")
            dispatch({
                type: REQUEST_GET_POSTS
            })
        })();

    }, [])



    return <TodoPresenter
        posts={posts}
        value={value}
        onSubmit={onSubmit}
        onChange={onChange}
        onToggle={onToggle}
        onRemove={onRemove}
    />
}

export default TodoContainer;