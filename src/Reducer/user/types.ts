import { REQUEST_LOG_IN, SUCCESS_LOG_IN, FAILURE_LOG_IN } from './actionNames';

export type UserTypes = {
	id: number;
	nickname: string;
	userId: string;
	password?: string;
	createdAt: string;
	updatedAt: string;
};

export interface UserInitailStateTypes {
	user?: UserTypes;
}

export type UserActionTypes =
	| {
			type: typeof REQUEST_LOG_IN;
	  }
	| {
			type: typeof SUCCESS_LOG_IN;
			data: {
				user: UserTypes;
			};
	  }
	| {
			type: typeof FAILURE_LOG_IN;
	  };
