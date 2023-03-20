import { createContext, useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const useMovie = () => { 
    return useContext(MovieContext);
}

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [userYear, setUserYear] = useState("");
    const [userVoteThreshold, setUserVoteThreshold] = useState(0);
    const [loading, setLoading] = useState(true);


    const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;

    const getData = useCallback(async (url) => {
        const result = await axios.get(url)
        setMovies(result.data.results);
        setLoading(false);
        // console.log(result.data.results);
    }, [setMovies, setLoading]);

    useEffect(() => {
        getData(url);
    }, []);

    const values = {
        userYear,
        setUserYear,
        userVoteThreshold,
        setUserVoteThreshold,
        // TMDBAPIKEYS,
        loading,
        getData,
        url,
        movies,
        setMovies,
        TMDB_API_KEY
    }

    return (
        <MovieContext.Provider value={{ movies, ...values }}>
            {children}
        </MovieContext.Provider>
    );
};


