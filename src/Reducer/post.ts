type Action =
	| {
			type: 'CREATE';
			data: {
				text: string;
				auth: string;
			};
	  }
	| {
			type: 'DELETE';
			data: {
				id: string;
			};
	  }
	| {
			type: 'UPDATE';
			data: {
				id: string;
				auth: string;
				text: string;
			};
	  };

type todo = {
	auth: string;
	text: string;
	id: string;
};
export const intialState = {
	todos: []
};

const todoReducer = (state = intialState, action: Action) => {
	switch (action.type) {
		case 'CREATE': {
			return {
				...state
			};
		}
		case 'DELETE': {
			return {
				...state
			};
		}
		case 'UPDATE': {
			return {
				...state
			};
		}
		default: {
			return state;
		}
	}
};

export default todoReducer;
