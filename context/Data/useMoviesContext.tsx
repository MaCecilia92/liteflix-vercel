import React, { useContext, createContext } from "react";
import useSWR, { SWRConfiguration } from "swr";

export interface movieprops {
  useMovies: (
    url: string,
    config?: SWRConfiguration
  ) => { movies: any; isLoading: boolean; isError: any };
}

export const MovieContext = createContext({} as movieprops);

export const useMovieContext = () => useContext(MovieContext);

const fetcher = (...args: [key: RequestInfo]) =>
  fetch(...args).then((res) => res.json());

const useMovies = (url: string, config: SWRConfiguration = {}) => {
  const API_KEY: string = "a89e309613186868928fd06e3181996b";

  const language: string = "&language=es";

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie${url}?api_key=${API_KEY}${language}`,
    fetcher
  );
  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const MovieProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={{ useMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
