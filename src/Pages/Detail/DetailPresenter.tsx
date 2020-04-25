import * as React from 'react';
import { FunctionComponent } from 'react';

import DetailComponent from '../../Components/Detail';
import Loader from '../../Components/Loader';

const DetailPresender: FunctionComponent<any> = ({
	result,
	error,
	loading,
}) => {
	console.log(result);

	return loading ? <Loader /> : <DetailComponent result={result} />;
};

export default DetailPresender;
