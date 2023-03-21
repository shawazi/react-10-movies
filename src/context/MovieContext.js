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
    const [mediaImg, setMediaImg] = useState(new Map());

    const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;

    const getData = useCallback(async (url) => {
        try {
          const result = await axios.get(url);
          setLoading(false);
          if (result?.data?.results) {
            setMediaImg(prev => {
              const mediaBools = {};
              result?.data.results.forEach(movie => {
                mediaBools[movie.id] = movie.poster_path !== null;
              });
              setMovies(result?.data.results);
            //   console.log(result?.data?.results)
              return mediaBools;
            })
          }
        } catch (error) {
          console.error(error);
        }
      }, [setMovies, setLoading]);      

    useEffect(() => {
        getData(url);
    }, [getData, url]);

    const values = {
        userYear,
        setUserYear,
        userVoteThreshold,
        setUserVoteThreshold,
        loading,
        getData,
        url,
        movies,
        setMovies,
        TMDB_API_KEY,
        mediaImg
    }

    return (
        <MovieContext.Provider value={{ ...values }}>
            {children}
        </MovieContext.Provider>
    );
};


