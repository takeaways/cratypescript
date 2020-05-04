import { Http } from '../../Utiles/Axios';

export const LoadPosts = async () => {
	try {
		const result = await Http.get(``);
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('Post Service Error Load >> ', error);
		return Promise.reject(error);
	}
};

export const CreatePost = async (post: { content: string }) => {
	try {
		const result = await Http.post(``, post, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('Post Service Error Load >> ', error);
		return Promise.reject(error);
	}
};

export const UpdatePost = async (post: { content: string }) => {
	try {
		const result = await Http.put(``, post, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('Post Service Error Load >> ', error);
		return Promise.reject(error);
	}
};

export const DeletePost = async () => {
	try {
		const result = await Http.delete(``, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('Post Service Error Load >> ', error);
		return Promise.reject(error);
	}
};

export const LoadPost = async () => {
	try {
		const result = await Http.get(``, {
			withCredentials: true,
		});
		return Promise.resolve(result.data);
	} catch (error) {
		console.log('Post Service Error Load >> ', error);
		return Promise.reject(error);
	}
};
