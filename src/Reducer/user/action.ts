import { SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from './actionNames';
import { User } from '.';

export const loginAction = (user: User) =>
	({
		type: SUCCESS_LOG_IN,
		data: user,
	} as const);

export const logoutAction = () =>
	({
		type: SUCCESS_LOG_OUT,
	} as const);
