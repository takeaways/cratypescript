import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
	autoClose: 2500,
	draggable: true,
});

export const Plain = (text: string) => {
	toast(text, {
		closeButton: false,
	});
};

export const Error = (text: string) => {
	toast.error(text, {
		closeButton: false,
	});
};

export const Success = (text: string) => {
	toast.success(text, {
		closeButton: false,
	});
};

export const Warn = (text: string) => {
	toast.warn(text, {
		closeButton: false,
	});
};

export const Info = (text: string) => {
	toast.info(text, {
		closeButton: false,
	});
};
