import { createStore, combineReducers } from 'redux';
import todo from './post';

const rootReducer = combineReducers({ todo });
export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
