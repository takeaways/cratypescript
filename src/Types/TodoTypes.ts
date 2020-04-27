import * as React from 'react';

export interface TodoFormTypes {
	value: string;
	onSubmit: (e: React.FormEvent) => void;
	onChange: (e: React.ChangeEvent) => void;
	onToggle?: (id: number) => void;
	onRemove?: (id: number) => void;
}

// export interface TodoFormTypes {
// 	value: string;
// 	onSubmit: (e: React.FormEvent) => void;
// 	onChange: (e: React.ChangeEvent) => void;

// }

export interface TodoItemProps {
	todo: TodoTypes;
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
}

export type TodoTypes = {
	id: number;
	text: string;
	done: boolean;
	liked: boolean;
	auth: string;
};

export type TodoState = TodoTypes[];
export type TodoAction =
	| {
			type: 'CREATE';
			data: {
				text: string;
			};
	  }
	| {
			type: 'TOGGLE';
			data: {
				id: number;
			};
	  }
	| {
			type: 'REMOVE';
			data: {
				id: number;
			};
	  };

export type TodoDispatch = React.Dispatch<TodoAction>;
