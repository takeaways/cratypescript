import { Http } from '../../Utiles/Axios';

export const Load = async () => {
	try {
		console.log(process.env.API_URL);
		const result = await Http.get(`/user`, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('User Service Error Load>> ', error);
		return Promise.reject(error);
	}
};

export const Login = async (auth: { userId: string; password: string }) => {
	try {
		const result = await Http.post(`/user/login`, auth, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('User Service Error Login>> ', error);
		return Promise.reject(error);
	}
};

export const Logout = async () => {
	try {
		const result = await Http.get(`/user/logout`, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('User Service Error Logout>> ', error);
		return Promise.reject(error);
	}
};

export const Signup = async (auth: {
	userId: string;
	password: string;
	passwordCheck: string;
	nickname: string;
}) => {
	try {
		const result = await Http.post(`${process.env.API_URL}/user`, auth);
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('User Service Error Signup>> ', error);
		return Promise.reject(error);
	}
};
