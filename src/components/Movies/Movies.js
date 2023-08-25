import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

export default function Movies() {
  return (
    <section>
      <Header />
      <SearchForm />
      <MovieCardList />
      <Footer />
    </section>
  );
}
