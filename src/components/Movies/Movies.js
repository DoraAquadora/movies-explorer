import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = () => {

  return (
    <>
    <main className='movies'>
    <SearchForm />
        <MoviesCardList />
    </main>
        <Footer />
        </>
  )
}

export default Movies;
