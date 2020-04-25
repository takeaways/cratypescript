import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './styles';
import { PosterTypes } from './index.d';

const Poster: FunctionComponent<PosterTypes> = ({
	id,
	vote_average,
	poster_path,
	original_title,
	release_date,
}) => {
	return (
		<Link to={`/movie/${id}`}>
			<Styles.Container>
				<Styles.ImageContainer>
					<Styles.Image bgUrl={poster_path} />
					<Styles.Rating>{vote_average}/10</Styles.Rating>
				</Styles.ImageContainer>
				<Styles.Title>{original_title}</Styles.Title>
				<Styles.Year>
					{release_date && release_date.substring(0, 4)}
				</Styles.Year>
			</Styles.Container>
		</Link>
	);
};

export default Poster;
