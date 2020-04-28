import { combineReducers } from 'redux';
import post from './post';
import { PostIntialStateTypes } from '../Types/ReducerTypes/postTypes';

const rootReducer = combineReducers({ post });
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
