import * as React from "react";
import {useEffect, useState, useCallback} from "react";


import HomePresenter from "./HomePresenter"
import {moviesApi} from "../../Utiles/Axios";

const HomeContainer = () => {

    const [nowPlaying, setNowPlaying] = useState<any>([]);
    const [upcoming, setUpcoming] = useState<any>([]);
    const [popular, setPopular] = useState<any>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
            try {
                const {data: {results: nowPlayingResult}} = await moviesApi.nowPlaying();
                const {data: {results: upComingResult}} = await moviesApi.upcoming();
                const {data: {results: popularResult}} = await moviesApi.popular();
                setNowPlaying(nowPlayingResult);
                setUpcoming(upComingResult);
                setPopular(popularResult);
            } catch {
                setError("Sorry, can't Find Anythings....");
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    return <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
    />;
};

export default HomeContainer;