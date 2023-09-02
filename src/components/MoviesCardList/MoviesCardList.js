import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    DESK_SC,
    MIDDLE_SC,
    MOVIES_DESK,
    MOVIES_DESK_ADD,
    MOVIES_MIDDLE,
    MOVIES_MOBILE,
    MOVIES_MOBILE_ADD,
} from "../../utils/constants";
import Button from "../Button/Button";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
const MoviesCardList = ({ movies, isMoreBtn, savedMovies, onLikeMovie, onDeleteMovie }) => {
    const { pathname } = useLocation();
    const [moviesRendered, setMoviesRendered] = useState(4); // Always display 4 rows of cards
    const displayWidth = window.innerWidth;
    useEffect(() => {
        let timeoutOfResize;
        const handleResize = () => {
            clearTimeout(timeoutOfResize);
            timeoutOfResize = setTimeout(() => {
                let visibleMovies;
                if (displayWidth < 1278) {
                    visibleMovies = 8;
                } else if (displayWidth >= 1290) {
                    visibleMovies = 16;
                } else {
                    visibleMovies = 5;
                }
                setMoviesRendered(visibleMovies);
            }, 50);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(timeoutOfResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleMoreBtn = () => {
        if (displayWidth < DESK_SC) {
            setMoviesRendered((prevMoviesRendered) => prevMoviesRendered + 2);
        } else {
            setMoviesRendered((prevMoviesRendered) => prevMoviesRendered + 4);
        }
    };
    const moviesToRender = movies.slice(0, moviesRendered);
    return (
        <section className="cards" aria-label="список фильмов">
            <ul className="cards__list">
                {pathname !== "/saved-movies"
                    ? moviesToRender.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} savedMovies={savedMovies} onLikeMovie={onLikeMovie} />
                    ))
                    : movies.map((movie) => <MoviesCard key={movie._id} movie={movie} onDeleteMovie={onDeleteMovie} />)}
            </ul>
            {isMoreBtn && movies.length > moviesRendered && <Button onClick={handleMoreBtn} />}
        </section>
    );
};
export default MoviesCardList;
