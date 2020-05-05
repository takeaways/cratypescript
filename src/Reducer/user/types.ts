import * as userAction from './action';

export type UserActionTypes =
	| ReturnType<typeof userAction.loginAction>
	| ReturnType<typeof userAction.logoutAction>;
