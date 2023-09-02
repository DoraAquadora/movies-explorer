import { useEffect, useState } from "react";
import MainApi from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { BASE_URL, TIMING } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ setSavedMovies, savedMovies, onLikeMovie }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const mainApi = new MainApi({
    url: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const handleSearch = async (searchState) => {
    localStorage.setItem("searchState", JSON.stringify(searchState));
    const { query, isShort } = searchState;
    if (query.length !== 0) {
      setIsEmptyInput(false);
      if (allMovies.length === 0) {
        try {
          setIsLoading(true);
          setError(false);
          const allMoviesData = await moviesApi.getAllMovies();
          const savedMoviesData = await mainApi.getMovies();
          setAllMovies(allMoviesData);
          setSavedMovies(savedMoviesData);
          filterMovies(allMoviesData, query, isShort);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        filterMovies(allMovies, query, isShort);
      }
    } else {
      setIsEmptyInput(true);
      filterMovies([], query, isShort);
    }
  };

  const filterMovies = (movies, query, isShort) => {
    const searched = movies.filter((movie) => {
      const searchedRU = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const searchedEN = movie.nameEN.toLowerCase().includes(query.toLowerCase());
      const isSearched = searchedRU || searchedEN;
      const isShortFilm = movie.duration <= TIMING;
      if (query && isShort) {
        return isSearched && isShortFilm;
      } else if (!query) {
        return null;
      } else {
        return isSearched;
      }
    });
    if (query && searched.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setSearchedMovies(searched);
    localStorage.setItem("searchedMovies", JSON.stringify(searched));
  };

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const searchState = JSON.parse(localStorage.getItem("searchState")) || {};
  const query = searchState.query || "";
  const isShort = searchState.isShort || false;

  return (
    <main>
      <SearchForm onSearch={handleSearch} query={query} checkbox={isShort} />
      {error ? (
        <p className="cards-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и
          попробуйте ещё раз
        </p>
      ) : isEmptyInput ? (
        <p className="cards-error">Нужно ввести ключевое слово</p>
      ) : notFound ? (
        <p className="cards-error">Ничего не найдено</p>
      ) : isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={JSON.parse(localStorage.getItem("searchedMovies")) || searchedMovies}
          savedMovies={savedMovies}
          isMoreBtn={true}
          onLikeMovie={onLikeMovie}
        />
      )}
    </main>
  );
};

export default Movies;
