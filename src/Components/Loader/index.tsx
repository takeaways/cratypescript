import * as React from 'react';
import * as Styles from './styles';

const Loader = () => {
	return (
		<Styles.LoaderBlock color="white" open={true}>
			<Styles.Spiner />
		</Styles.LoaderBlock>
	)
};

export default Loader;
