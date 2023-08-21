import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard ';

function MoviesCardList () {
  return (
    <section className="cards">
        <div className='cards__list'>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>

        </div>
        <div className='cards__button-wrap'>
            <button className='cards__button'type='button'>Ещё</button>
        </div>
    </section>


  );
}

export default MoviesCardList;