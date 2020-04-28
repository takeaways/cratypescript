import {
	PostActionTypes,
	PostIntialStateTypes
} from '../../Types/ReducerTypes/postTypes';

import {
	REQUEST_CREATE_POST,
	SUCCESS_CREATE_POST,
	FAILURE_CREATE_POST,
	REQUEST_DELETE_POST,
	SUCCESS_DELETE_POST,
	FAILURE_DELETE_POST,
	REQUEST_UPDATE_POST,
	SUCCESS_UPDATE_POST,
	FAILURE_UPDATE_POST
} from './actionNames';

export const intialState: PostIntialStateTypes = {
	posts: []
};

const postReducer = (state = intialState, action: PostActionTypes) => {
	switch (action.type) {
		case REQUEST_CREATE_POST: {
			const test = {
				id: state.posts.length,
				done: false,
				liked: false,
				...action.data
			};
			return {
				...state,
				posts: [test, ...state.posts]
			};
		}
		case SUCCESS_CREATE_POST: {
			return {
				...state
			};
		}
		case FAILURE_CREATE_POST: {
			return {
				...state
			};
		}
		case REQUEST_DELETE_POST: {
			const id = action.data.id;
			const filteredPosts = state.posts.filter((post) => post.id !== id);
			return {
				...state,
				posts: filteredPosts
			};
		}
		case SUCCESS_DELETE_POST: {
			return {
				...state
			};
		}
		case FAILURE_DELETE_POST: {
			return {
				...state
			};
		}
		case REQUEST_UPDATE_POST: {
			return {
				...state
			};
		}
		case SUCCESS_UPDATE_POST: {
			return {
				...state
			};
		}
		case FAILURE_UPDATE_POST: {
			return {
				...state
			};
		}
		default: {
			return state;
		}
	}
};

export default postReducer;
