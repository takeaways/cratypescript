import { REQUEST_LOG_IN, SUCCESS_LOG_IN, FAILURE_LOG_IN } from './actionNames';
import { UserInitailStateTypes, UserActionTypes } from './types';

export const initialState: UserInitailStateTypes = {
	user: undefined
};

const userReducer = (
	state = initialState,
	action: UserActionTypes
): UserInitailStateTypes => {
	switch (action.type) {
		case REQUEST_LOG_IN: {
			return { ...state };
		}
		case SUCCESS_LOG_IN: {
			console.log('--> ', action.data);
			return {
				...state,
				user: action.data.user
			};
		}
		case FAILURE_LOG_IN: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};

export default userReducer;
