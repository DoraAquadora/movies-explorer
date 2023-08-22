import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';
import Footer from '../Footer/Footer'

function SavedMovies () {
  return (
    <main>
      <SearchForm />
      <SavedMoviesList />
      <Footer />
    </main>
  )
}

export default SavedMovies;
