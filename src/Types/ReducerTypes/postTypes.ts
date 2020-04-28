import {
	REQUEST_CREATE_POST,
	FAILURE_CREATE_POST,
	SUCCESS_CREATE_POST,
	REQUEST_DELETE_POST,
	SUCCESS_DELETE_POST,
	FAILURE_DELETE_POST,
	REQUEST_UPDATE_POST,
	SUCCESS_UPDATE_POST,
	FAILURE_UPDATE_POST
} from '../../Reducer/post/actionNames';

export type PostTypes = {
	id: number;
	text: string;
	auth: string;
	done: boolean;
	liked: boolean;
};

export type PostIntialStateTypes = {
	posts: PostTypes[];
};

export type PostActionTypes =
	| {
			type: typeof REQUEST_CREATE_POST;
			data: {
				text: string;
				auth: string;
			};
	  }
	| {
			type: typeof SUCCESS_CREATE_POST;
			data: {
				id: number;
				text: string;
				auth: string;
				done: boolean;
				liked: boolean;
			};
	  }
	| {
			type: typeof FAILURE_CREATE_POST;
			data: {
				id: number;
			};
	  }
	| {
			type: typeof REQUEST_DELETE_POST;
			data: {
				id: number;
			};
	  }
	| {
			type: typeof SUCCESS_DELETE_POST;
			data: {
				id: number;
			};
	  }
	| {
			type: typeof FAILURE_DELETE_POST;
			data: {
				id: number;
			};
	  }
	| {
			type: typeof REQUEST_UPDATE_POST;
			data: {
				id: number;
				text: string;
			};
	  }
	| {
			type: typeof SUCCESS_UPDATE_POST;
			data: {
				id: number;
			};
	  }
	| {
			type: typeof FAILURE_UPDATE_POST;
			data: {
				id: number;
			};
	  };
