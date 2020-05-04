import { combineReducers } from 'redux';
import post from './post';
import user from './user';

const rootReducer = combineReducers({ post, user });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
