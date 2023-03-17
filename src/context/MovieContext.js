import { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

    const getData = useCallback(async () => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;

        const result = await axios.get(url)
        setMovies(result.data.results);
        console.log(result.data.results);
    }, [TMDB_API_KEY]);

    useEffect(() => {
        getData("any");
    }, [getData]);

    

    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
};


