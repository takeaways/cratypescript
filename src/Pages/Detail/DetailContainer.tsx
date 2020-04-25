import * as React from 'react';
import { useState, useEffect, FunctionComponent } from 'react';

import DetailPresender from './DetailPresenter';
import { moviesApi } from '../../Utiles/Axios';
import { RouteComponentProps } from 'react-router-dom';
import { RouteComponentPropsWithId } from './index.d';

const DetailContainer: FunctionComponent<RouteComponentProps<
	RouteComponentPropsWithId
>> = ({
	match: {
		params: { id },
	},
	history: { push },
	location: { pathname },
}) => {
	const [result, setResult] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setLoading(true);
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) return push('/');
		try {
			(async () => {
				const { data } = await moviesApi.movieDetail(id);
				setResult(data);
			})();
		} catch {
			setError("Can't find anythings..");
		} finally {
			setLoading(false);
		}
	}, []);

	return (
		result && (
			<DetailPresender result={result} error={error} loading={loading} />
		)
	);
};

export default DetailContainer;
