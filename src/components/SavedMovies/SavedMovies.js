import { useEffect, useState } from "react";
import MainApi from "../../utils/MainApi";
import { BASE_URL, TIMING } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({ setSavedMovies, savedMovies }) => {
  const [notFound, setNotFound] = useState(false);
  const [result, setResult] = useState(JSON.parse(localStorage.getItem("savedMovies")) ?? []);

  const mainApi = new MainApi({
    url: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

   const searchState = JSON.parse(localStorage.getItem("searchState")) || {};
   const query = searchState.query || "";
   const isShort = searchState.isShort || false;

   useEffect(() => {
     if (savedMovies.length === 0) {
       getSavedMovies();
     } 
      else {
        handleSearch(searchState);
      }
   }, []);

  // useEffect(() => {
  //   getSavedMovies()
  // }, []);

  async function getSavedMovies() {
    return mainApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("savedMovies", JSON.stringify(movies));
        // searchState
         handleSearch(searchState,movies);
      })
      .catch((err) => console.log(err));
  }

  async function handleDeleteMovie(id) {
    return mainApi
      .deleteMovie(id)
      .then((res) => {
        const updatedFilteredMovies = result.filter((movie) => movie._id !== id);
        setSavedMovies(updatedFilteredMovies);
        setResult(updatedFilteredMovies);
        updatedFilteredMovies.length === 0
          ? localStorage.setItem("savedMovies", JSON.stringify([]))
          : localStorage.setItem("savedMovies", JSON.stringify(updatedFilteredMovies));
      })
      .catch((error) => console.log(error));
  }

  const handleSearch = (searchState) => {
    const { query, isShort } = searchState
    const searched = savedMovies.filter((movie) => {
      const searchedRU = movie.nameRU
        .toLowerCase()
        .includes(query.toLowerCase())
      const searchedEN = movie.nameEN
        .toLowerCase()
        .includes(query.toLowerCase())
      const isSearched = searchedRU || searchedEN
      const isShortFilm = movie.duration <= TIMING
      if (isShort) {
        return isSearched && isShortFilm
      } else {
        return isSearched
      }
    })

    if (searched.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
    setResult(searched)
  }

  return (
    <main>
      <SearchForm onSearch={handleSearch} query={query} checkbox={isShort} />
      {notFound && <p className="cards-error">Ничего не найдено</p>}
      <MoviesCardList isSaveMovies={true} isNeedMoreButton={false} movies={result} onDeleteMovie={handleDeleteMovie} />
    </main>
  );
};

export default SavedMovies;