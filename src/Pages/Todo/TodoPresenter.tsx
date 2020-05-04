import * as React from "react";

import Todo from "../../Components/Todo";
import { Item, List } from "../../Components/Todo/Item";

const TodoPresenter: React.FunctionComponent<any> = ({ posts, value, onSubmit, onChange, onLike, onRemove }) => {

    return (
        <>
            <Todo
                value={value}
                onSubmit={onSubmit}
                onChange={onChange}
            />
            {posts && posts.length > 0 && onLike && onRemove && (
                <List>
                    {posts.map((t: any) => <Item key={t.id} todo={t} onLike={onLike} onRemove={onRemove} />)}
                </List>
            )}
        </>)
}

export default TodoPresenter;