import './MoviesCard.css';
import film from '../../images/film.png';

function MoviesCard () {
  return (
    <>
    <li className="card" >
      <img className="card__image" alt='alt' src={film} />
      <div className="card__container">
        <div className="card__container-title">
          <h2 className="card__title">По волнам: Искусство звука в кино</h2>
          <button className='card__delete' type='button'></button>
        </div>
        <span className="card__time">1ч 42м</span>

       </div>

    </li>
    </>
  );
}

export default MoviesCard;