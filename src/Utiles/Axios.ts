import axios from 'axios';
function getCookie(cookie_name: string) {
	var x, y;
	var val = document.cookie.split(';');

	for (var i = 0; i < val.length; i++) {
		x = val[i].substr(0, val[i].indexOf('='));
		y = val[i].substr(val[i].indexOf('=') + 1);
		x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
		if (x == cookie_name) {
			return unescape(y); // unescape로 디코딩 후 값 리턴
		}
	}
}

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
});

const params = {
	api_key: '53745ed1ba6c203b1ca1ace58d0a7e97',
	language: 'en-US'
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
				append_to_response: 'videos'
			}
		}),
	search: (term: string) =>
		api.get('search/movie', {
			params: {
				...params,
				query: encodeURIComponent(term)
			}
		})
};

export const Http = axios.create({
	baseURL: 'https://mydoc.geoniljang.com'
});

Http.interceptors.request.use(
	function (config) {
		const mgi = getCookie('mgi');
		if (mgi) {
			config.headers['GI-Key'] = mgi;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);
