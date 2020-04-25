import * as React from 'react';
import { FunctionComponent } from 'react';
import * as Styles from './styles';

const DetailComponent: FunctionComponent<any> = ({ result }) => {
	return (
		<Styles.Cotainer>
			<Styles.Backdrop
				bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
			/>
			<Styles.Content>
				<Styles.Cover
					bgImage={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
				/>
				<Styles.Data>
					<Styles.Title>{result.original_title}</Styles.Title>
					<Styles.ItemContainer>
						<Styles.Item>{result.release_date.substring(0, 4)}</Styles.Item>
						<Styles.Divier>*</Styles.Divier>
						<Styles.Item>{result.runtime && result.runtime} Min</Styles.Item>
						<Styles.Divier>*</Styles.Divier>
						{result.genres &&
							result.genres.map((g: any, i: number) =>
								i === result.genres.length - 1 ? g.name : `${g.name} / `
							)}
					</Styles.ItemContainer>
					<Styles.Overview>{result.overview}</Styles.Overview>
				</Styles.Data>
			</Styles.Content>
		</Styles.Cotainer>
	);
};

export default DetailComponent;
