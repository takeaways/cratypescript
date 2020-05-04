import { SUCCESS_LOG_IN } from './actionNames';
import { User } from '.';

export const loginAction = (user: User) =>
	({
		type: SUCCESS_LOG_IN,
		data: user,
	} as const);
