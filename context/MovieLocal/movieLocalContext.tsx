import {
  useContext,
  createContext,
  useState,
  FC,
  SetStateAction,
  Dispatch,
  useCallback,
} from "react";

export interface propsMovieLocal {
  saveMovie?: (movie: any) => void;
  setMovieLocalstorage?: Dispatch<SetStateAction<propsMovieLocal[]>>;
  movieLocalstorage?: any[];
  base64ToFile?: (base64data: any, fileName: any) => File;
  getMovieLocalstorage?: () => void;
}

export interface props {
  children?: React.ReactNode;
}

//export const TodoContext = React.createContext<TodoContextType | null>(null);

export const MovieFromLocalstorageContext =
  createContext<propsMovieLocal | null>(null);

// export const useMovieLocalstorage = () =>
//   useContext(MovieFromLocalstorageContext);

export const MovieLocalProvider: FC<props> = ({ children }) => {
  const [movieLocalstorage, setMovieLocalstorage] = useState<propsMovieLocal[]>(
    []
  );

  const saveMovie = (movie: any) => {
    setMovieLocalstorage(movie);
  };

  const base64ToFile = (base64data: any, fileName: any) => {
    const bs = atob(base64data);
    const buffer = new ArrayBuffer(bs.length);
    const ba = new Uint8Array(buffer);
    for (let i = 0; i < bs.length; i++) {
      ba[i] = bs.charCodeAt(i);
    }
    return new File([ba], fileName);
  };

  const getMovieLocalstorage = () => {
    useCallback(() => {
      const data = JSON.parse(localStorage.getItem("movieArray") || "[]");
      setMovieLocalstorage(
        data?.map((movie) => {
          const base64Image = base64ToFile(movie.image, movie.title);
          movie.image = URL.createObjectURL(
            new Blob([base64Image], { type: "application/zip" })
          );
          console.log("movie1234", movie);
          return movie;
        })
      );
    }, []);
  };

  return (
    <MovieFromLocalstorageContext.Provider
      value={{
        saveMovie,
        movieLocalstorage,
        setMovieLocalstorage,
        base64ToFile,
        getMovieLocalstorage,
      }}>
      {children}
    </MovieFromLocalstorageContext.Provider>
  );
};
