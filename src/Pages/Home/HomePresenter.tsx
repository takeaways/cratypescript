import * as React from "react";
import {FunctionComponent} from "react";

import {HomePresenterTypes} from "./index.d";


import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const HomePresenter: FunctionComponent<HomePresenterTypes> = ({nowPlaying, upcoming, popular, error, loading}) => {


    return loading ? (<div>Hello world</div>) : (<div>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title={'Now Playing'}>
                {nowPlaying.map((movie:any) => (
                    // <Poster />
                    <div>{movie.title}</div>
                ))}
            </Section>
        )}
    </div>)

};

export default HomePresenter;