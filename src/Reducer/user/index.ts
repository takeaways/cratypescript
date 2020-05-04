import { SUCCESS_LOG_IN } from './actionNames';
import { UserActionTypes } from './types';

export type User = {
	id: number;
	nickname: string;
	userId: string;
	createdAt: string;
	updatedAt: string;
	Posts: string[];
	Followings: string[];
	Followers: string[];
};

interface initialStateType {
	user: User | {};
}

const initialState: initialStateType = {
	user: {},
};

export default (
	state: initialStateType = initialState,
	action: UserActionTypes
): initialStateType => {
	switch (action.type) {
		case SUCCESS_LOG_IN: {
			return {
				...state,
				user: action.data,
			};
		}
		default:
			return state;
	}
};
