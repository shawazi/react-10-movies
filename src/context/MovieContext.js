import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    let [movies, setMovies] = useState([]);

    const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

    const getData = async () => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;

        movies = await axios.get(url);
        console.log(movies);
    }

    useEffect(() => {
        getData("any");
    }, []);

    return (
        <MovieContext.Provider value={{ getData }}>
            {children}
        </MovieContext.Provider>
    );
};


