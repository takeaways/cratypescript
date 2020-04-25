import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

const params = {
	api_key: '53745ed1ba6c203b1ca1ace58d0a7e97',
	language: 'en-US',
};

export const moviesApi = {
	nowPlaying: () => {
		return api.get('movie/now_playing', { params });
	},
	upcoming: () => api.get('movie/upcoming', { params }),
	popular: () => api.get('movie/popular', { params }),
	movieDetail: (id: string) =>
		api.get(`movie/${id}`, {
			params: {
				...params,
				append_to_response: 'videos',
			},
		}),
	search: (term: string) =>
		api.get('search/movie', {
			params: {
				...params,
				query: encodeURIComponent(term),
			},
		}),
};
