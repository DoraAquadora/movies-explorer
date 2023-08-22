import './SavedMoviesList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

const SavedMoviesList = () => {
  const savedCards = ['2.png', '2.png' ]
  return (
    <section className="save-cards" aria-label="список сохраненных фильмов">
      <ul className="save-cards__list">
        {savedCards.map((card,i) => (
          <MoviesCard path={card} key={i}/>
        ))}
      </ul>
    </section>
  )
}

export default SavedMoviesList;
