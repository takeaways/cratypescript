import * as React from "react";
import { createContext, FunctionComponent, ReactNode, useReducer, useContext } from 'react';
import { TodoState, TodoDispatch, TodoAction } from "../Types/TodoTypes";


const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

const todosReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'CREATE': {
            const nextId = state.length + 1;
            return state.concat({
                id: nextId,
                text: action.data.text,
                done: false,
                auth: 'me',
                liked: false
            });
        }
        case 'TOGGLE': {
            return state.map(todo => todo.id === action.data.id ? { ...todo, done: !todo.done } : todo);
        }
        case 'REMOVE': {
            return state.filter(todo => todo.id !== action.data.id);
        }
        default: {
            throw new Error('Unhandled action');
        }
    }
}

export const TodoContextProvider: FunctionComponent<ReactNode> = ({ children }) => {

    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1,
            text: 'Context API 배우기',
            done: true,
            liked: false,
            auth: 'Me'
        },
    ]);


    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todos}>
                {children}
            </TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    )
}

export const useTodoState = () => {
    const state = useContext(TodoStateContext);
    if (!state) throw new Error('TodosProvier not Found');
    return state;

}
export const useTodoDispatch = () => {
    const dispatch = useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('TodoProvider not Found');
    return dispatch;
}

