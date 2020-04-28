import * as React from 'react';
import { FunctionComponent } from 'react';
import { HomePresenterTypes } from './index.d';

import Section from '../../Components/Section';
import Poster from '../../Components/Poster';
import Loader from '../../Components/Loader';


const HomePresenter: FunctionComponent<HomePresenterTypes> = ({
	nowPlaying,
	upcoming,
	popular,
	error,
	loading,
}) => {
	return loading ? (<Loader />
	) : (
			<div>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title={'Now Playing'}>
						{nowPlaying.map((movie: any) => (
							<Poster
								key={movie.id}
								id={movie.id}
								vote_average={movie.vote_average}
								poster_path={movie.poster_path}
								original_title={movie.original_title}
								release_date={movie.release_date}
							/>
						))}
					</Section>
				)}
				{upcoming && upcoming.length > 0 && (
					<Section title={'Now Playing'}>
						{upcoming.map((movie: any) => (
							<Poster
								key={movie.id}
								id={movie.id}
								vote_average={movie.vote_average}
								poster_path={movie.poster_path}
								original_title={movie.original_title}
								release_date={movie.release_date}
							/>
						))}
					</Section>
				)}
				{popular && popular.length > 0 && (
					<Section title={'Now Playing'}>
						{popular.map((movie: any) => (
							<Poster
								key={movie.id}
								id={movie.id}
								vote_average={movie.vote_average}
								poster_path={movie.poster_path}
								original_title={movie.original_title}
								release_date={movie.release_date}
							/>
						))}
					</Section>
				)}
			</div>
		);
};

export default HomePresenter;
