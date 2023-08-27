import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MIDDLE_SC,
  DESK_SC,
  MOVIES_MOBILE,
  MOVIES_MOBILE_ADD,
  MOVIES_MIDDLE,
  MOVIES_DESK,
  MOVIES_DESK_ADD,
} from '../../utils/constants';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  isMoreBtn,
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
}) => {
  const { pathname } = useLocation();
  const [moviesRendered, setMoviesRendered] = useState(MOVIES_DESK);
  const displayWidth = window.innerWidth;

  useEffect(() => {
    let timeoutOfResize
    const handleResize = () => {
      clearTimeout(timeoutOfResize)
      timeoutOfResize = setTimeout(() => {
        let visibleMovies
        if (displayWidth < MIDDLE_SC) {
          visibleMovies = MOVIES_MOBILE
        } else if (displayWidth >= DESK_SC) {
          visibleMovies = MOVIES_DESK
        } else {
          visibleMovies = MOVIES_MIDDLE
        }
        setMoviesRendered(visibleMovies)
      }, 500)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeoutOfResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMoreBtn = () => {
    if (displayWidth < DESK_SC) {
      setMoviesRendered(
        (prevMoviesRendered) => prevMoviesRendered + MOVIES_MOBILE_ADD
      )
    } else {
      setMoviesRendered(
        (prevMoviesRendered) => prevMoviesRendered + MOVIES_DESK_ADD
      )
    }
  }

  const moviesToRender = movies.slice(0, moviesRendered)

  return (
    <section className="cards" aria-label="список фильмов">
      <ul className="cards__list">
        {pathname !== '/saved-movies'
          ? moviesToRender.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                savedMovies={savedMovies}
                onLikeMovie={onLikeMovie}
              />
            ))
          : movies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
      </ul>
      {isMoreBtn && movies.length > moviesRendered && (
        <Button onClick={handleMoreBtn} />
      )}
    </section>
  )
}

export default MoviesCardList;
