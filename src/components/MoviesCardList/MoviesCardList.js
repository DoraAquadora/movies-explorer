import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
  const cards = [
    '1.png',  '1.png',  '1.png',  '1.png',  '1.png'
  ]
  return (
    <section className="cards" aria-label="список фильмов">
      <ul className="cards__list">
        {cards.map((card, i) => (
          <MoviesCard path={card} key={i} />
        ))}
      </ul>
      <div className='cards__button-wrap'>
    <button className='cards__button'type='button'>Ещё</button>
</div>
    </section>
  )
}

export default MoviesCardList;
